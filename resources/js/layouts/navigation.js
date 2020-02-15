import React, { useContext } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const Navigation = props => {
    return (
        <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={1}
        >
            <Menu.Item key="1">
                <Icon type="dashboard" />
                <span>Dashboard</span>
                <Link to="/dashboard" />
            </Menu.Item>

            <Menu.SubMenu
                key="housemenu"
                title={
                    <span>
                        <Icon type="home" />
                        <span>Houses</span>
                    </span>
                }
            >
                <Menu.SubMenu key="house-1" title="Mansion1">
                    <Menu.Item key="2">Room 1</Menu.Item>
                    <Menu.Item key="3">Room 2</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
        </Menu>
    );
};

export default Navigation;
