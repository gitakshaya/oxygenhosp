import React from "react";
import { Layout } from "antd";
import Content from "../layout/Content";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const AppLayout = (props) => (
  <Layout className="layout">
    <Header {...props}/>
    <Content />
    <Footer />
  </Layout>
);

export default AppLayout;
