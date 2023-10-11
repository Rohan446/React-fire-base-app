import React from 'react';
import { View, TextInput, Text, TouchableHighlight, ActivityIndicator,Image } from 'react-native'
import styles from './styles.js';
import CustomButton from '../cutomComponenets/CustomButton.js';
import { auth } from '../config/config.js';
class LoginForm extends React.Component {

  state = {
    loadingView:false,
    userName: '',
    password: ''
  }

  login(username, password) {
    console.log(this.state.userName + "," + this.state.password);
    if (username && password) {
      this.setState({loadingView:true});
      auth.signInWithEmailAndPassword(username, password)
        .then(() => {
          this.setState({loadingView:false});
          this.props.navigation.replace('Translations');
        })
        .catch((e) => {
          this.setState({loadingView:false});
          alert('User name or password wrong');
        });
    }
    else {
      alert('User name or password cannot be empty');
    }
  }

  render() {
    return (
      <View style={styles.appbackground}>
        <Image
          style={styles.logo}
          source={{ uri: this.logouri }}
        ></Image>
        <TextInput style={styles.inputtext}
          placeholderTextColor='gray'
          placeholder="User Email"
          onChangeText={(text) => this.setState({ userName: text })}
        ></TextInput>
        <View style={styles.emptyspace}>
        </View>
        <TextInput style={styles.inputtext}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor='gray'
          onChangeText={(text) => this.setState({ password: text })}
        >
        </TextInput>
        <View style={styles.emptyspace} />
        <CustomButton callback={() => this.login(this.state.userName, this.state.password)} styles={styles.normalbutton} text="Login"></CustomButton>
        <View style={styles.emptyspace} />
        <ActivityIndicator size='small' color='#ff8c00' animating={this.state.loadingView}></ActivityIndicator>
        <View style={styles.emptyspace} />
        <Text style={{ textAlign: "center" }}>Dont have an account ?
          </Text>
          <View style={styles.emptyspace}></View>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={{ textAlign: "center", fontWeight: 'bold' }}>
            Register
            </Text>
        </TouchableHighlight>
      </View>
    )
  }
  logouri = 'https://pngimage.net/wp-content/uploads/2018/06/vine-logo-png-transparent-background-5.png';
}
export default LoginForm;