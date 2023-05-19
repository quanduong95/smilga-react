import logo from "../images/logo.svg";
import { pageLinks, iconList } from "../data";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((pageLink) => {
              const { id, href, text } = pageLink;
              return (
                <li key={id}>
                  <a href={href} className="nav-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="nav-icons">
            {iconList.map((icon) => (
              <li key={icon.id}>
                <a href={icon.href} className="nav-icon">
                  <i className={icon.iconClass}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
