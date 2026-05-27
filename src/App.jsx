import { useEffect, useState } from "react"

function App() {

  // 🔹 Step 1: Create state to store data
  const [category, setCategory] = useState(() => {
  return localStorage.getItem("category") || "technology"
  })
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites")
    return saved ? JSON.parse(saved) : []
  })
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")

  // 🔹 Step 2: Fetch data when app loads
  useEffect(() => {
    setLoading(true)
    console.log("API KEY:", import.meta.env.VITE_API_KEY)
  
    fetch(`https://api.allorigins.win/raw?url=https://gnews.io/api/v4/search?q=${debouncedSearch || category}&lang=en&token=${import.meta.env.VITE_API_KEY}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.articles) {
          setPosts(data.articles)
        } else {
           setPosts([])
           console.error("API error:", data)
        }
        setLoading(false)
     })
     .catch((error) => {
        console.error("Fetch error:", error)
        setLoading(false)
     })
   }, [category, debouncedSearch])

  useEffect(() => {
    localStorage.setItem("category", category)
  }, [category])
  
  useEffect(() => {
   localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)

    return () => clearTimeout(timer)
  }, [search])

  return (
    <div className="h-screen flex flex-col">

      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">My Dashboard</h1>

        <input 
          type="text" 
          placeholder="Search..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1 rounded text-black"
        />  
      </header>

      {/* Layout */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <aside className="w-48 bg-gray-200 p-4">
          <p className="mb-3 cursor-pointer hover:text-blue-500">🏠 Home</p>
          <p className="mb-3 cursor-pointer hover:text-blue-500">🔥 Trending</p>
          <p className="cursor-pointer hover:text-blue-500">⭐ Favorites</p>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <div className="mb-4 space-x-2">
            <button onClick={() => setCategory("technology")} className="bg-blue-500 text-white px-3 py-1 rounded">
             Tech
            </button>

            <button onClick={() => setCategory("sports")} className="bg-green-500 text-white px-3 py-1 rounded">
              Sports
            </button>

            <button onClick={() => setCategory("business")} className="bg-purple-500 text-white px-3 py-1 rounded">
             Business
            </button>
          </div>
          <h2 className="text-xl font-semibold mb-4">Feed</h2>
          <h2 className="text-xl font-semibold mt-6 mb-4">Favorites</h2>

          {favorites.map((fav, index) => (
            <div key={index} className="bg-yellow-100 shadow-md p-4 rounded mb-4">
             <h3 className="font-bold">{fav.title}</h3>
             <p>{fav.description}</p>

             <button
               onClick={() => {
                 const updated = favorites.filter((item, i) => i !== index)
                 setFavorites(updated)
                }}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
               ❌ Remove
              </button>
           </div>
          ))}
          {/* 🔹 Step 3: Show API data */}
          {loading && <p className="text-lg">Loading news...</p>}
          {!loading && Array.isArray(posts) && posts.map((post, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded mb-4">
             <h3 className="font-bold">{post.title}</h3>
             <p>{post.description}</p>
          
             <a 
               href={post.url} 
               target="_blank" 
               className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded mr-2"
              >
                Read More
              </a>
             <button 
                onClick={() => {
                  const alreadyExists = favorites.some(
                    (item) => item.title === post.title
                  )

                  if (!alreadyExists) {
                    setFavorites([...favorites, post])
                  }
                }}  
                className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded">
               ⭐ Add to Favorites
              </button>
           </div>
         ))}
          {!loading && posts.length === 0 && (
           <p className="text-gray-500">No results found</p>
          )}
        </main>

      </div>
    </div>
  )
}

export default App