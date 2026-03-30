import './App.css'
import AboutSection from './components/AboutSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import MerchSection from './components/MerchSection'
import MusicSection from './components/MusicSection'
import VideosSection from './components/VideosSection'
import {
  aboutContent,
  albumCards,
  heroContent,
  merchItems,
  navItems,
  socialLinks,
  videoCards,
} from './data/siteContent'

function App() {
  return (
    <div className="lana-page">
      <HeroSection navItems={navItems} {...heroContent} />
      <AboutSection {...aboutContent} />
      <MusicSection albums={albumCards} />
      <VideosSection videos={videoCards} />
      <MerchSection items={merchItems} />
      <FooterSection navItems={navItems} socialLinks={socialLinks} />
    </div>
  )
}

export default App
