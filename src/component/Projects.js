import React from 'react'
import Project from "./Project"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
  
const useStyles = makeStyles({
      gridContainer: {
          paddingLeft: '10px',
          paddingRight: '10px'
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
        </Grid>
    )
}

export default Projects
