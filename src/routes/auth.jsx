// @material-ui/icons

import Person from "@material-ui/icons/Person";

// core components/views

import SignUp from "../views/SignUp/SignUp";
import SignIn from "../views/SignIn/SignIn";

import Verification from "../views/Verification/Verification";


const authRoutes = [
  {
    path: "/signup",
    sidebarName: "Sign Up",
    navbarName: "Sign Up",
    icon: Person,
    component: SignUp
  },
  {
    path: "/signin",
    sidebarName: "Sign In",
    navbarName: "Sign In",
    icon: Person,
    component: SignIn
  },
  {
    path: "/verification",
    sidebarName: "Email verification",
    navbarName: "Email verification",
    icon: Person,
    component: Verification
  },
  { redirect: true, path: "/", to: "/signup", navbarName: "Redirect" }
];

export default authRoutes;
