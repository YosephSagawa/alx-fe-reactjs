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
import HomeLayout from "./layouts/HomeLayout";
import Home from "./components/Home";
import profile from "./components/profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/Profile"
            element={
              <ProtectedRoute>
                <profile />
              </ProtectedRoute>
            }
          >
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
