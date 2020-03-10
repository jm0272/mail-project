import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ create, remove }) => {
    return (
        <div>
            <div>
                <button
                    onClick={create}
                >
                생성
                </button>

                <button
                    onClick={remove}
                >
                제거
                </button>
            </div>
        </div>
    )

};

Button.prototype = {
    create : PropTypes.func,
    remove : PropTypes.func
};

Button.defaultProps = {
    create : () => (console.log('create')),
    remove : () => (console.log('remove'))
};

export default Button;