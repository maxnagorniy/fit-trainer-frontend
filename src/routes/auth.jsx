// @material-ui/icons

import Person from "@material-ui/icons/Person";

// core components/views

import SignUp from "../views/SignUp/SignUp";
import SignIn from "../views/SignIn/SignIn";


const authRoutes = [
  {
    path: "/signin",
    sidebarName: "Sign In",
    navbarName: "Sign In",
    icon: Person,
    component: SignIn
  },
  {
    path: "/signup",
    sidebarName: "Sign Up",
    navbarName: "Sign Up",
    icon: Person,
    component: SignUp
  },
  { redirect: true, path: "/", to: "/signin", navbarName: "Redirect" }
];

export default authRoutes;
