import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPressed, children}) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity onPress={onPressed} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    //flex: 1 expands the component as much possible
    flex: 1,
    alignSelf: 'stretch',
    //alignSelf: 'stretch' position the element according to the flex box rule
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};

export default Button;
