import React, { Suspense, useEffect, useRef } from 'react';
import { useState } from 'react';
const OpenMenu = React.lazy(() => import('./Open'));
const HamburgerMenu = React.lazy(() => import('./Menu'));

type Props = {
    translationTime?: number,
    children: React.ReactNode
}

const Hamburger = ({ children, translationTime = 150 }: Props) => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [loadHamburgerMenu, setLoadHamburgerMenu] = useState(false);
    const [hamburgerRendered, setHamburgerRendered] = useState(false);

    useEffect(() => {
        if (loadHamburgerMenu && hamburgerRendered) {
            setHamburgerOpen(true);
        }
    }, [loadHamburgerMenu, hamburgerRendered])

    const firstClick = useRef(false);

    const onOpenClick = () => {
        if (!firstClick.current) {
            setLoadHamburgerMenu(true);
            firstClick.current = true;
        }
        else {
            setHamburgerOpen(p => !p);
        }
    };

    return (
        <>
            <OpenMenu onOpenClick={onOpenClick} />
            <Suspense fallback={<></>}>

                {
                    loadHamburgerMenu &&
                    <HamburgerMenu
                        isOpen={hamburgerOpen}
                        setHamburgerOpen={setHamburgerOpen}
                        setHamburgerRendered={setHamburgerRendered}
                        translationTime={translationTime}
                    >
                        {children}
                    </HamburgerMenu>
                }
            </Suspense>
        </>
    );
};

export default Hamburger;