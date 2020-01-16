import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import {ForgotPassword, ResetPassword, ShopifyAuth} from './pages'

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const AdminLayout = React.lazy(() => import('./containers/AdminLayout'));

// Pages
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
// const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'))
// const ResetPassword = React.lazy(() => import('./pages/ResetPassword'))
const Page404 = React.lazy(() => import('./pages/Page404'));
const Page500 = React.lazy(() => import('./pages/Page500'));

require('dotenv').config();
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/forgot" name="ForgotPassword Page" render={props => <ForgotPassword {...props}/>} />
              <Route exact path="/reset/:token" name="ResetPassword Page" render={props => <ResetPassword {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/shopify/callback" name="Shopify Callback" render={props => <ShopifyAuth {...props}/>} />
              <Route path="/admin" name="Admin" render={props => <AdminLayout {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
