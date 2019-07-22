import React, { Component} from 'react';
import { Button, Card, CardSection, Input } from './common';
import { thisExpression } from '@babel/types';

class LoginForm extends Component {
    state = { email: '' };
    state = { password: '' };
    
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
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
};

export default LoginForm;