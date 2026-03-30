function VideoCard({ video }) {
  return (
    <article className="video-card">
      <img src={video.image} alt={video.title} loading="lazy" />
      <div className="video-card__label">{video.title}</div>
    </article>
  )
}

function VideosSection({ videos }) {
  return (
    <section className="videos-section" id="video">
      <div className="section-heading section-heading--dark">
        <h2>Top Videos</h2>
      </div>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.title} video={video} />
        ))}
      </div>
    </section>
  )
}

export default VideosSection
