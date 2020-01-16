import React from "react";

const Breadcrumbs = React.lazy(() => import("./components/Base/Breadcrumbs"));
const Cards = React.lazy(() => import("./components/Base/Cards"));
const Carousels = React.lazy(() => import("./components/Base/Carousels"));
const Collapses = React.lazy(() => import("./components/Base/Collapses"));
const Dropdowns = React.lazy(() => import("./components/Base/Dropdowns"));
const Forms = React.lazy(() => import("./components/Base/Forms"));
const Jumbotrons = React.lazy(() => import("./components/Base/Jumbotrons"));
const ListGroups = React.lazy(() => import("./components/Base/ListGroups"));
const Navbars = React.lazy(() => import("./components/Base/Navbars"));
const Navs = React.lazy(() => import("./components/Base/Navs"));
const Paginations = React.lazy(() => import("./components/Base/Paginations"));
const Popovers = React.lazy(() => import("./components/Base/Popovers"));
const ProgressBar = React.lazy(() => import("./components/Base/ProgressBar"));
const Switches = React.lazy(() => import("./components/Base/Switches"));
const Tables = React.lazy(() => import("./components/Base/Tables"));
const Tabs = React.lazy(() => import("./components/Base/Tabs"));
const Tooltips = React.lazy(() => import("./components/Base/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("./components/Buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("./components/Buttons/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("./components/Buttons/ButtonGroups")
);
const Buttons = React.lazy(() => import("./components/Buttons/Buttons"));
const Charts = React.lazy(() => import("./components/Charts"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const CoreUIIcons = React.lazy(() => import("./components/Icons/CoreUIIcons"));
const Flags = React.lazy(() => import("./components/Icons/Flags"));
const FontAwesome = React.lazy(() => import("./components/Icons/FontAwesome"));
const SimpleLineIcons = React.lazy(() =>
  import("./components/Icons/SimpleLineIcons")
);
const Alerts = React.lazy(() => import("./components/Notifications/Alerts"));
const Badges = React.lazy(() => import("./components/Notifications/Badges"));
const Modals = React.lazy(() => import("./components/Notifications/Modals"));
const Colors = React.lazy(() => import("./components/Theme/Colors"));
const Typography = React.lazy(() => import("./components/Theme/Typography"));
const Widgets = React.lazy(() => import("./components/Widgets/Widgets"));
const Users = React.lazy(() => import("./components/Users/Users"));
const User = React.lazy(() => import("./components/Users/User"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
export const BaseRoutes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/products", exact: true, name: "Products", component: Colors },
  { path: "/products/search", name: "SearchProducts", component: Colors },
  { path: "/products/import", name: "ImportProducts", component: Typography },
  { path: "/products/myproducts", name: "MyProducts", component: Cards },
  { path: "/icons", name: "Icons", component: CoreUIIcons },
  { path: "/users/:id", exact: true, name: "User Details", component: User }
];

export const AdminRoutes = [
  { path: "/admin", exact: true, name: "Home" },
  { path: "/admin/product-list", name: "Dashboard", component: Dashboard },
  { path: "/admin/seller-list", exact: true, name: "Theme", component: Colors },
  { path: "/admin/order-issue-list", name: "Colors", component: Colors },
  {
    path: "/admin/seller-followup-list",
    name: "Typography",
    component: Typography
  },
  {
    path: "/admin/customer-service",
    exact: true,
    name: "Base",
    component: Cards
  },
  { path: "/admin/client", name: "Cards", component: Cards }
];
