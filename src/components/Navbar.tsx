interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "#scrollspyNav", label: "Home" },
  { href: "#scrollspyServices", label: "Services" },
  { href: "#scrollspyPortfolio", label: "Portfolio" },
  { href: "#scrollspyAbout", label: "About" },
  { href: "#scrollspyTeam", label: "Team" },
  { href: "#scrollspyPricing", label: "Pricing" },
  { href: "#scrollspyBlog", label: "Blog" },
  { href: "#scrollspyContact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header id="header" className="sticky-top bsb-tpl-header-sticky bsb-tpl-header-sticky-animationX">
      <nav
        id="scrollspyNav"
        className="navbar navbar-expand-lg bsb-tpl-bg-blue bsb-navbar bsb-navbar-hover bsb-navbar-caret bsb-tpl-navbar-sticky"
        data-bsb-sticky-target="#header"
      >
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src="/assets/img/branding/wave-logo.svg" className="bsb-tpl-logo" alt="" />
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul id="bsb-tpl-navbar" className="navbar-nav justify-content-end flex-grow-1">
                {NAV_LINKS.map((link) => (
                  <li className="nav-item" key={link.href}>
                    <a
                      className="nav-link"
                      href={link.href}
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
