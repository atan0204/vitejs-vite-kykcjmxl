import TimelineEntry from '../../timeline/TimelineEntry/TimelineEntry'
import './Discography.css'

export default function Discography({ entries }) {
  return (
    <div className="discography">
      <div className="discography-rail" aria-hidden="true" />
      {entries.map((entry, i) => (
        <TimelineEntry
          key={`${entry.year}-${entry.title}`}
          year={entry.year}
          title={entry.title}
          note={entry.note}
          side={i % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  )
}
