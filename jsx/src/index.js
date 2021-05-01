// import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create a react Component

function getButtonText() {
    return 'Click on me';
}
const App = () => {
    const buttonText = 'Click me !!';
    const labelText = 'Enter Name: '
    console.log('test');
    return (
        <div>
            {/* avoid conflict with class keyword */}
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText}
            </button>
        </div>
    );
};


// take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);