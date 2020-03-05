import React, { Component } from 'react';

class IteratorSample extends Component {

    state = {
        names : ['item1','item2','item3'],
        name : ''
    }

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    handleClick = () => {
        const { names, name } = this.state;
        this.setState({
            names : names.concat(name),
            name : ''
        });
    }
    
    handleRemove = (index) => {
        const { names } = this.state;
        this.setState({
            names : [
                ...names.slice(0, index),
                ...names.slice(index + 1, names.length)
            ]
        });
    }

    render() {
        const nameList = this.state.names.map(
            //(name, index) => (<li key={index} onDoubleClick={this.handleRemove(index)}>{name}</li>)
            (name, index) => (
                <li 
                    key={index} 
                    onDoubleClick={() => this.handleRemove(index)}>
                    {name}
                </li>
            )
        );

        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.name}/>
                <button onClick={this.handleClick}>입력</button>

                <ul>
                    {nameList}
                </ul>
                
            </div>
        );
    }
}

export default IteratorSample;