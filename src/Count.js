import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class Count extends Component {
    // state = { 
    //     count:0
    // }
    increment = () =>{
        this.props.dispatch({type:"INCREMENT"})
        // this.setState({count:this.state.count+1})
    }
    decrement = () =>{
        this.props.dispatch({type:"DECREMENT"})

        // this.setState({count:this.state.count-1})
    }
    render() { 
        return (
            <div style={{textAlign: 'center'}}>
                    
                    <h1>This is count component {this.props.count}</h1>
                    <button onClick={this.increment}>increment</button>
                    <button onClick={this.decrement}>decrement</button>

                

            </div>
        );
    }
}

const mapStateToProps = state =>({
    count : state.count
})
 
export default connect(mapStateToProps)(Count);