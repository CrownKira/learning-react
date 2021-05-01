// import React from 'react'; // not needed since no return of jsx
import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
    // just to get our route to update
    //set default current path to be window.locatin.pathname
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            //popstate triggered by clicking on link
            // console.log('location changed');
            setCurrentPath(window.location.pathname);
        };
        // addeventlistener is a permanent effect, unless removed
        // will keep listening the event
        // when popstate detected, log location changed 
        window.addEventListener('popstate', onLocationChange);

        return () => { window.removeEventListener(onLocationChange) };
    }, []); //run an effect and clean it up only once (on mount and unmount)
    return currentPath === path
        ? children
        : null;
};

export default Route;