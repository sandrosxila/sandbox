import React from 'react'

type Props = {
    onOpenClick: () => void
}

const OpenMenu = ({onOpenClick}: Props) => {

    const style: React.CSSProperties = {
        all: 'unset',
        position: 'absolute',
        background: 'white',
        borderRadius: '50%',
        width: '3rem',
        height: '3rem',
        right: '0',
        top:'0',
        margin: '2rem',
        border: '1px solid black',
        cursor: 'pointer'
    };

    return (
        <button onClick={onOpenClick} style={style}>
        </button>
    );
};

export default OpenMenu;