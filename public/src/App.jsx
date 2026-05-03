import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Music from './pages/Music/Music'
import Video from './pages/Video/Video'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
        <Route path="/video" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}
