import React from 'react';
import {Animated, Text, View, Button, TextInput} from 'react-native';
import Profile from './Profile';
export default class InputView extends React.Component {
  constructor() {
    super();
    this.state = {
        errorMessage: '',
        isEmail: false
    };
  }

  validation(email) {
    let errorMessage = null;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      errorMessage = 'Invalid email';
      this.setState({
          isEmail: true,
          errorMessage: 'email valid'
      })
    } else {
        this.setState({
            isEmail: false,
            errorMessage: 'email invalid'
        })
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Profile data="jest testing" />
        <TextInput
          testID={'username'}
          onChangeText={text => this.change(text)}
          style={{backgroundColor: 'gray', marginBottom: 15}}
          placeholder="Enter Username"
        />
      </View>
    );
  }
}
