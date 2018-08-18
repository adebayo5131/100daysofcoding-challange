import React, {Component} from 'react';
import {connect} from 'react-redux'

class CharacterList extends Component{

    render(){
       
        return(

            <div>

                <h4>Character</h4>
                <ul>{
                    
                    this.props.characters.map(characters =>{
                        return(
                            <li key={characters.id}>

                                <div>{characters.name}</div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){

  return {
      characters: state.characters
  };
}

export default connect(mapStateToProps, null) (CharacterList);