import React from 'react';

class SearchBar extends React.Component {
    // constructor(props)
    state = { term: '' };
    // onInputChange(event) {
    //     console.log(event.target.value);
    //     // console.log('typing...');
    // }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form" action="">
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        {/* <input type="text" onChange={(e) => this.onInputChange(e)} /> */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }

};

export default SearchBar;