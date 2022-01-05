import React, {useState, useEffect} from 'react'
import Project from "./Project"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import "./projects.css"
  
const useStyles = makeStyles({
      gridContainer: {
          paddingLeft: '20px',
          paddingRight: '20px',
      }
  })
function sortByPrice() {
    
}
function Bikes() {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:7000/projects")
        .then(resp => resp.json())
        .then(bikes => {
          setBikes(bikes);
        })
      }, [])
      return bikes;
}
const Projects = props => {
const classes = useStyles();

  return (
        <>
            <label>Sort by Price:</label>
            <select onChange={Bikes()}>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
            </select>
            <Grid container spacing={2}>
                {Bikes().map((bike) => {
                    return (
                       <Grid item xs={12} sm={6} md={4}>
                           <Project bike = {bike}/>
                       </Grid> 
                    )
                })}
            
            {/* <Grid item xs={12} sm={6} md={4}>
                <Project />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Project />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Project />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Project />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Project />
            </Grid> */}
            <Grid item xs={12} sm={6} md={4}> 
            <a classname="fblink" href="https://www.facebook.com/marketplace/profile/100044500240787/?ref=permalink"> Check out our Facebook Marketplace</a>
            </Grid>
            </Grid>
        </>
    )
}

export default Projects
