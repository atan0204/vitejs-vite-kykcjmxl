function MerchCard({ item }) {
  return (
    <article className="merch-card">
      <div className="merch-card__imageWrap">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.price}</p>
    </article>
  )
}

function MerchSection({ items }) {
  return (
    <section className="merch-section" id="merch">
      <div className="section-heading">
        <h2>MERCH</h2>
      </div>
      <div className="merch-grid">
        {items.map((item) => (
          <MerchCard key={item.title} item={item} />
        ))}
      </div>
      <div className="view-all">
        <a href="#footer">See All</a>
      </div>
    </section>
  )
}

export default MerchSection
