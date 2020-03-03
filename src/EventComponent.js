import React, { Component } from 'react';

class EventComponent extends Component {

    state = {
        number : 0,
        sts : '',
        targetInput : ''
    }

    handleClick = (e) => {
        this.setState({
            targetInput : this.state.sts
        });
    }

    handleChange = (e) => {
        this.setState({
            sts : e.target.value
        });
    }

    render() {
        return (
            <div>
                입력
                <input 
                    type="text"
                    value={this.state.sts}
                    onChange={this.handleChange}
                />

                결과
                <input 
                    type="text"
                    value={this.state.targetInput}
                    readOnly="readOnly"
                />

                <button
                    onClick={this.handleClick}
                >
                클릭!!
                </button>
            </div>
        );
    }
}

export default EventComponent;