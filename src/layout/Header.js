import React, { useState } from 'react';
import { Layout, Menu, Select } from 'antd';
import intl from 'react-intl-universal';
import { Link } from "react-router-dom";

const { Header } = Layout;
const AppHeader = (props) => {
  const [key, setKey] = useState('1')

    return (
        <Header className="app-header">
        <div className="row">
          <div className="col-md-8 col-sm-6">
          <img src="/logo_20.png" alt="Oxygen logo" width="150" height="150" />
          <span className="ml-4 mt-4 font-weight-bold text-first text-size">Oxygen Hospital</span>
          </div>
          <div className="col-md-4 col-sm-6"><Select className="w-100" value={props.language} onChange={props.changeLanguage}>
            {props.languages.map((lang)=><Select.Option key={lang.key}>{lang.value}</Select.Option>)}
          </Select>
          </div>
        </div>
  <Menu
    mode="horizontal"
    defaultSelectedKeys={['1']}
    key={key}
    className="header-menu"
  >
    <Link onClick={()=>setKey('1')} className={`ant-menu-item ${key==='1'?'ant-menu-item-selected':''}`} to="/home">{intl.get("MENU_HOME")}</Link>
   <Link onClick={()=>setKey('2')} className={`ant-menu-item ${key==='2'?'ant-menu-item-selected':''}`} to="/about-us">{intl.get("MENU_ABOUT_US")}</Link>
    <Link onClick={()=>setKey('3')} className={`ant-menu-item ${key==='3'?'ant-menu-item-selected':''}`} to="/services">{intl.get("MENU_SERVICES")}</Link>
    <Link onClick={()=>setKey('4')} className={`ant-menu-item ${key==='4'?'ant-menu-item-selected':''}`} to="/contact-us">{intl.get("MENU_CONTACT_US")}</Link>
  </Menu>
</Header>
    );
};

export default AppHeader;