import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div class="container">
        <Outlet />
      </div>
      <footer>Geeks 2024</footer>
    </>
  );
};
export default Layout;
