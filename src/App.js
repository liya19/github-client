import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';

function App() {
    const { Header, Content, Footer } = Layout;
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Test1</Menu.Item>
                </Menu>
            </Header>

            <Content className={"content"}>
                {/*навигационная цепочка*/}
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className={"blockContent"}>Content</div>
            </Content>
            <Footer className={"footer"}>2019</Footer>
        </Layout>
    );
}
export default App;