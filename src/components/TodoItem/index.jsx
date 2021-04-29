import React from 'react'
// import { connect } from 'react-redux'
import {toggle_todo, delete_todo} from '../../store/actions/todoList'
import {useDispatch} from 'react-redux'


 const TodoItem = ({todo, id }) => {

    const dispatch = useDispatch()

return <div style={{display: 'flex'}}>
            
    <span style={{
                   textDecoration: todo.complete ? 'line-through' : 'none'}

    }>{todo.text}</span>

    <button onClick={() =>dispatch(toggle_todo(id))}>Complete</button>
    <button onClick={() =>dispatch(delete_todo(id))}>Delete</button>

</div>
}

const styles = {
    display: 'flex',
    justifyContent: 'space-between'
}

// const mapDispatchtoProps = dispatch => ({
//     toggle_todo: (id) => dispatch(toggle_todo(id)),
//     delete_todo: (id) => dispatch(delete_todo(id)),

// })
export default TodoItem

