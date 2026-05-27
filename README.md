# 📰 Personalized Content Dashboard

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)

A personalized content dashboard built with **React 19** and **Tailwind CSS** that delivers real-time news with smart filtering, debounced search, and favourites management — all deployed live on Vercel.

---

## 🌐 Live Demo

👉 [my-dashboard-app-chi-ten.vercel.app](https://my-dashboard-app-chi-ten.vercel.app/)

---

## 📌 Overview

This project is a responsive, interactive news dashboard that fetches live content via a News API. Users can filter articles by category, search with debounced input for performance, and save their favourite articles — all persisted across sessions using `localStorage`.

---

## 🎯 Features

- 🔍 **Debounced Search** — smooth, performant real-time search without excessive API calls
- 🗂️ **Category Filtering** — browse news by topic (technology, sports, business, and more)
- ❤️ **Favourites Management** — save and revisit articles you care about
- 💾 **localStorage Persistence** — favourites survive page refreshes
- 📱 **Fully Responsive** — works seamlessly on desktop and mobile
- ⚡ **Fast Dev Experience** — powered by Vite 8 with Hot Module Replacement (HMR)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI component library |
| Vite 8 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| News API | Real-time news data |
| localStorage | Client-side persistence |
| ESLint | Code quality & linting |
| Vercel | Deployment & hosting |

---

## 🗂️ Project Structure

```
my-dashboard-app/
│
├── public/                  # Static assets (favicon, etc.)
├── src/
│   ├── components/          # Reusable UI components
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
│
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- A free API key from [newsapi.org](https://newsapi.org)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/bettykgeorge/my-dashboard-app.git
cd my-dashboard-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set up environment variables

Create a `.env` file in the root directory:

```env
VITE_NEWS_API_KEY=your_api_key_here
```

### 4️⃣ Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5️⃣ Build for production

```bash
npm run build
```

---

## 🖥️ Screenshots

> *(Add screenshots here — drag and drop images into the GitHub editor to auto-upload)*

---

## 🔮 Future Improvements

- [ ] Dark / light mode toggle
- [ ] User authentication
- [ ] More news categories and sources
- [ ] Infinite scroll or pagination
- [ ] PWA support for offline reading

---

## 🧠 Key Concepts Demonstrated

- Component-based architecture with React 19
- Real-time data fetching with News API
- Debounced search for performance optimisation
- Controlled components and local state management
- Responsive layout with Tailwind CSS utility classes
- Client-side persistence with localStorage

---

## 👩‍💻 Author

**Betty K George**

[![GitHub](https://img.shields.io/badge/GitHub-bettykgeorge-181717?logo=github)](https://github.com/bettykgeorge)

---

## 📌 License

This project is for academic and learning purposes.<img width="1867" height="925" alt="Screenshot 2026-05-27 201804" src="https://github.com/user-attachments/assets/00ae44bf-a38a-46a0-a0dd-7e3ce729bfe3" />
<img width="1872" height="935" alt="Screenshot 2026-05-27 201550" src="https://github.com/user-attachments/assets/0c201d14-7cf9-4a19-8376-9b293fd50a2c" />
![Uploading Screenshot 2026-05-27 201321.png…]()
