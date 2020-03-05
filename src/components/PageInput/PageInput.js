import React from 'react';

const PageInput = ({onInsert, onChange, value}) => {
    return (
        <div>
            <input
                type="text"
                plageholder="내용입력"
                onChange={onChange}
                value={value}
            />
            <button
                onClick={onInsert}>
                입력
            </button>
        </div>
    )

}

export default PageInput;