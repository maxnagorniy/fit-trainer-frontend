// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Receipt from "@material-ui/icons/Receipt";
// import Person from "@material-ui/icons/Person";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";

import NewExercise from "views/NewExercise/NewExercise.jsx";
import EditExercise from "views/EditExercise/EditExercise.jsx";
import NewWorkout from "views/NewWorkout/NewWorkout.jsx";
import EditWorkout from "views/EditWorkout/EditWorkout.jsx";

// import SignUp from "../views/SignUp/SignUp";
// import SignIn from "../views/SignIn/SignIn";
//
// import Verification from "../views/Verification/Verification";


const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/exercise",
    sidebarName: "New Exercise",
    navbarName: "New Exercise",
    icon: Receipt,
    component: NewExercise
  },
  {
    path: "/editexercise",
    sidebarName: "Edit Exercise",
    navbarName: "Edit Exercise",
    icon: Receipt,
    component: EditExercise
  },
  {
    path: "/workout",
    sidebarName: "New Workout",
    navbarName: "New Workout",
    icon: Receipt,
    component: NewWorkout
  },
  {
    path: "/editworkout",
    sidebarName: "Edit Workout",
    navbarName: "Edit Workout",
    icon: Receipt,
    component: EditWorkout
  },
  { redirect: true, path: "/", to: "/signin", navbarName: "Redirect" }
];

export default dashboardRoutes;
