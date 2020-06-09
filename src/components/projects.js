import React ,{Component} from 'react';
import {Tabs,Tab,Grid,Cell} from 'react-mdl';


class projects extends Component{
        constructor(props) {
            super(props)
            this.state = { activeTab: 0 };
        }
        switchTypes(){
        if(this.state.activeTab === 0){
            return(
                <h1>React</h1>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <h1>Node</h1>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <h1>Competitive</h1>
            )
        }
        else {
            return(
                <h1>Data Analytics</h1>
            )
        }
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
                <section className="project_grid">
                    <Grid className="project_grid">
                        <Cell col={12}>
                            <div className="type1"> {this.switchTypes()}</div>
                        </Cell>
                    </Grid>
                   
                </section>
            </div>
        );
    }
}

export default projects;