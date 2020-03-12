import React, { Component } from 'react';
import PageItem from '../PageItem';
import { toJS } from 'immutable';

/* const PageList = ({todos, onToggle, onRemove}) => {
    console.log('todos >>> ', todos);
    const list = todos.map(
        (todo) => (
            <PageItem
                key={todo.get('id')}
                onToggle={()=>onToggle(todo.get('id'))}
                onRemove={()=>onRemove(todo.get('iud'))}
                isBold={todo.get('isBold')}
            >
            {todo.get('text')}
            </PageItem>
        )
    );

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
} */

class PageList extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }  

    render() {
        const { todos, onToggle, onRemove } = this.props;
        console.log('todos array : ', todos.toJS());    
        const list = todos.map(
            (todo,index) => (
                <PageItem
                    key={todo.get('id')}
                    onToggle={()=>onToggle(todo.get('id'))}
                    onRemove={()=>onRemove(todo.get('id'))}
                    isBold={todo.get('isBold')}
                >
                {todo.get('text')}
                </PageItem>
            )
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}


export default PageList;