import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Dropdown, Avatar } from "antd";
import Navigation from "./navigation";
import HeaderContext from "./mainlayoutcontext";
import "./layout.css";

const { Header, Footer, Sider, Content } = Layout;

const MainLayout = props => {

    const { navHeader, setNavHeader } = useContext(HeaderContext);

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

    let hiddenElement = navHeader.state ? "inline" : "none";

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={0}
                style={{ display: hiddenElement }}
            >
                <div className="logo">
                    <img src="../images/Matik-word-logo-white.png" />
                </div>
                <Navigation />
            </Sider>
            <Layout>
                <Header
                    style={{
                        float: "left",
                        background: "#fff",
                        padding: 0,
                        display:  hiddenElement
                    }}
                >
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            <Avatar
                                style={{ backgroundColor: "#87d068" }}
                                icon="user"
                            />
                        </a>
                    </Dropdown>
                </Header>
                <Content>{props.children}</Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
