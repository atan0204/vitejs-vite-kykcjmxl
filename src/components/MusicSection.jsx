function AlbumCard({ album }) {
  return (
    <article className="album-card">
      <div className="album-card__visual">
        <img src={album.image} alt={album.title} loading="lazy" />
        {album.record ? (
          <img
            className="album-card__record"
            src={album.record}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="album-card__body">
        <h3>{album.title}</h3>
        <p>{album.description}</p>
        <a className="cta-button cta-button--small" href="#footer">
          Listen Here
        </a>
      </div>
    </article>
  )
}

function MusicSection({ albums }) {
  return (
    <section className="music-section" id="music">
      <div className="section-heading">
        <h2>Latest Music Albums</h2>
      </div>

      <div className="album-showcase">
        {albums.map((album) => (
          <AlbumCard key={album.title} album={album} />
        ))}
      </div>

      <div className="view-all">
        <a href="#merch">View All</a>
      </div>
    </section>
  )
}

export default MusicSection
