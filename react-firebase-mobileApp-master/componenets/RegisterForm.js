import React from 'react';
import {View, TextInput, Text,Image,ActivityIndicator, TouchableHighlight} from 'react-native'
import CustomButton from '../cutomComponenets/CustomButton.js'
import styles from './styles.js';
import { auth } from '../config/config.js';
class RegisterForm extends React.Component{
    state = {
        name : '',
        userName : '',
        password : '',
        loadingView:false
    }
    register(email, password){
      console.log(this.state.name+","+this.state.userName+","+this.state.password);
      if(email && password ){
        this.setState({loadingView:true});
        auth.createUserWithEmailAndPassword(email, password)
        .then(()=>{
          this.setState({loadingView:false});
          this.props.navigation.replace('Translations');
        })
        .catch((e)=>{
          this.setState({loadingView:false});
          alert('User Aldready Exists');
        });
      }
      else{
        alert('Email or password cannot be blank');
      }
    }

    render(){
        return(
      <View style = {styles.appbackground}>
        <Image
       style = {styles.logo}
       source = {{uri : this.logouri}}
      ></Image>
        <TextInput style = {styles.inputtext}
          placeholderTextColor = 'gray'
          placeholder = "Name"
          onChangeText = {(text) => this.setState({name : text})}
        ></TextInput>
        <View style = {styles.emptyspace}></View>
        <TextInput style = {styles.inputtext}
          placeholderTextColor = 'gray'
          placeholder = "Email"
          onChangeText = {(text) => this.setState({userName : text})}
        ></TextInput>
        <View style = {styles.emptyspace}>
        </View>
          <TextInput style = {styles.inputtext}
            secureTextEntry = {true}
            placeholder = "Password"
            placeholderTextColor = 'gray'
            onChangeText = {(text) => this.setState({password: text})}
          >
          </TextInput>
          <View style={styles.emptyspace}/>
          <CustomButton callback={()=>this.register(this.state.userName,this.state.password)} styles={styles.normalbutton} text="Register"></CustomButton>
          <View style={styles.emptyspace}/>
          <ActivityIndicator size='small' color='#ff8c00' animating={this.state.loadingView}></ActivityIndicator>
          <View style={styles.emptyspace}/>
          <Text style={{textAlign : "center"}}>Aldready have an account ?
          </Text>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style={{textAlign :"center", fontWeight :'bold'}}>
              Login
            </Text>
          </TouchableHighlight>
      </View>
        )
    }
    logouri = 'https://pngimage.net/wp-content/uploads/2018/06/vine-logo-png-transparent-background-5.png';
}
export default RegisterForm;