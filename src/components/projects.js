import React ,{Component} from 'react';
import {Tabs,Tab} from 'react-mdl';

class projects extends Component{
        constructor(props) {
            super(props)
            this.state = { activeTab: 0 };
        }
    
    render(){
        return(
            <div className="Category-Tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React JS</Tab>
                    <Tab>Node JS</Tab>
                    <Tab>Competitive Programming Archives</Tab>
                    <Tab>Data Analytics</Tab>
                </Tabs>
                <section>
                    
                </section>
            </div>
        );
    }
}

export default projects;