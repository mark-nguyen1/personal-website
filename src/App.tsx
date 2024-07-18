import NavBar from "./components/navigation-bar/NavBar";
import Profile from "./components/profile/Profile";
import InfoCards from "./components/card/InfoCards";
import ContactForm from "./components/contact/ContactForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <NavBar></NavBar>
      <Profile></Profile>
      <InfoCards></InfoCards>
      <ContactForm></ContactForm>
    </>
  );
}

export default App;
