/* import React, { Component } from 'react';
import CounterContainer from './CounterContainer';
 
class App extends Component {
    render() {
        return (
            <div>
                <button>
                    추가
                </button>
                <button>
                    제거
                </button>
                <CounterContainer/>
            </div>
        );
    }
}

export default App; */


import React, { Component } from 'react';
import CounterListContainer from './CounterListContainer';
import Button from '../components/Button';
import * as actions from '../actions';
import {connect} from 'react-redux';

const getRandomColor = () => {
    const colors = ['#000000','#FF0000','#00FF00','#0000FF','#0F00F0','#F0FF00'];

    const random = Math.floor(Math.random() * 6);
    console.log('랜덤색상 생성 : ', colors[random]);
    return colors[random];
}

class App extends Component {
    render() {
        const { create, remove } = this.props
        return (
            <div>
                <Button
                    create={create}
                    remove={remove}
                />
                <CounterListContainer/>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    create : () => dispatch(actions.create(getRandomColor())),
    remove : () => dispatch(actions.remove()),
});

export default connect(null, mapDispatchToProps)(App);


