import WelcomeMessage from "./components/WelcomeMessage.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import UserProfile from "./components/UserProfile.jsx";
import "./App.css";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <>
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Header />
      <MainContent />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
