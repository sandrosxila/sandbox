import React from 'react'

type Props = {
    onOpenClick: () => void
}

const OpenMenu = ({onOpenClick}: Props) => {

    const style: React.CSSProperties = {
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
    }

    return (
        <div onClick={onOpenClick} style={style}>
            
        </div>
    )
}

export default OpenMenu