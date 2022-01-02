import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch("https://boiling-falls-26905.herokuapp.com/items")
    .then((r) => r.json())
    .then((items) => setItems(items))
  }, []);

return (
  
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/users" element={<Users items={items} />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return ( <h2>About</h2>

    )}

function Users({items }) {
 return items.map(item => <p>{item.name}</p>);
}
export default App;


// import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
// <GoogleMap
//   defaultZoom={12}
//   defaultCenter={{ lat:36.87801390177585, lng:-76.1475571661338 }}
// >
//   {props.isMarkerShown && <Marker label="MB" position={{ lat:36.87801390177585, lng:-76.1475571661338 }} />}
// </GoogleMap>
// ))  
// <MyMapComponent
// isMarkerShown
// googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
//   AIzaSyD4gA79P9ktv22eddp_M93LCTZXp5_5N8A`}
// loadingElement={<div style={{ height: `100%` }} />}
// containerElement={<div style={{ height: `300px` }} />}
// mapElement={<div style={{ height: `100%` }} />}
// />