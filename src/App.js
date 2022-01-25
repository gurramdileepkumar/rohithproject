import logo from './logo.svg';
import './App.css';
import Count from './Count'
import Count1 from './Count1'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const intialState={
  count:50
}

function reducer(state = intialState,action){
  switch(action.type){
    case 'INCREMENT':
      return{
        count: state.count+1
      };
      case 'DECREMENT':
      return{
        count: state.count-1
      };
      default:
        return state;
  }
}


const store= createStore(reducer);
store.dispatch({type:"INCREMENT"});
store.dispatch({type:"DECREMENT"});

function App() {
  return (
    <Provider store={store}>
    <div style={{textAlign: 'center'}}>
     <h1>welcome</h1>
     <Count />
     <Count1 />
    </div>
    </Provider> 
  );
}

export default App;
