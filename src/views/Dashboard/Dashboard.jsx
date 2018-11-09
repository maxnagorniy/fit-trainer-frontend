import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";

import "./Dashboard.css";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import * as exerciseAction from "../../actions/exerciseAction";

const stylesButtonSet = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  maxWidth: "450px"
};


class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectDate: ""
    };
  }

  handleAddDate = () => {
    const selectDate = {
      selectDate: this.state.selectDate
    };
    this.props.newDate(selectDate);
    this.props.history.push("/exercise");
  };

  render() {
    const CustomDate = this.props.exercises;
    const qwe = CustomDate.map(({ selectDate }) => selectDate);
    const disableDate = [new Date(qwe)];

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={10}>
            <div style={stylesButtonSet}>
              <Button color="primary" onClick={this.handleAddDate}> Add New Exercise</Button>
              <Button color="primary"> Add New Workout</Button>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={10}>
            <InfiniteCalendar
              width={(window.innerWidth <= 450) ? window.innerWidth : 450}
              height={500}
              disabledDates={disableDate}
              onSelect={date => {
                  let yyyy = date.getFullYear();
                  let mm = date.getMonth()+1;
                  let dd  = date.getDate();
                  this.setState({selectDate: String(yyyy +","+ mm +","+ dd)});
                }
              }
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

const mapStateToProps = (state, ownProps) => {
  return {
    exercises: state.exercises
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    newDate: selectDate => dispatch(exerciseAction.newDate(selectDate))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(dashboardStyle)(Dashboard)));
