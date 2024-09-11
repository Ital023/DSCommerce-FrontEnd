import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/auth-service";
import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";

export default function LoggedUser() {

    const navigate = useNavigate();

    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick() {
        authService.logout();
        setContextTokenPayload(undefined);
        navigate("/catalog");
    }

  return (
    contextTokenPayload && authService.isAuthenticated() 
    ? (
    <div className="dsc-logged-user">
      <p>{contextTokenPayload.username}</p>
      <span onClick={handleLogoutClick}>Sair</span>
    </div>
    ) 
    : (
    <Link to={"/login"}>
      <a href="#">Entrar</a>
    </Link>
  )
);
}
