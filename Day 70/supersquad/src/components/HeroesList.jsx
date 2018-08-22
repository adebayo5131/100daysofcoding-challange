import React, {Component} from 'react';
import {connect} from 'react-redux'



class HeroesList extends Component{

    render(){
       console.log('this.props', this.props)
        return(

            <div>

                <h4>Your Hero Squad</h4>
                <ul className="list-group">{
                    
                    this.props.heroes.map(hero =>{
                        return(
                            <li key={hero.id} className="list-group-item">

                                <div className="list-item">{hero.name}</div>
                              
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
      heroes: state.heroes
  };
}


export default connect(mapStateToProps,null) (HeroesList);