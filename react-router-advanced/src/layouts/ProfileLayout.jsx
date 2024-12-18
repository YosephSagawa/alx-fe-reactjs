import { NavLink, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ProfileLayout;
