import VideoCard from '../../cards/VideoCard/VideoCard'
import './VideoGrid.css'

export default function VideoGrid({ videos, columns = 4 }) {
  return (
    <div className="video-grid" style={{ '--cols': columns }}>
      {videos.map((video, i) => (
        <VideoCard key={video.title} video={video} index={i} />
      ))}
    </div>
  )
}
