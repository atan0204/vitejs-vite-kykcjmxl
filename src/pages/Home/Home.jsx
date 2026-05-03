import PageLayout from '../../components/layout/PageLayout/PageLayout'
import HeroBanner from '../../components/sections/HeroBanner/HeroBanner'
import FeaturedRelease from '../../components/sections/FeaturedRelease/FeaturedRelease'
import AboutTeaser from '../../components/sections/AboutTeaser/AboutTeaser'
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading'
import AlbumGrid from '../../components/sections/AlbumGrid/AlbumGrid'
import VideoGrid from '../../components/sections/VideoGrid/VideoGrid'
import MerchGrid from '../../components/sections/MerchGrid/MerchGrid'
import ParallaxSection from '../../components/sections/ParallaxSection/ParallaxSection'
import Button from '../../components/ui/Button/Button'
import {
  heroContent,
  aboutContent,
  albumCards,
  videoCards,
  merchItems,
  bgImages,
} from '../../data/siteContent'
import './Home.css'

export default function Home() {
  return (
    <PageLayout title="Home">
      {/* Hero */}
      <HeroBanner
        image={heroContent.heroImage}
      />

      {/* Featured Release */}
      <FeaturedRelease
        image={heroContent.featuredAlbumImage}
        title={heroContent.title}
        eyebrow={heroContent.eyebrow}
        description={heroContent.description}
      />

      {/* About Teaser */}
      <AboutTeaser
        bgImage={aboutContent.bgImage}
        title={aboutContent.title}
        description={aboutContent.short}
      />

      {/* Music Section */}
      <ParallaxSection bgImage={bgImages.music} overlay="dark" className="home-music">
        <SectionHeading
          title="Latest Music Albums"
          eyebrow="Discography"
        />
        <AlbumGrid albums={albumCards.slice(0, 3)} />
        <div className="home-section-cta">
          <Button to="/music" variant="ghost">View All</Button>
        </div>
      </ParallaxSection>

      {/* Videos Section */}
      <ParallaxSection bgImage={bgImages.hero} overlay="light" className="home-videos">
        <SectionHeading
          title="Top Videos"
          tone="dark"
        />
        <VideoGrid videos={videoCards.slice(0, 8)} columns={4} />
      </ParallaxSection>

      {/* Merch Section */}
      <section className="home-merch" aria-labelledby="home-merch-heading">
        <SectionHeading
          title="Merch"
          eyebrow="Official Store"
        />
        <MerchGrid items={merchItems} />
        <div className="home-section-cta">
          <Button variant="ghost">See All</Button>
        </div>
      </section>
    </PageLayout>
  )
}
