import { connect } from 'react-redux';
import * as actions from '../actions';
import Counter from '../components/Counter';

const getRandomColor = () => {
    const colors = ['#000000','#FF0000','#00FF00','#0000FF','#0F00F0','#F0FF00'];

    const random = Math.floor(Math.random() * 6);
    console.log('랜덤색상 : ', colors[random]);
    return colors[random];
}

const mapStateToProps = (state) => ({
    number : state.number,
    color : state.color
});

const mapDispatchToProps = (dispatch) => ({
    increment : () => dispatch(actions.increment()),
    decrement : () => dispatch(actions.decrement()),
    setColor  : () => {
        const color = getRandomColor();
        return dispatch(actions.setColor(color))
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;