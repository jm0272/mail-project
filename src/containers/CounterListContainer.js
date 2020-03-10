import { connect } from 'react-redux';
import * as actions from '../actions';
import CounterList from '../components/CounterList';

const getRandomColor = () => {
    const colors = ['#000000','#FF0000','#00FF00','#0000FF','#0F00F0','#F0FF00'];

    const random = Math.floor(Math.random() * 6);
    console.log('랜덤색상 : ', colors[random]);
    return colors[random];
}

const mapStateToProps = (state) => ({
    counters:state.counters
});

const mapDispatchToProps = (dispatch) => ({
    increment : (index) => dispatch(actions.increment(index)),
    decrement : (index) => dispatch(actions.decrement(index)),
    setColor  : (index) => {
        const color = getRandomColor();
        return dispatch(actions.setColor(index, color))
    }
});



const CounterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList);

export default CounterListContainer;

