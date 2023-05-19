import { pageLinks, iconList } from "../data";

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="footer-icons">
          {iconList.map((icon) => (
            <li key={icon.id}>
              <a href={icon.link} className="footer-icon">
                <i className={icon.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
