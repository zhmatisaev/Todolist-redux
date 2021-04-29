import {combineReducers} from 'redux'
import {counterReducer} from './counter.reducer'
import {todoList_reducer} from './todoList.reducer'

export default combineReducers ({
    todoList: todoList_reducer,
    counter: counterReducer,
})