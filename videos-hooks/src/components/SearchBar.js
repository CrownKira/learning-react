import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        // make sure call callback from parent component
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form" action="">
                <div className="field">
                    <label htmlFor="">Search for a Video</label>
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;