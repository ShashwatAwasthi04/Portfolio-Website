import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Shashwat from '../assets/images/shashwat.jpg';
class myResume extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="grid1">
                    <Cell col={5}>
                        <img
                            src={Shashwat}
                            alt="My Pic"
                            className="myPic"
                        />
                        </Cell>
                        <Cell col={6}>
                        <div className="myText">
                            <h4>Shashwat Awasthi</h4>
                            <p>A second Year Undergraduate student</p>
                            <hr />
                            <h4>Stream:-</h4>
                            <p>Computer Science and Engineering</p>
                            <hr />
                            <div className="clg">
                            <h4>National Institute Of Technology,Raipur</h4>
                            </div>
                            
                        </div>
                        </Cell>
                </Grid>
                <Grid className="grid2">
                <Cell col={12}>
                        <div className="myText">
                            <h4>MERN stack developer</h4>
                            
                            
                            <p>React JS || JavaScript || Bootstrap || HTML,CSS || Node JS|| Express JS</p>
                            
                            <hr />

                            <h4>Competitive Programmer</h4>
                            <p>JAVA || Data Structures and Algorithms || </p>
                            <hr />
                            <h4>Data Analytics Enthusiast</h4>
                            <p>Data Analysis using SQl</p>
                            <hr />
                            <div className="socialLinks">

                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                        </div>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default myResume;