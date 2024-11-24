import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  BrowserRouter,
  Router,
  Routes,
} from "react-router-dom";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import ProfileLayout from "./layouts/ProfileLayout";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/Profile" element={<ProfileLayout />}>
            <Route path="/ProfileDetails" element={<ProfileDetails />} />
            <Route path="/ProfileSettings" element={<ProfileSettings />} />
          </Route>
          <Route path="/users" element={<UserLayour />}>
            <Route path=":userId" element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
