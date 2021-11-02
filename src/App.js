import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './custom-antd.css';
import './App.css';
import MenuSideBar from './Components/MenuSideBar/Menu';
import Headers from './Components/Headers/Header';
import Contents from './Components/Contents/Contents';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
function App() {
  const [collapsed, setCollapsed ] = useState(false);
  const toggleCollapsed = () => {
      setCollapsed(!collapsed);
  }
  return (
      <Layout>
        <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0,
        }}
        trigger={null}
        collapsible 
        collapsed={collapsed}
        >
          <MenuSideBar />
        </Sider>
        <Layout className="site-layout">
          <Header className="antd-header">
            <Headers toggleCollapsed={toggleCollapsed} collapsed={collapsed}/>
          </Header>
          <Content className='antd-content'>
            <Contents/>
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;
