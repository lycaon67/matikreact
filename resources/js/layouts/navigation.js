import React, { useContext, useState, useEffect } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const  Navigation = props => {
    const [house, setHouse] = useState({});
    
     useEffect(() => {
        dataHouse();
    }, []);

    async function dataHouse() {
        await fetch('./api/house/1')
        .then(
            function(response) {
                if (response.status !== 200) {
                    return;
                }
                // Examine the text in the response
                response.json().then(function(data) {
                    setHouse(data.data);
                    console.log(data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }

    function houseMenu(value){
        
        var menu = [];
        for (let index = 0; index < value.length; index++) {
            var room = [];
            
            for (let roomcount = 0; roomcount < value[index].rooms.length; roomcount++) {
                const element = value[index].rooms[roomcount];
                room.push(
                    (<Menu.Item key={element.id}>
                        {element.name}
                        <Link to={"/room/"+element.id} />
                    </Menu.Item>)
                )
            }
            
            menu.push(
                (<Menu.SubMenu key={value[index].houseid} title={value[index].name}>
                    {room}
                </Menu.SubMenu>)
            )    
        }
        return menu
    };

    return (
        <Menu
            defaultSelectedKeys={["dashboard"]}
            defaultOpenKeys={["dashboard"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={false}
            
        >
            <Menu.Item key="dashboard">
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
                {houseMenu(house)}
            </Menu.SubMenu>
        </Menu>
    );
};

export default Navigation;
