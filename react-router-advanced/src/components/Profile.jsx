import { Navlink, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Navlink to="ProfileDetails">ProfileDetails</Navlink>
          </li>
          <li>
            <Navlink to="ProfileSettings">ProfileSettings</Navlink>
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

export default Profile;
