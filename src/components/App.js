import React from "react";
import About from './About';
import NavBar from './NavBar';
import Home from './Home';
import Details from '../data/user';

function App() {
  return (
    <div>
      <NavBar />
      <Home username={Details.username} city={Details.city}/>
      <About image={Details.image}/>
    </div>
  );
}

export default App;