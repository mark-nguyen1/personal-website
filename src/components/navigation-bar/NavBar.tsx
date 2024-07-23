import ProgressBar from "./ProgressBar";
const NavBar = () => {
  return (
    <>
      {" "}
      <div id="navBar" className="header">
        <header>
          <ProgressBar></ProgressBar>
          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
          </nav>
        </header>
      </div>
    </>
  );
};

export default NavBar;
