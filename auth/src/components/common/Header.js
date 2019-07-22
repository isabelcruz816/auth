// Import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';

// Make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style = {viewStyle}>
            <Text style = {textStyle}>{props.headerText}</Text>
        </View>
        );
};

// Styling the component
const styles = {
    viewStyle : {
        backgroundColor : '#20B2AA',
        justifyContent: 'center',
        alignItems: 'center',
        header: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOppacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle : {
      fontSize: 30,
      margin: 5
    }
  };
  
// Make the component available for other parts of the app
export { Header };
