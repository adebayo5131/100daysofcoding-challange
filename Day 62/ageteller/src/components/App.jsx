import React, {Component} from 'react'
import {Form, FormControl,Button} from 'react-bootstrap'
import './App.css';
class App extends Component{
     
    constructor(props){
        super(props);

        this.state={
           newDate:''
        }

    
    }

    
        

    render(){

        return(

            <div className="App">
                <Form inline>
                    <h2 >What is your Birthday?</h2>
                    <FormControl
                        type="date"
                        onChange={event => this.setState({ newDate: event.target.value })}
                    >

                    </FormControl>
                    {' '}
                    <Button>
                        Submit
                </Button>

                </Form>
            </div>
        )
    }
}

export default App;