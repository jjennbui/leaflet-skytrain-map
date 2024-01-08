import React from 'react';

export default function Header() {
  return (
    <header style={headerStyles}>
        <img style={logo}src='../images/logo.png' width={100}/>
      <h1 style={text}>Expo and Millenium Line Map</h1>
    </header>
  );
};

const headerStyles = {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const text = {
    margin: 10
};

const logo={
    margin:15
}