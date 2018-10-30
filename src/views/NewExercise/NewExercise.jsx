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
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

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
  selectEmpty: {
    '&:before': {
      borderBottom: "1px solid #D2D2D2 !important;"
    },
    '&:after': {
      borderColor: "#9c27b0!important;"
    },
    '&:hover': {
      '&:before': {
        borderBottom: "1px solid #D2D2D2!important;"
      },
      '&:after': {
        borderColor: "#9c27b0!important;"
      }
    }
  }
};

class NewExercise extends React.Component {
  state = {
    value: '',
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={10}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Create new exercise</h4>
                <p className={classes.cardCategoryWhite}>Please, add a new exercise name and measurement type</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Exercise Name"
                      id="exercise-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <FormControl style={{width: "100%", marginTop: "25px"}} className={classes.formControl}>
                      <InputLabel className={classes.colorDefault} htmlFor="age-auto-width">Measurement type</InputLabel>
                      <Select
                        value={this.state.value}
                        onChange={this.handleChange}
                        name="value"
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary"> Create Exercise</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(NewExercise);
