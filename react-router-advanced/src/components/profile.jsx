import { NavLink, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const profile = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="ProfileDetails">ProfileDetails</NavLink>
          </li>
          <li>
            <NavLink to="ProfileSettings">ProfileSettings</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="ProfileDetails" element={<ProfileDetails />} />
        <Route path="ProfileSettings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default profile;
