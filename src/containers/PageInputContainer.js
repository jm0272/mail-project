import React, { Component } from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import PageInput from '../components/PageInput';
import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class PageInputContainer extends Component{

    id = 0;
    getId = () => {
        return ++this.id;
    }
    
    handleChange = (e) => {
        const { value } = e.target;
        const { inputActions } = this.props;
        inputActions.setInput(value);
    }

    handleInsert = (e) => {
        const { todosActions, inputActions, value } = this.props;
        const todo = {
            id : this.getId(),
            text : value,
            isBold : false
        }

        if(value === null || value === undefined || value ===''){
            alert('입력하세요');
            return;
        }

        todosActions.onInsert(todo);
        inputActions.setInput('');
    }

    render() {
        const { handleChange, handleInsert} = this;
        const { value } = this.props;
        return (
            <PageInput
                onInsert={handleInsert}
                onChange={handleChange}
                value={value}
            >
            </PageInput>
        )

    }
}

export default connect(
    (state) => ({
        value : state.input.get('value')
    }),
    (dispatch) => ({
        inputActions : bindActionCreators(inputActions, dispatch),
        todosActions : bindActionCreators(todosActions, dispatch)
    })
)(PageInputContainer);
