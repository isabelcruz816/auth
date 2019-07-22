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
        backgroundColor : '#FF7F50',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        borderColor : '#FFA500',
        position : 'relative'
    }
};

export { CardSection };