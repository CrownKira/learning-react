import React, { useState, useEffect, useRef, Component } from 'react';

// console.log(React.version);

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                // if event that is clicked on is inside the Component, dont do anything
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            // this will get invoked before the Component is removed from the dom 
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    })
    return (
        <div ref={ref} className="ui form ">
            <div className="field">
                <label htmlFor="" className="label">{label}</label>
                {/* open or close on click */}
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {/* change the selected on click */}
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dropdown;