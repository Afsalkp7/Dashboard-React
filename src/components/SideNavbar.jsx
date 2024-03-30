import React, { useState } from "react";
import { Layout, theme, Button } from "antd";
import Sider from "antd/es/layout/Sider";
import Logo from "./Logo";
import Title from "./Title";
import MenuList from "./MenuList";
import ToggleThemeButton from "./ToggleThemeButton";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import MainNavbar from "./MainNavbar";
import DataTable from "./DataTable";

const { Header, Slider } = Layout;

export default function () {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => setDarkTheme(!darkTheme);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? "dark" : "light"}>
        <div className="sideBar">
          <Logo collapsed={collapsed}/>
          {collapsed?null:<Title darkTheme={darkTheme} />}
        </div>
        <MenuList darkTheme={darkTheme} />
        {/* <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} /> */}
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="topNav">
            <div>
              <Button
                type="text"
                className="toggle"
                onClick={()=>setCollapsed(!collapsed)}
                icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
              />
            </div>
            <div>
              <MainNavbar />
            </div>
          </div>
          <DataTable />   
        </Header>
      </Layout>
    </Layout>
  );
}
