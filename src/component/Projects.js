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
function Bikes() {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch("https://boiling-falls-26905.herokuapp.com/projects")
        .then(resp => resp.json())
        .then(bikes => {
          setBikes(bikes);
        })
      }, [])
      return bikes;
}
function sortByPriceHighToLow() {
    function compare( a, b ) {
        if ( a.price > b.price ){
          return -1;
        }
        if ( a.price < b.price ){
          return 1;
        }
        return 0;
      }
    let bikes = Bikes().sort(compare);
    return bikes
}
function sortByPriceLowToHigh() {
    function compare( a, b ) {
        if ( a.price < b.price ){
          return -1;
        }
        if ( a.price > b.price ){
          return 1;
        }
        return 0;
      }
    let bikes = Bikes().sort(compare);
    return bikes
}

function Sort({sort, setSort}) {
    return (
        <>
        <label>Sort by:</label>
        <select onChange={(e) => setSort(e.target.value)}>
        <option value="default">Choose an option below</option>    
        <option value="low-to-high">Price Low to High</option>
        <option value="high-to-low">Price High to Low</option>
        </select>
        </>
    )
}
function sorter(sort) {
        if(sort === "low-to-high") 
             {   
               return sortByPriceLowToHigh();       
             } 
            else if(sort === "high-to-low")
             {
               return sortByPriceHighToLow();
            }
            else
            {
                return Bikes();
            }
    } 
const Projects = props => {
const classes = useStyles();
const [sort, setSort] = useState("");
const bikes = sorter(sort);
  return (
        <>
           <Sort sort = {sort} setSort = {setSort}></Sort>
            <Grid container spacing={2}>
                {bikes.map((bike) => {
                    return (
                       <Grid item xs={12} sm={6} md={4}>
                           <Project bike = {bike}/>
                       </Grid> 
                    )
                })}

            </Grid>
        </>
    )
}

export default Projects
