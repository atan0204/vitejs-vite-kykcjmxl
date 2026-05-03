import MerchCard from '../../cards/MerchCard/MerchCard'
import './MerchGrid.css'

export default function MerchGrid({ items }) {
  return (
    <div className="merch-grid">
      {items.map((item, i) => (
        <MerchCard key={item.title} item={item} index={i} />
      ))}
    </div>
  )
}
