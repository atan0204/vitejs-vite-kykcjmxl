import PageLayout from '../../components/layout/PageLayout/PageLayout'
import HeroBanner from '../../components/sections/HeroBanner/HeroBanner'
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading'
import VideoGrid from '../../components/sections/VideoGrid/VideoGrid'
import { videoCards, bgImages } from '../../data/siteContent'
import './Video.css'

export default function Video() {
  return (
    <PageLayout title="Videos">
      <HeroBanner
        image={bgImages.hero}
        eyebrow="Watch"
        title="Music Videos"
        subtitle="Cinematic visuals that bring the music to life."
      />

      <section className="video-library" aria-labelledby="video-library-heading">
        <SectionHeading
          title="Video Library"
          eyebrow="All Videos"
          tone="dark"
        />
        <VideoGrid videos={videoCards} columns={3} />
      </section>
    </PageLayout>
  )
}
