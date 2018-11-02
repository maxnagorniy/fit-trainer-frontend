import React from "react";
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
    padding: "12px 40px;"
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    height: "100%"
  },
  measurementText: {
    margin: "0 10px",
    color: "#AAAAAA",
    fontWeight: "400"
  },

};

const borderItem = {
  width: "100%",
  margin: "0 15px",
  borderBottom: "1px solid #dddddd",
  paddingBottom: "10px"
};


class EditWorkout extends React.Component {
  state = {
    valueSelect: '',
    exerciseItems: [
      {
        name: "Exercise#1",
        repeat: "Repeats",
        measurement: "Measurement"
      },
      {
        name: "Exercise#2",
        repeat: "Repeats",
        measurement: "Measurement"
      },
      {
        name: "Exercise#3",
        repeat: "Repeats",
        measurement: "Measurement"
      },
      {
        name: "Exercise#5",
        repeat: "Repeats",
        measurement: "Measurement"
      },
      {
        name: "Exercise#5",
        repeat: "Repeats",
        measurement: "Measurement"
      }
    ]
  };

  render() {
    const { classes } = this.props;
    const ListExerciseItems = this.state.exerciseItems.map((exerciseItem, index) =>
      <GridContainer key={index}>

        <GridItem xs={12} sm={12} md={12} lg={2}>
          <FormControl style={{width: "100%"}} className={classes.formControl}>
            <div className="materialSelect">
              <CustomSelect
                labelText="Measurement"
                id="custom-select"
                formControlProps={{
                  fullWidth: true
                }}
              >
                <option value="Exercise#1">Exercise #1</option>
                <option value="Exercise#2">Exercise #2</option>
                <option value="Exercise#3">Exercise #3</option>
              </CustomSelect>
            </div>
          </FormControl>
        </GridItem>


        <GridItem xs={12} sm={12} md={12} lg={3}>
          <CustomInput
            labelText={exerciseItem.repeat}
            id="exercise-repeat"
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={12} lg={3}>
          <CustomInput
            labelText={exerciseItem.measurement}
            id="exercise-measurement"
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={12} lg={4}>
          <div className={classes.buttonWrapper}>

            <h4 className={classes.measurementText}>kg</h4>

            <Button variant="fab" type="button" color="info" aria-label="ArrowUpward" className={classes.button}>
              <ArrowUpward />
            </Button>
            <Button variant="fab" color="info" aria-label="ArrowDownward" className={classes.button}>
              <ArrowDownward />
            </Button>
            <Button variant="fab" color="warning" aria-label="Cancel" className={classes.button}>
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
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit workout</h4>
              </CardHeader>
              <CardBody>
                <Button color="primary"> Add Exercise</Button>
              </CardBody>
              <CardBody>
                {ListExerciseItems}
              </CardBody>
              <CardFooter>
                <Button color="primary"> Update Workout</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}


export default withStyles(styles)(EditWorkout);
