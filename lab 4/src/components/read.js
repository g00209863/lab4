import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends Component
{
    state = {
        mymovies: [ ]            
    };

    componentDIdMount(){
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        .then((response)=>{
                this.setState({ movies: response.data.Search})
            })
        .catch((error)=>{
            console.log(error)
        });
    }
    render(){
        return(
            <div>
                <h1>This is my Read component!</h1>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
export default Read;