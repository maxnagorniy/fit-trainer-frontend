// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Receipt from "@material-ui/icons/Receipt";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

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
    component: UserProfile
  },
  {
    path: "/editexercise",
    sidebarName: "Edit Exercise",
    navbarName: "Edit Exercise",
    icon: Receipt,
    component: TableList
  },
  {
    path: "/workout",
    sidebarName: "New Workout",
    navbarName: "New Workout",
    icon: Receipt,
    component: Icons
  },
  {
    path: "/editworkout",
    sidebarName: "Edit Workout",
    navbarName: "Edit Workout",
    icon: Receipt,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
