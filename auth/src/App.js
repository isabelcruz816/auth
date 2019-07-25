import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
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

        firebase.auth.OAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }
            else {
                this.setState({ loggedIn: false });
            }
        });
    }
    render() {
        return (
            <View>
                <Header headerText = "Authentication"></Header>
                <LoginForm/>
            </View>
        );
    }
};

export default App;
