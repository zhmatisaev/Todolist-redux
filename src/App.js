import "./App.css";
import Counter  from "./components/Counter/index";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from './store/reducers'
import  TodoList from './components/TodoList'
import {useState} from 'react'

// import Todo from './components/TodoItem'
 
const store = createStore(rootReducer);
function App() {

// const [switchComponent , setSwitch] =useState(false)

  return (
    <Provider store={store}>
      {/* <button style={{marginBottom: 20}} onclick={() => setSwitch(!switchComponent)}> switch</button>
     {switchComponent ? <Counter/> : <TodoList/>} */}
     <TodoList/>
     {/* <Counter/> */}
    </Provider>
  );
}
export default App;