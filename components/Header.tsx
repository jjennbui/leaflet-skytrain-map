import React from 'react';


export default function Header() {
  return (
    <header style={headerStyles}>
        <img src='../images/logo.png' width={100}/>
      <h1 style={text}>Expo and Millenium Line Map</h1>
    </header>
  );
};

const headerStyles = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const text = {
    margin: 10
}
