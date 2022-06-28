import React, { useEffect, useState } from 'react'
import CloseHamburger from './CloseHamburger';

type Props = {
    isOpen: boolean,
    setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
}

const HamburgerMenu = ({ isOpen, setHamburgerOpen, children }: Props) => {

    const translationTime = 150;

    const [show, setShow] = useState(isOpen);

    useEffect(() => {
        const timer = setTimeout(() => setShow(isOpen), 0);
        return () => {
            clearTimeout(timer);
        }
    }, [isOpen]);

    const style: React.CSSProperties = {
        background: 'white',
        width: '40vw',
        height: '100vh',
        boxSizing: 'border-box',
        border: '1px solid black',
        transform: !show ? 'translateX(100%)' : 'translateX(0%)',
        transition: `all ${translationTime}ms ease-in-out`
    }

    return (
        <>
            {
                isOpen &&
                <div style={{ position: 'absolute', overflow: 'hidden', right: '0', top: '0' }}>
                    <div style={style}>
                        <CloseHamburger setHamburgerOpen={setHamburgerOpen} setShow={setShow} transitionTime={translationTime}/>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}

export default HamburgerMenu