import React from "react";
import MapContainer from "./MapComponent"
import "./Contact.css"

const Contact = props => {
  
    return (
<div class="row">
  <div class="column"/>
<div class="column">
  <MapContainer />
  <p>Mike's Bikes 757, Inc.</p>
  <p>Virginia Beach, Virginia</p>
  <p>Phone: 540.898.6451</p>
  <a href="https://www.facebook.com/marketplace/profile/100044500240787/?ref=permalink">Facebook Marketplace</a>
  </div>
  <iframe 
    title="googleform" 
    src="https://docs.google.com/forms/d/e/1FAIpQLScjHK8JTkluNOYGscSkHq9T1A-kZ_DsdHWIgeNPJN-kd6sVmg/viewform?embedded=true" 
    height="800vw"
    width="100%"
    frameBorder="0" 
    marginHeight="0" 
    marginWidth="10">Loading…</iframe>
  </div>


  )};

export default Contact;



