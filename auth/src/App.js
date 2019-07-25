import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };

    UNSAFE_componentWillMount() {
        
        firebase.initializeApp({
            apiKey: "AIzaSyBNIEkD90ruqjiV1uritedCOG06E3iL59w",
            authDomain: "auth-2850a.firebaseapp.com",
            databaseURL: "https://auth-2850a.firebaseio.com",
            projectId: "auth-2850a",
            storageBucket: "",
            messagingSenderId: "551445583799",
            appId: "1:551445583799:web:b37df706f87c0330"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }
            else {
                this.setState({ loggedIn: false });
            }
        });
    };

    renderContent() {
        if (this.state.loggedIn) {
            return(
                <Button>
                    Log Out
                </Button>
            );
        }
        return <LoginForm/>;
    };

    render() {
        return (
            <View>
                <Header headerText = "Authentication"></Header>
                { this.renderContent() }
            </View>
        );
    };
};

export default App;
