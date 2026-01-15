import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollRestoration = ({ children }) => {
    const location = useLocation();
    const prevPathname = useRef(location.pathname);

    useEffect(() => {
        if (prevPathname.current !== location.pathname) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            prevPathname.current = location.pathname;
        }
    }, [location]);

    return children;
};
