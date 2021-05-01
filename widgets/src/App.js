import React, { Component, useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';



const items = [
    {
        title: 'What is React',
        content: 'React is a front end js framework'
    },
    {
        title: 'title 2',
        content: 'content 2'
    },
    {
        title: 'title 3',
        content: 'content 3'
    },

];

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'a shade of Blue',
        value: 'blue'
    }
];

// const App = (props) => {
//     const [selected, setSelected] = useState(options[0]);
//     const [showDropdown, setShowDropdown] = useState(true);
//     return (
//         // <div><Accordion items={items} /></div >
//         // <Search />
//         <div>
//             <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
//             {
//                 showDropdown ?
//                     <Dropdown
//                         selected={selected}
//                         onSelectedChange={setSelected}
//                         options={options}
//                     />
//                     : null
//             }
//         </div >

//     );
// };
// const showComponent = (route, component) => {
//     return window.location.pathname === route
//         ? component
//         : null;
// };

const App = (props) => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;