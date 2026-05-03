import AlbumCard from '../../cards/AlbumCard/AlbumCard'
import './AlbumGrid.css'

export default function AlbumGrid({ albums }) {
  return (
    <div className="album-grid">
      {albums.map((album, i) => (
        <AlbumCard key={album.title} album={album} index={i} />
      ))}
    </div>
  )
}
