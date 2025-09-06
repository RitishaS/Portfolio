import './ProfileImage.css';
import profileImg from '../assets/photo.jpg';


const ProfileImage = () => {
  return (
    <div className="profile-wrapper">
      <div className="gradient-ring"></div>

     <svg viewBox="0 0 500 500" className="circle-svg">
  <defs>
    <path
      id="circlePath"
      d="M 250, 250 m -220, 0 a 220,220 0 1,1 440,0 a 220,220 0 1,1 -440,0"
    />
  </defs>
  <text fill="#ffffff" fontSize="32" fontWeight="bold">
  <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
    &nbsp; • MERN • Creativity • Code • Learning •
  </textPath>
</text>

</svg>


      <img src={profileImg} alt="Profile" className="profile-img" />
    </div>
  );
};

export default ProfileImage;
