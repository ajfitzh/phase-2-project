import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png"
import { Badge, CardActionArea } from "@mui/material";
import CartNav from "./CartNav"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  }
}));

const Header = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    let number={cart}

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    navigate(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    navigate(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "Contact",
      pageURL: "/contact"
    },
    {
      menuTitle: "About",
      pageURL: "/about"
    },
    {
        menuTitle: "Projects",
        pageURL: "/projects"
    },
    {
      menuTitle: "Merch",
      pageURL: "/merchandise"
  }  
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img height="50vw" width="50vw" src={logo} />
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          {isMobile ? (
            <>
            <Badge badgeContent={4} color="secondary">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
            </Badge>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/")}
              >
                HOME
              </Button>
            <Button
                variant="contained"
                onClick={() => handleButtonClick("/about")}
              >
                ABOUT
            </Button>
            <Button
                variant="contained"
                onClick={() => handleButtonClick("/projects")}
              >
                PROJECTS
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/merchandise")}
              >
                MERCH
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/contact")}
              >
                CONTACT
              </Button>
              <Button>
              <CartNav         
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart} />
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
