import { Link, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "black",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            justifyContent: "start",
          }}
        >
          <li>
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"about"}
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"services"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to={"contact"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
