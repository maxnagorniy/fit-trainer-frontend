import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";



// core components

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const stylesButtonSet = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  maxWidth: "450px"
};


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={10}>
            <div style={stylesButtonSet}>
              <Button color="primary"> Add New Exercise</Button>
              <Button color="primary"> Add New Workout</Button>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={10}>
            <InfiniteCalendar
              width={(window.innerWidth <= 450) ? window.innerWidth : 450}
              height={500}
              Component={withMultipleDates(Calendar)}
              selected={[
                new Date()
              ]}
              interpolateSelection={defaultMultipleDateInterpolation}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
