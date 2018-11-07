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
import axios from "axios";

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
  formFooterInfo: {
    color: "#9c27b0",
    fontSize: "1rem",
    fontWeight: "400"
  }
};

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      error: Boolean,
      errorText: ""
    }
  }
  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };
  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  };
  handleChangeConfirmPassword = (e) => {
    const pass = this.state.password;
    if(pass !== e.target.value){
      this.setState({
        errorText: "Your passwords do not match"
      });
    } else {
      this.setState({
        errorText: ""
      });
    }
  }
  ;
  handlerSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:4000/user/signup',
      data: {
        email: this.state.email,
        password: this.state.password
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(function (response) {
        if(response){
          console.log(response);
        }
      })
      .catch(function (error) {
        if(error){
          console.log(error);
        }
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Card>
              <form onSubmit={this.handlerSubmit}>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Register with Fit Trainer App</h4>
                  <p className={classes.cardCategoryWhite}>Please, enter your email and password</p>
                </CardHeader>
                <CardBody>
                  <GridContainer direction="column">
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        onChange={this.handleChangeEmail}
                        labelText="Email address"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        onChange={this.handleChangePassword}
                        labelText="Password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        onChange={this.handleChangeConfirmPassword}
                        labelText="Repeat password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password"
                        }}
                      />
                      {this.state.errorText}
                    </GridItem>

                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="primary" type="submit"> Sign Up</Button>
                </CardFooter>
                <CardBody>
                  <span className={classes.formFooterInfo}>already have an account? sign-in</span>
                </CardBody>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
