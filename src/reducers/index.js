import * as types from '../actions/ActionTypes';

const initialState = {
    counters:[
        {
            color : 'black',
            number : 0
        }
    ]
};

const counter = (state = initialState, action) => {
    const { counters } = state;
    switch(action.type){
        case types.CREATE :
            console.log('생성');
            return ({
                counters : [
                    ...counters,
                    {
                        color : action.color,
                        number : 0
                    }
                ]
            });
        case types.REMOVE : 
            console.log('제거');
            return ({
                counters : [
                    ...counters.slice(0,counters.length - 1)
                ]
            });

        case types.INCREMENT : 
            console.log('증가');
            return ({
                counters : [
                    ...counters.slice(0,action.index),
                    {
                        ...counters[action.index],
                        number : counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            });

        case types.DECREMENT : 
            console.log('감소');    
            return ({
                counters : [
                    ...counters.slice(0,action.index),
                    {
                        ...counters[action.index],
                        number : counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            });
        case types.SET_COLOR : 
            console.log('색변경');        
            return ({
                counters : [
                    ...counters.slice(0,action.index),
                    {
                        ...counters[action.index],
                        color : action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            });
        default : 
            return state;
    }
}

export default counter;

