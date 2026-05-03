import PageLayout from '../../components/layout/PageLayout/PageLayout'
import Button from '../../components/ui/Button/Button'
import './NotFound.css'

export default function NotFound() {
  return (
    <PageLayout title="Page Not Found">
      <section className="not-found" aria-label="Page not found">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Button to="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </section>
    </PageLayout>
  )
}
