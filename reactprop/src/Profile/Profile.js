import React from 'react';
import PropTypes from 'prop-types';
 

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div className="profile" style={{ textAlign: "center" }}>
     
      {children && <div className="profile-image">{children}</div>}
      <h2 className="profile-name" style={{ margin: "0" }}>{fullName}</h2>
      <p className="profile-profession" style={{ margin: "0" }}>{profession}</p>
      <p className="profile-bio" style={{ margin: "0" }}>{bio}</p>
      <button onClick={() => handleName(fullName)} style={{ marginTop: "1rem" }}>Show Alert</button>
      
    </div>
    
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element,
  handleName: PropTypes.func.isRequired
};

Profile.defaultProps = {
  fullName: "Unknown",
  bio: "",
  profession: "Unknown",
  handleName: () => alert("Name not available.")
};

export default Profile;
