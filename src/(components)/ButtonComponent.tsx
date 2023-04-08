import React from 'react';

function ButtonComponent({text, ...p}: {text: string} & any) {
    return (
        <button {...p}>
            {text}
        </button>
    );
}

export default ButtonComponent;