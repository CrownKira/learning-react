import React from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
    // state = { isSignedIn: null }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: '833510811746-ano2rfil724rebeldbecv9b6g8b5pklr.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    // get reference to the auth object
                    this.auth = window.gapi.auth2.getAuthInstance();
                    // update the component level state
                    // this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // only first time
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button ">
                    <i className="google icon "></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button ">
                    <i className="google icon "></i>
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);