import React from 'react'
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
  
const Projects = props => {
const classes = useStyles();

  return (
            <Grid container spacing={2}>
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
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Project />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Project />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <a classname="fblink" href="https://www.facebook.com/marketplace/profile/100044500240787/?ref=permalink"> Check out our Facebook Marketplace</a>
            </Grid>
            </Grid>

        
    )
}

export default Projects
