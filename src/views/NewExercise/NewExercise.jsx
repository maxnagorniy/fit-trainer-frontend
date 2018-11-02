import React from "react";
import { connect } from 'react-redux';
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
  handleChangeInput = (event) => {
    this.setState({
      exerciseName: event.target.value,
    });
  };

  handleChangeSelect = (event) => {
    this.setState({
      exerciseMeasurement: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddExercise(this.state.exerciseName, this.state.exerciseMeasurement);
    this.setState({
      exerciseName: '',
      exerciseMeasurement: ''
    });
    e.target.reset();
  };

  render() {
    const { classes } = this.props;
    console.log('store', this.props.newExercise);
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

export default connect(
  state => ({
    newExercise: state.exercise
  }),
  dispatch => ({
    onAddExercise: (exerciseName, exerciseMeasurement) => {
      dispatch({ type: 'ADD_EXERCISE', payload: { id: Math.random()*10000000000000000, exerciseName: exerciseName, exerciseMeasurement: exerciseMeasurement } })
    }
    // deleteExercise: () => {
    //   dispatch({ type: 'DELETE_EXERCISE',  })
    // }
  })
)(withStyles(styles)(NewExercise));
