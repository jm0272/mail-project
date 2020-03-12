/***
 * 일정관리 App
 */
import React, { Component } from 'react';
import PageTemplate from '../components/PageTemplate';
import PageInputContainer from '../containers/PageInputContainer';
import PageListContainer from '../containers/PageListContainer';

class App extends Component {
    render() {
        return (
            <PageTemplate>
                <PageInputContainer></PageInputContainer>
                <PageListContainer></PageListContainer>
            </PageTemplate>
        );
    }
}

export default App;




/***
 * CounterList  App
 */
/* import React, { Component } from 'react';
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

export default connect(null, mapDispatchToProps)(App); */


