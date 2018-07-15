/* //App React components */
import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';



class App extends Component{

   /*  adding state */
   constructor(props) {
    super(props);
    this.state = {
      deadline: 'October 15, 2018',
      newDeadline: '',
      show: true

    }
  }

  //Handles errors
  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
     
   /*  //Updating state dynamically */
   changeDeadline() {


        this.setState({deadline: this.state.newDeadline});
    
   
  }


    render(){
        if (this.state.show) {
        return(
            <div className="App">
                <div className="App-title">
                 <well>Coundown to {this.state.deadline}</well>
                </div>

                <div className ="App-span">
                <span>
                    <well> 
                         <Clock
                 deadline={this.state.deadline} 
               />
               </well>
                  
              
                </span>
                
                </div>
              
   
                <div>
                    <Form inline>
                    <FormControl className="Deadline-input" placeholder='new date'

                     // user can type 
                     /* onChange={event => console.log('event', event.target.value)} */
                  
                     //User changes the Date they want to countdown
                        onChange={event => this.setState({newDeadline: event.target.value})} />
                    <Button bsStyle="custom" onClick={() => this.changeDeadline()}>
                        Submit
                    </Button>
                    </Form>

                </div>
            
           

            </div>
                      
        )
    }
    
        
    }

}

export default App;