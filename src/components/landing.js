import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Shashwat from '../assets/images/shashwat.jpg';
class landing extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="grid1">
                    <Cell col={12}>
                        <img
                            src={Shashwat}
                            alt="Picture of him"
                            className="myPic"
                        />
                        <div className="myText">
                            <h1>MERN stack developer</h1>
                            
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default landing;