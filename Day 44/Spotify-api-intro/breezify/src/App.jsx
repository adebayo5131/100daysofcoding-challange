import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon,Button} from 'react-bootstrap';

import Profile from './Profile'


//Spotify API
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor(props){
    super(props);

     
      this.state = {
        
        nowPlaying: { name: 'Not Checked',
         albumArt: '',
         query: '',
         artist: ''  // my response.
        
        }
      }


  }





  search() {

    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    var accessToken = 'BQDlA3YKnIy04_EAlrO0sm17j_hbX0Nd5qHCZkjNR4ZvKk4pbwMVwkb7kDuhC6SwWLg2wWz6XsfaM8lk4ZmZZTdkII_Up4cYm4kC2unoSj5E_XD6dUCp1ePk2ObO3pUlrn5EZmFsHnQBSbyP6BAimkC6j35DJQAybCmnkNrMUWfQZDZQoc72L6Y&refresh_token=AQDfuvvKyEXHfHEnHgEJgnMU19iRXic7-rKM-OkhMTGFUOp0nDHfnMxMQUlKXw_JEjz4SE6sxirSVnhNZtAj3NEu1Ro2cPnJl72WihdQFDzVlR1X54moKrN2aDK_hnflpqo'

    var myToken = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };
    fetch(FETCH_URL, myToken)
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];        
      this.setState({ artist });
    })
      

  }


  render() {

    return (
      <div className="App">  
      <div className="App-title">
                  Breezify MusicApp
                </div>
                 
                 <FormGroup>

                     <InputGroup>

                     <FormControl
                     type="text"
                     placeholder="Search for an Artist" 
                     value={this.state.query}
                     onChange ={event => {this.setState({query: event.target.value})}}
                     onKeyPress ={event =>
                        {
                            if(event.key ==='Enter')
                            {
                                this.search()
                            }
                        } 
                    }
                     />
                     
                     
                     <InputGroup.Addon onClick={() => this.search()}>
                              <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>

                     </InputGroup>
                 </FormGroup>

                  <Profile

                  artist ={this.state.artist}
                  
                  />

                <div className="Gallery">
                    Gallery
                </div>

    </div>
    );
  }
}

export default App;
