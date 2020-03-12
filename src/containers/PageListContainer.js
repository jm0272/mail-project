import React, { Component } from 'react';
import PageList from '../components/PageList';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todosActions from '../modules/todos';

class PageListContainer extends Component{
    
    handleToggle = (id) => {
        //const { onToggle } = this.props;
        //onToggle.onToggle(id);

        const { todosActions } = this.props;
        todosActions.onToggle(id);
    }

    handleRemove = (id) => {
        //const { onRemove } = this.props;
        //onRemove.onRemove(id);

        const { todosActions } = this.props;
        todosActions.onRemove(id);
    }

    render() {
        const { handleToggle, handleRemove} = this;
        const { todos } = this.props;
        return (
            <PageList
                onToggle={handleToggle}
                onRemove={handleRemove}
                todos={todos}
            >
            </PageList>
        )

    }
}

export default connect(
    (state) => ({
        todos : state.todos
    }),
    (dispatch) => ({
        //onToggle : bindActionCreators(todosActions, dispatch),
        //onRemove : bindActionCreators(todosActions, dispatch)
        todosActions : bindActionCreators(todosActions, dispatch)
    })
)(PageListContainer);
