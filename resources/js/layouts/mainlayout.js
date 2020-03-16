import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Dropdown, Avatar, message } from "antd";
import Navigation from "./navigation";
import HeaderContext from "./mainlayoutcontext";
import "./layout.css";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const MainLayout = props => {
    const { navHeader, setNavHeader } = useContext(HeaderContext);
    let hiddenElement = navHeader.state ? "inline" : "none";
    const [sidebar, setSidebar] = useState({
        collapsed: false
    });
    const sidebarHandler = () => {
        setSidebar({ collapsed: !sidebar.collapsed });
    };

    const menu = (
        <Menu>
            <Menu.Item>
                <Link to="/employeeinfo">Account Information</Link>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank">Logout</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header className="header">
                <div className="logo">
                    <img src="../images/Matik-word-logo-white.png" />
                </div>
                {React.createElement(
                    sidebar.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                        className: "trigger",
                        onClick: sidebarHandler
                    }
                )}
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        <Avatar
                            style={{
                                backgroundColor: "#87d068",
                                position: "relative",
                                left: "30px"
                            }}
                            icon="user"
                        />
                    </a>
                </Dropdown>
            </Header>
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsedWidth={0}
                    collapsed={sidebar.collapsed}
                    style={{ display: hiddenElement }}
                >
                    <Navigation />
                </Sider>
                <Layout>
                    <Content>{props.children}</Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
