import React ,{Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,Button,IconButton,CardActions,CardMenu} from 'react-mdl';


class projects extends Component{
        constructor(props) {
            super(props)
            this.state = { activeTab: 0 };
        }
        switchTypes(){
        if(this.state.activeTab === 0){
            return(
                <div className="project_grid">
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </CardText>
    <CardActions border>
        <Button colored>View Updates</Button>
    </CardActions>
</Card>

<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </CardText>
    <CardActions border>
        <Button colored>View Updates</Button>
    </CardActions>
</Card>
                
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="project_grid">
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </CardText>
    <CardActions border>
        <Button colored>View Updates</Button>
    </CardActions>
</Card>
            )
        }
        else {
            return(
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
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
                
                    <Grid className="project_grid">
                        <Cell col={12}>
                            <div className="type1"> {this.switchTypes()}</div>
                        </Cell>
                    </Grid>
            </div>
        );
    }
}

export default projects;