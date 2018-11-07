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
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Cancel from '@material-ui/icons/Cancel';


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
  },
  button: {
    padding: "12px 37px;"
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    height: "100%"
  }
};


const borderItem = {
  width: "100%",
  margin: "0 15px",
  borderBottom: "1px solid #dddddd",
  paddingBottom: "10px"
};


class EditExercise extends React.Component {
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

  deleteExercise(e, index){
    e.preventDefault();
    this.props.deleteExercise(index);
  }

  filterExerciseUp(e, index){
    e.preventDefault();
    console.log(index);
    this.props.filterExerciseUp(index);
    console.log(this.props.exercises);
  }
  filterExerciseDown(e, index){
    e.preventDefault();
    console.log(index);
    this.props.filterExerciseUp(index);
    console.log(this.props.exercises);
  }

  render() {
    const { classes } = this.props;
    const ListExerciseItems = this.props.exercises.map((exercise, index) =>
      <GridContainer key={exercise.id}>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            onChange={this.handleChangeInput}
            labelText="Exercise name"
            id="exercise-name"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              defaultValue: exercise.exerciseName
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControl style={{width: "100%"}} className={classes.formControl}>
            <div className="materialSelect">
              <CustomSelect
                onChange={this.handleChangeSelect}
                labelText="Measurement"
                id="custom-select"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  defaultValue: exercise.exerciseMeasurement
                }}
              >
                <option value="kg">kilograms</option>
                <option value="min">minutes</option>
                <option value="m">meters</option>
              </CustomSelect>
            </div>
          </FormControl>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <div className={classes.buttonWrapper}>
            <Button
              variant="fab"
              type="button"
              color="info"
              aria-label="ArrowUpward"
              className={classes.button}
              id={exercise.id}
              onClick={(e) => this.filterExerciseUp(e, index)}
            >
              <ArrowUpward />
            </Button>
            <Button
              variant="fab"
              color="info"
              aria-label="ArrowDownward"
              className={classes.button}
              onClick={(e) => this.filterExerciseDown(e, index)}
            >
              <ArrowDownward />
            </Button>
            <Button
              variant="fab"
              color="warning"
              aria-label="Cancel"
              className={classes.button}
              onClick={(e) => this.deleteExercise(e, index)}
            >
              <Cancel/>
            </Button>
          </div>
        </GridItem>
        <span style={borderItem}></span>
      </GridContainer>
    );

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}  >
            <Card>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Edit exercise</h4>
                </CardHeader>
                <CardBody>
                  {ListExerciseItems}
                </CardBody>
                <CardFooter>
                  <Button color="primary" type="submit"> Update Exercise</Button>
                </CardFooter>
              </form>
            </Card>
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
    deleteExercise: index => dispatch(exerciseAction.deleteExercise(index)),
    filterExerciseUp: index => dispatch(exerciseAction.filterExerciseUp(index)),
    filterExerciseDown: index => dispatch(exerciseAction.filterExerciseDown(index))
  }
};

export default connect (mapStateToProps, mapDispatchToProps) (withStyles(styles)(EditExercise));