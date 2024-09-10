import "./styles.css";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import iconAdmin from "../../assets/iconAdmin.svg"
import * as authService from "../../services/auth-service"

export default function HeaderClient() {
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to={"/"}>
          <h1>DSCommerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">

            {
              authService.hasAnyRoles(["ROLE_ADMIN"]) &&
              <Link to={"/admin"}>
              <div className="dsc-menu-item">
                <img src={iconAdmin} alt="Admin" />
              </div>
            </Link>
            }
          

            <Link to={"/cart"}>
              <div className="dsc-menu-item">
                <CartIcon />
              </div>
            </Link>
          </div>

          <Link to={"/login"}>
            <a href="#">Entrar</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
