import "./navbar.css";
import { Link } from "react-router-dom";

function NavbarComponent() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand nav-logo" to="">
            <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/IMG_2983_1.gif?v=1703310470" alt="noise-logo" className="img-fluid logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-list" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to=""
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Luna Rings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-disabled="true"
                  to=""
                >
                  Gift Stores
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-disabled="true"
                  to=""
                >
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-disabled="true"
                  to=""
                >
                  Blogs
                </Link>
              </li>
            </ul>
            <div className="right-controls">
              <Link className="icon search-icon" to="">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
              <Link className="icon bag-icon" to="">
                <i className="fa-solid fa-bag-shopping"></i>
              </Link>
              <Link className="icon accounts-icon" to="">
                <i className="fa-regular fa-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default NavbarComponent;
