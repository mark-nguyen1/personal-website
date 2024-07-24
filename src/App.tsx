import NavBar from "./components/navigation-bar/NavBar";
import Profile from "./components/profile/Profile";
import InfoCards from "./components/card/InfoCards";
import ContactForm from "./components/contact/ContactForm";
import { Toaster } from "react-hot-toast";
import "./App.css";
function App() {
  return (
    <div>
      <Toaster />
      <NavBar />
      <div id="home">
        <Profile />
      </div>
      <div id="projects">
        <h1 className="section">Projects</h1>
        <InfoCards />
      </div>
      <div id="contact" className="screen-view">
        <h1 className="section">Contact</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
