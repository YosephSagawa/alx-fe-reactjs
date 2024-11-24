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
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/Profile" element={<Profile />}>
            <Route path="/ProfileDetails" element={<ProfileDetails />} />
            <Route path="/ProfileSettings" element={<ProfileSettings />} />
          </Route>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
