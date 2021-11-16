import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRoute from "./AdminRoute/AdminRoute";
import AllOrders from "./Components/AllOrders/AllOrders";
import Explore from "./Components/Explore/Explore";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registar from "./Components/Login/Registar/Registar";
import MakeAdmin from "./Components/ManageProducts/MakeAdmin/MakeAdmin";
import ManageProducts from "./Components/ManageProducts/ManageProducts";
import MyOrders from "./Components/MyOrders/MyOrders";
import NewOffer from "./Components/NewOffer/NewOffer";
import NotFound from "./Components/NotFound/NotFound";
import Payment from "./Components/Payment/Payment";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import Testimonials from "./Components/Testimonials/Testimonials";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addReview">
              <Testimonials></Testimonials>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/products/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <AdminRoute path="/allOrders">
              <AllOrders></AllOrders>
            </AdminRoute>
            <AdminRoute path="/newOffer">
              <NewOffer></NewOffer>
            </AdminRoute>
            <AdminRoute path="/addProducts">
              <NewOffer></NewOffer>
            </AdminRoute>
            <AdminRoute path="/allProducts">
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registar">
              <Registar></Registar>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


