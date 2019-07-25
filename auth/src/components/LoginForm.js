import React, { Component} from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    
    // Authenticate user
    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
         .catch( () => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
             .catch( () => {
                this.setState({ error: 'Failed' });
             });
         });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size = "small"/>
        }
        return (
            <Button onPress = { this.onButtonPress.bind(this) }>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder = "user@mail.com"
                        label = "Email"
                        value = { this.state.email }
                        onChangeText = { email => this.setState( { email } )}
                        style = {{ height: 40, width: 100 }}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder = "password"
                        label = "Password"
                        value = { this.state.value }
                        onChangeText = { password => this.setState( { password })}
                    />
                </CardSection>
                <Text style = {styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        );
    }
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;