import React from "react";
import axios from "axios";
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
import { Redirect } from "react-router-dom";

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
  },
  errorMessage: {
    color: "#f44336",
    fontWeight: 400
  }
};

class SignIn extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      email: "",
      password: "",
      error: ""
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

  handlerSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:4000/user/signin',
      data: {
        email: this.state.email,
        password: this.state.password
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then((response) => {
        const user = {"name": this.state.email, "token": response.data.token};
        localStorage.setItem("user", JSON.stringify(user));

        this.setState({ redirect: true });

        console.log(this.state.email);
        console.log(localStorage.getItem("user"));
      })
      .catch((error) => {
        if(error){
          console.log(error);
        }
        this.setState({
          error: "You entered user data incorrectly"
        })
      });
  };

  render() {
    const { classes } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/dashboard'/>;
    }
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Card>
              <form onSubmit={this.handlerSubmit}>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Sign into Fit Trainer App</h4>
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
                        inputProps={{type: "email"}}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        onChange={this.handleChangePassword}
                        labelText="Password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{type: "password"}}
                      />
                      <span className={classes.errorMessage}>{this.state.error}</span>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="primary" type="submit"> Sign In</Button>
                </CardFooter>
                <CardBody>
                  <span className={classes.formFooterInfo}>first time user? sign-up</span>
                </CardBody>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(SignIn);
