import React from "react";
import { connect } from 'react-redux';
import * as exerciseAction from '../../actions/exerciseAction';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import FormControl from "@material-ui/core/FormControl/FormControl";

import CustomSelect from "../../components/CustomSelect/CustomSelect";
import "../../components/CustomSelect/Select.css";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  colorDefault: {
    color: "#AAAAAA !important",
    fontSize: "14px"
  }
};

class NewExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseName: '',
      exerciseMeasurement: ''
    }
  }
  handleChangeInput = (e) => {
    this.setState({
      exerciseName: e.target.value,
    });
  };

  handleChangeSelect = (e) => {
    this.setState({
      exerciseMeasurement: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let exercise = {
      exerciseName: this.state.exerciseName,
      exerciseMeasurement: this.state.exerciseMeasurement
    };

    this.setState({
      exerciseName: '',
      exerciseMeasurement: ''
    });

    e.target.reset();

    this.props.newExercise(exercise);

  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <form onSubmit={this.handleSubmit}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Create new exercise</h4>
                  <p className={classes.cardCategoryWhite}>Please, add a new exercise name and measurement type</p>
                </CardHeader>
                {/*{ <ul className="list-group">*/}
                  {/*{this.props.exercise.map((exercise, i) => <div>{exercise.exerciseName}</div>)}*/}
                {/*</ul> }*/}
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        onChange={this.handleChangeInput}
                        labelText="Exercise Name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.exerciseName
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl style={{width: "100%"}} className={classes.formControl}>
                        <div className="materialSelect">
                          <CustomSelect
                            onChange={this.handleChangeSelect}
                            labelText="Measurement"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              value: this.state.exerciseMeasurement
                            }}
                          >
                            <option value="" disabled></option>
                            <option value="kg">kilograms</option>
                            <option value="min">minutes</option>
                            <option value="m">meters</option>
                          </CustomSelect>
                        </div>
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="primary" type="submit"> Create Exercise</Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    exercises: state.exercises
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    newExercise: exercise => dispatch(exerciseAction.newExercise(exercise))
    // deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewExercise));
