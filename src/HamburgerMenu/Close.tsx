import React, { useEffect, useRef } from 'react';

type Props = {
    setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    transitionTime: number
}

const Close = ({ setShow, setHamburgerOpen, transitionTime }: Props) => {

    const style: React.CSSProperties = {
        all: 'unset',
        position: 'absolute',
        overflow: 'hidden',
        right: '0',
        top: '0',
        margin: '2rem',
        cursor: 'pointer',
        userSelect: 'none'
    };

    const timer = useRef<null | NodeJS.Timer>(null);

    const onCloseClick = () => {
        timer.current = setTimeout(() => setHamburgerOpen(p => !p), transitionTime);
        setShow(p => !p);
    };

    useEffect(() => {
        return () => {
            if (timer.current) {
                clearTimeout(timer.current)
            }
        }
    }, []);

    return (
        <button style={style} onClick={onCloseClick}>
            X
        </button>
    );
};

export default Close;