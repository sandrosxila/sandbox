import React, {Suspense} from 'react';
import { useState } from 'react';
const OpenMenu = React.lazy(() => import('./OpenMenu'));
const HamburgerMenu = React.lazy(() => import('./HamburgerMenu'));

type Props = {
    children: React.ReactNode
}

const Hamburger = ({ children }: Props) => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const onOpenClick = () => {
        setHamburgerOpen(p => !p);
    }

    return (
        <Suspense fallback = {<></>}>
            <OpenMenu onOpenClick={onOpenClick} />
            <HamburgerMenu isOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}>
                {children}
            </HamburgerMenu>
        </Suspense>
    )
}

export default Hamburger