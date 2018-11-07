import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Hidden from "@material-ui/core/Hidden";

import Person from "@material-ui/icons/Person";

import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  render() {
    const { classes } = this.props;
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <div style={{display: "flex", alignItems: "center"}}>
        <span style={{padding: "5px"}}>{user ? user.name : ""}</span>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Person"
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </Button>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
