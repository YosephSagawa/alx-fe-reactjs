import { Link, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "black",
          padding: "20px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            paddingRight: "20px",
          }}
        >
          <li>
            <Link
              to={"/"}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"about"}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"services"}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to={"contact"}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
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
