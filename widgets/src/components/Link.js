import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        e.preventDefault();
        window.history.pushState({}, '', href);

        // communicate over to the route component that the url 
        // has just changed
        // when clicked, fire the event named popstate
        const navEvent = new PopStateEvent('popstate'); // arg is the name of the event
        window.dispatchEvent(navEvent);
    };
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;