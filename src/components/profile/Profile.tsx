import profilePicutre from "../../assets/profile-picture.png";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="content-container">
        <h1>
          Hello, I'm <br />
          <span>Mark Nguyen</span>
        </h1>
        <p>
          A computer science student from United States. I aim to deepen my
          understanding in various areas of technology and product development.
        </p>
      </div>
      <div className="image-container ">
        <img
          className="circular-image"
          src={profilePicutre}
          alt="my profile picture"
        ></img>
      </div>
    </div>
  );
};

export default Profile;
