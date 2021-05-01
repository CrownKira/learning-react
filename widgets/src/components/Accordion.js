import React, { useState } from 'react';

// React.use

const Accordion = ({ items }) => {
    // console.log(React);
    const [activeIndex, setActiveIndex] = useState(null);
    // [piece of state, function to update this piece of state] = useState(intial value for this piece of state)

    const onTitleClick = (index) => {
        // console.log('title clicked', index)
        setActiveIndex(index); //when invoked, set the value and then rerender the component
    };
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`} >
                    <p>{item.content}</p>
                </div >
            </React.Fragment >
        );
    });
    return (
        <div className="ui styled accordion">
            {renderedItems}
            {/* <h1>{activeIndex}</h1> */}
        </div>
    );
}

export default Accordion;