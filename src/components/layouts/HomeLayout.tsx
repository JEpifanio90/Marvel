import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Logo from "@/components/logo/Logo";

const {Content, Footer, Sider} = Layout;

function HomeLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer, borderRadiusLG}
  } = theme.useToken();

  return (
    <Layout style={ {minHeight: "100vh", minWidth: "100vw"} }>
      <Sider collapsible collapsed={ collapsed } onCollapse={ (value) => setCollapsed(value) }>
        <Logo/>
        <Menu theme="dark" defaultSelectedKeys={ ["1"] } mode="inline" items={ [] }/>
      </Sider>
      <Layout>
        <Content style={ {margin: "0 16px"} }>
          <Breadcrumb style={ {margin: "16px 0"} }>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={ {
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            } }
          >
            <Outlet/>
          </div>
        </Content>
        <Footer style={ {textAlign: "center"} }>
          Marvel ©{ new Date().getFullYear() } Created by Jose
        </Footer>
      </Layout>
    </Layout>
  );
}

export default HomeLayout;