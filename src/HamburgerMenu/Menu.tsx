import React, { useEffect, useLayoutEffect, useState } from 'react'
import Close from './Close';

type Props = {
    isOpen: boolean,
    setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setHamburgerRendered: React.Dispatch<React.SetStateAction<boolean>>,
    translationTime: number,
    children: React.ReactNode
}

const Menu = ({ isOpen, setHamburgerOpen, children, setHamburgerRendered, translationTime }: Props) => {


    const [show, setShow] = useState(isOpen);

    useLayoutEffect(() => {
        setHamburgerRendered(p => !p)
    }, [setHamburgerRendered])

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
                        <Close setHamburgerOpen={setHamburgerOpen} setShow={setShow} transitionTime={translationTime} />
                        {children}
                    </div>
                </div>
            }
        </>
    )
}

export default Menu