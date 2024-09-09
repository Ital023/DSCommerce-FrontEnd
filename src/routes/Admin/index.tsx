import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import "./styles.css"

export default function Admin() {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
    </>
  );
}
