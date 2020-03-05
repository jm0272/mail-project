import React, { Component } from 'react';
import './App.css';
import PageTemplate from './components/PageTemplate';
import PageList from './components/PageList';
import PageInput from './components/PageInput';

class App extends Component {

  state = {
    input : '',
    todos : [
      {id : 0, text : 'sample Item', isBold:false}
    ]
  }

  // 입력
  id = 1;
  handleInsert = () => {
    console.log('입력 이벤트!');
    const { todos, input } = this.state;

    if(input === ''){
      alert('내용 입력필수');
      return;
    }

    const item = {
      id : ++this.id,
      text : input,
      isBold : false
    }
    this.setState({
      todos : [
        ...todos,
        item
      ],
      input : ''
    });
  }
  
  // input 변경
  handleInputChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }

  // 항목삭제
  handleRemoveItem = (id) => {
    console.log('삭제 이벤트!');
    const { todos } = this.state;
    const index = todos.findIndex((todo) => todo.id === id);

    this.setState({
      todos : [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  // 항목 Toggle
  handleToogleItem = (id) => {
    console.log('토글 이벤트!');
    const { todos } = this.state;
    const index = todos.findIndex((todo) => todo.id === id);
    const toggleItem = {
      ...todos[index],
      isBold : !todos[index].isBold
    }

    this.setState({
      todos : [
        ...todos.slice(0, index),
        toggleItem,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  render() {
    const { input, todos } = this.state;
    const { handleInsert, handleInputChange, handleRemoveItem, handleToogleItem } = this;

    return (
      <PageTemplate>
        <PageInput onInsert={handleInsert} onChange={handleInputChange} value={input}></PageInput>
        <PageList todos={todos} onRemove={handleRemoveItem} onToggle={handleToogleItem}></PageList>
      </PageTemplate>
    );
  }
}

export default App;
