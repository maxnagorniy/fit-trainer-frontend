import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/dashboard" className={classes.block}>
                Dashboard
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/exercise" className={classes.block}>
                New Exercise
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/editexercise" className={classes.block}>
                Edit Exercise
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/workout" className={classes.block}>
                New Workout
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/editworkout" className={classes.block}>
                Edit Workout
              </a>
            </ListItem>
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
