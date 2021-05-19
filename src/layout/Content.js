import React from "react";
import { Button, Layout } from "antd";

import Home from "../component/Home";
import AboutUs from "../component/AboutUs";
import ContactUs from "../component/ContactUs";
import Services from "../component/Services";
import { Switch, Route, Link } from "react-router-dom";
import Booking from "../component/Booking";

const { Content } = Layout;

const AppContent = (props) => {
  const routes = [
    {
      path:"/home",
      component:<Home {...props}/>
    },
    {
      path:"/about-us",
      component:<AboutUs {...props}/>
    },
    {
      path:"/contact-us",
      component:<ContactUs {...props}/>
    },
    {
      path:"/services",
      component:<Services {...props}/>
    },
    {
      path:"/book-appointment",
      component:<Booking {...props}/>
    }
  ]
  return (
    <Content className="container-fluid bg-light">
      <div className="booking-button-container">
      <Link to="/book-appointment" className=" booking-button">
        <span className="book-strong">Book</span>
        <span className="book-appointment">Appointment</span>
        </Link>
        </div>
     <Switch>
          {routes.map((route)=><Route path={route.path}>
            {route.component}
          </Route>)}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Content>
  );
};

export default AppContent;
