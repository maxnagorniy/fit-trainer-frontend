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
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select/Select";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FormControl from "@material-ui/core/FormControl/FormControl";
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Cancel from '@material-ui/icons/Cancel';


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
  },
  button: {
    padding: "12px 40px;"
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    height: "100%"
  }
};


const gridContainerList = {
  paddingBottom: "10px",
  borderBottom: "1px solid #D2D2D2"
};




class EditExercise extends React.Component {
  state = {
    valueSelect: '',
    exerciseItems: [
      {
        title: "Measurement type1",
        name: "Exercise Name"
      },
      {
        title: "Measurement type2",
        name: "Exercise Name2"
      },
      {
        title: "Measurement type3",
        name: "Exercise Name3"
      }
    ]
  };
  render() {
    const { classes } = this.props;
    const ListExerciseItems = this.state.exerciseItems.map((exerciseItem, index) =>
      <GridContainer key={index} style={gridContainerList} >
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText={exerciseItem.name}
            id="exercise-name"
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControl style={{width: "100%", marginTop: "27px"}} className={classes.formControl}>
            <InputLabel className={classes.colorDefault} htmlFor="age-auto-width">{exerciseItem.title}</InputLabel>
            <Select
              value={this.state.valueSelect}
              onChange={this.handleChange}
              name="valueSelect"
              className={classes.selectEmpty}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <div className={classes.buttonWrapper}>
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
      </GridContainer>
    );
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={10}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit exercise</h4>
              </CardHeader>
              <CardBody>
                {ListExerciseItems}
              </CardBody>
              <CardFooter>
                <Button color="primary"> Update Exercise</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(EditExercise);
