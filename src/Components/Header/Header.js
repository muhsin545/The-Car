import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from './../../images/logo1.jpg'
import "./Header.css";

const Header = () => {
  const { user, logOut, admin } = useAuth();
  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg border-0  navbar-light NavBarBG">
        <div className="container">
          <NavLink to="/">
            <img src={logo} width="50px" className="rounded-circle " alt="" />
          </NavLink> <span className="text-danger fs-5 fw-bold ms-2">The Car</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  style={{ color: "#FEB800" }}
                  className="nav-link nav-NavLink active "
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: "#FEB800" }}
                  className="nav-link  nav-NavLink active"
                  to="/explore"
                >
                  Explore
                </NavLink>
              </li>
              {!user.email ? (
                <>
                  <li className="nav-item">
                    <button  onClick={handleClick} className="btn btn-outline-warning text-danger">
                      Login
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item dropdown">
                    <NavLink
                      class="nav-link dropdown-toggle"
                        to="/"
                        style={{ color: "#FEB800" }}
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dashboard
                    </NavLink>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                     {!admin &&  <NavLink
                      
                         
                        className="nav-link active nav-NavLink text-danger"
                        to="/payment"
                      >
                        Payment
                      </NavLink>}

                     {!admin && <NavLink
                     
                          style={{ color: "#FEB800" }}
                          className="nav-link active nav-NavLink  text-danger"
                      to="/myOrders"
                    >
                      My Orders
                    </NavLink>}
                     
                     {!admin && <NavLink
                          style={{ color: "#FEB800" }}
                          className="nav-link active nav-NavLink  text-danger"
                      to="/addReview"
                    >
                      Review
                    </NavLink>}
                      
                        {admin &&
                    <>
                   
                   <NavLink
                    
                            className="nav-link active nav-NavLink  text-danger"
                            to="/allOrders"
                    >
                      Manage All Orders
                      </NavLink>
                   <NavLink
                    
                            className="nav-link active nav-NavLink  text-danger"
                      to="/addProducts"
                    >
                      Add a Products
                      </NavLink>
                   <NavLink
                       
                            className="nav-link active nav-NavLink  text-danger"
                            to="/allProducts"
                    >
                      Manage Products
                      </NavLink>
                      <NavLink
                   
                            className="nav-link active nav-NavLink  text-danger"
                      to="/makeAdmin"
                    >
                      Make Admin
                    </NavLink>
                    </>
                    }
                        <li onClick={logOut} className=" btn ms-2 btn-danger">
                     Log Out
                  </li>
                    
                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeStyle={{ color: "#F34E3A" }}
                      className="nav-link active nav-NavLink"
                      to="/"
                    >
                      {user.displayName}
                    </NavLink>
                  </li>
                    <li onClick={logOut} className=" btn ">
                    <button className='btn btn-danger rounded'>Log out</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;