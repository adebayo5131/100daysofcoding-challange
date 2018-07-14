//React components
import React, {Component} from 'react';

import './App.css';

class App extends Component{

    render(){
        return(
            <div className="App">
                <div className="App-title">Coundown to December 25, 2017</div>
                <div className=" Clock-days">14 days</div>
                <div className=" Clock-hours">30 hours</div>
                <div className=" Clock-minutes">15 minutes</div>
                <div className=" Clock-seconds">20 seconnds</div>
            </div>

            <div>
                <input placeholder = 'new date' />
                <button>Sumbit</button>
            </div>
        )
        
    }

}

export default App;