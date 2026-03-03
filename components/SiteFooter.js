export default function SiteFooter() {
  return (
    <div className="footer">
      <div className="copyright">Copyright © 2026 AzureDream All rights reserved.</div>
      <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="netlify-link">
        <img
          src="/images/Netlify_logo_.svg"
          alt="Netlify"
          width="30"
          height="12"
          loading="lazy"
          decoding="async"
        />
        Powered by Netlify
      </a>
    </div>
  );
}
