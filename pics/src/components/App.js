import React from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        // Functions running in parallel with other functions
        const response = await unsplash.get('/search/photos', {
            // customise the url
            params: { query: term },

        });
        // .then((response) => console.log(response.data.results));
        // console.log(response.data.results);
        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }
            }>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {/* Found: {this.state.images.length} images */}
                <ImageList images={this.state.images} />
            </div >
        );
    }

}

export default App;