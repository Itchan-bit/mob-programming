import "./App.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import logo from "../assets/images/likha-logo.png";
import largeLogo from "../assets/images/likha-logo-large.png";
import Users from "./containers/Users";
import Applications from "./containers/Applications";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // navigate("/users");
  }, []);

  return (
    <Layout id="main-container">
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        {collapsed ? (
          <img src={logo} className="logo" />
        ) : (
          <img src={largeLogo} className="logo" />
        )}
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/applications">Applications</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="main-header">
          {collapsed ? (
            <MenuUnfoldOutlined onClick={() => setCollapsed((prev) => !prev)} />
          ) : (
            <MenuFoldOutlined onClick={() => setCollapsed((prev) => !prev)} />
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{ padding: 25, minHeight: 280 }}
        >
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

document.addEventListener("turbolinks:load", () => {
  const app = document.getElementById("app");
  app &&
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      app
    );
});
