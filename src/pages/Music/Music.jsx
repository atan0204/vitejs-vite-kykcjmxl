import { useState, useMemo } from 'react'
import PageLayout from '../../components/layout/PageLayout/PageLayout'
import HeroBanner from '../../components/sections/HeroBanner/HeroBanner'
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading'
import AlbumGrid from '../../components/sections/AlbumGrid/AlbumGrid'
import Button from '../../components/ui/Button/Button'
import { albumCards, bgImages } from '../../data/siteContent'
import './Music.css'

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Pre-2018', value: 'pre-2018' },
  { label: '2018 onwards', value: '2018+' },
]

export default function Music() {
  const [filter, setFilter] = useState('all')

  const filteredAlbums = useMemo(() => {
    if (filter === 'all') return albumCards
    if (filter === 'pre-2018') return albumCards.filter((a) => a.year < 2018)
    return albumCards.filter((a) => a.year >= 2018)
  }, [filter])

  return (
    <PageLayout title="Music">
      <HeroBanner
        image={bgImages.music}
        eyebrow="Discography"
        title="The Music"
        subtitle="Explore the full catalogue of studio albums, from debut to latest."
      />

      <section className="music-catalogue" aria-labelledby="music-catalogue-heading">
        <SectionHeading
          title="Full Catalogue"
          eyebrow="Albums"
        />

        {/* Filter tabs */}
        <div className="music-filters" role="tablist" aria-label="Filter by era">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filter === f.value}
              className={`music-filters-tab ${filter === f.value ? 'is-active' : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <AlbumGrid albums={filteredAlbums} />

        <div className="music-streaming">
          <p className="music-streaming-text">Available on all streaming platforms</p>
          <div className="music-streaming-buttons">
            <Button variant="primary" size="md" href="https://open.spotify.com">
              Spotify
            </Button>
            <Button variant="outline" size="md" href="https://music.apple.com">
              Apple Music
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
