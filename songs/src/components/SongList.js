import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        // this.props === { songs: state.songs }
        // console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => { // get state
    // give me the state library
    // returns part of the library, the part which the songlist needs
    console.log(state);
    return { songs: state.songs };
};

// 1st arg: a fucntion that take a partial state as pass them as props to the component
// 2nd arg: an object of values that u wanna pass into the component as props, will modify the argument so that
// when you invoke it, it will dispatch the returned action to the reducer
export default connect(mapStateToProps, { selectSong })(SongList);