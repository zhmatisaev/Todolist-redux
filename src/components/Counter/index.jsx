import React from 'react'
import { increaseCount, decreaseCount } from '../../store/actions'
import {useStore} from 'react-redux' 
import {useSelector , useDispatch} from 'react-redux'



const Counter = ({ count, increaseCount, decreaseCount }) => {
   
   const store = useStore()
    console.log(store.getState()); 
const dispatch = useDispatch()

const counterData = useSelector(state => state.counter)
// console.log(counterData);


    return <div>
                <button onClick={() => dispatch(decreaseCount())}>-</button>
                {counterData.count}
                <button onClick={() => dispatch(increaseCount())}>+</button>
            </div>
}
export default Counter