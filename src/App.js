import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content,HeaderRow} from 'react-mdl';
import Routes from './components/routes';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header" waterfall hideTop>
            <HeaderRow title="Title">
                <h4>This is Shashwat Awasthi's Portfolio Website</h4>
            </HeaderRow>
            <HeaderRow>
                <Navigation>
                    <Link to="/resume">Check Resume</Link>
                    <Link to="/intro">Who Am I?</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Check Resume</Link>
                <Link to="/intro">Who Am I?</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Routes />
        </Content>
    </Layout>
</div>
  );
}

export default App;




