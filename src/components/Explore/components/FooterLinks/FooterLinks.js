import "./footerLinks.css";

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <a className="footer-links__link" href="/terms-of-service">
        Terms of Service
      </a>

      <a className="footer-links__link" href="/privacy-policy">
        Privacy Policy
      </a>

      <a className="footer-links__link" href="/cookie-policy">
        Cookie Policy
      </a>

      <a className="footer-links__link" href="/accessibility">
        Accessibility
      </a>

      <a className="footer-links__link" href="/ads-info">
        Ads info
      </a>

      <a className="footer-links__link" href="/more">
        More...
      </a>

      <a className="footer-links__link" href="/copyright">
        &copy; 2023 X Corp.
      </a>
    </div>
  );
};

export default FooterLinks;
