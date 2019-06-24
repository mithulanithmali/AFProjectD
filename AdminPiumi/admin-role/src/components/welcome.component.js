import React, {Component} from 'react';
import Background from '../components/images/download.jpg';

export default class Welcome extends Component{
    render() {
    return (
        <div>
            <img src={Background} alt="A image"></img>
        </div>
    )
    }
}

