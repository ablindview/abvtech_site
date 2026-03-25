import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Dwayne Davis &mdash; A Blind View Tech
        </p>
        <p className="footer-tagline">Built with accessibility in mind.</p>
      </div>
    </footer>
  )
}
