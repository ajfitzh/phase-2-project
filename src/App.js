import React from "react";
import "./styles.css";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Projects from "./component/Projects";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/projects" element={<Projects />}  />
      </Routes>
    </div>
  );
}


