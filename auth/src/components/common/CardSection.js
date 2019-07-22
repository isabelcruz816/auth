import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style = { styles.containerStyle }>
            { props.children }
        </View>
    );
};

const styles = {
    containerStyle : {
        borderBottomWidth : 1,
        padding : 5,
        backgroundColor : '#AFEEEE',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        borderColor : '#20B2AA',
        position : 'relative'
    }
};

export { CardSection };