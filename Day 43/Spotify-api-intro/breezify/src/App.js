import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon,Button} from 'react-bootstrap';


//Spotify API
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {

  /* constructor(props){
    super(props);

    const params = this.getHashParams();
    const token = params.access_token;
      if (token) {
        spotifyApi.setAccessToken(token);
        
     
      }
     
      this.state = {
        loggedIn: token ? true : false,
        nowPlaying: { name: 'Not Checked',
         albumArt: '',
         query: '',
        
        }
      }


  }
 */

constructor(props) {
  super(props);
  this.state = {
    query: "", // my query
    artist: null  // my response.
  }
}


  search() {

    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    var accessToken = 'BQCg0FDxnZz0JLodmo99jDlpoH3n5J8_SfOArlRZd5JNh0hHQp02RHmNnjYYt_tLj28i49QKoFKd8d8vEgNcyY8sMlHem5EJYSBDYww_NHBCayIfCu4akmlPcWF0ZKvQN_MZUJMxxXOX2TmqMSz9eRFcOWw5I3iHZy6dby2qQa4l_jkL9poAZWM&refresh_token=AQB1v5_RQFAyOyz7naqlginu3c-aQDeiyReGqnD9TkptMH97mCUYUN3YHCalNliF6AZ_Dgd4QZ2jXUS0Qho3CwP5yq5kkIhkeodayhKeSDVALHsszpXV8Cq2D2ShBYy2mGg'

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
      .then(json=> console.log('json', json))
      

  }

  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name: response.item.name, 
              albumArt: response.item.album.images[0].url
            }
        });
      })
  }


  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
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

                <div className="Profile">
                <div>Artist Picture</div>
                <div>Artist Name</div>

                <div className="Gallery">
                    Gallery
                </div>

          

                </div>




    </div>
    );
  }
}

export default App;
