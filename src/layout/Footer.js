import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer className="footer mt-5 row text-dark">
           <div className="col-md-4 mt-4 ">
          <h4>Oxygen Hospital</h4>
          <h4>Hotel Indrapasth Tower</h4>
          <h4>Durga Chowk,</h4>
          <h4>Akola,</h4>
          <h4>Maharashtra 444001</h4>
        </div>

        <div className="col-md-4 mt-4 ">
          <h4>For booking an appointment</h4>
          <h4>+91 8425845856</h4>
          <h4>Timing – 24 hours</h4>
          <h4>Connect to Oxygen Hospital</h4>
          <i className="fa fa-home"></i>
        </div>
      </Footer>
 
    );
};

export default AppFooter;