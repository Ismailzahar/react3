import React from 'react';
import Profile from './Profile/Profile';
import './App.css';



function App() {
  const handleName = (name) => {
    alert(`Profile user name is ${name}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="ZAHAR ISMAIL"
        bio="je suis un  web developer"
        profession="Front-end & back-end  Developer"
        handleName={handleName}
      >
      
      </Profile>
    </div>
  );
}

export default App;
