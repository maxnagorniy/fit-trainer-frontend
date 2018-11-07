import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle.jsx";

import dashboardRoutes from "../../routes/dashboard";
import authRoutes from "../../routes/auth";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer style={{marginTop: "5vh"}}className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list} >
            {localStorage.token !== "" ? dashboardRoutes.map((item, index)=>{
              return <ListItem key={index} className={classes.inlineBlock}>
                <Link to={item.path} className={classes.block}>
                  {item.sidebarName}
                </Link>
              </ListItem>
            }) : authRoutes.map((item, index)=>{
              if (item.invisible) return null;
              return <ListItem key={index} className={classes.inlineBlock}>
                <Link to={item.path} className={classes.block}>
                  {item.sidebarName}
                </Link>
              </ListItem>
            })}
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a href="https://github.com/maxnagorniy/fit-trainer-frontend" className={classes.a}>
              Max
            </a>, made with love for a better web
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
