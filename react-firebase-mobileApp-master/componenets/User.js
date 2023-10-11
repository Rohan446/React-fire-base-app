import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import {Icon, Avatar,Button, Input} from 'react-native-elements' 
import styles from './styles';
import {database,auth} from '../config/config'
import { TextInput } from 'react-native-gesture-handler';

class User extends React.Component{
    state = {
        activityIndicator: false,
        userName : "User Name",
        feedBack : ''
    }
    
    componentDidMount(){
        this.setState({userName: auth.currentUser.email});
    }

    signout =()=>{
        this.setState({activityIndicator:true});
        auth.signOut().then(()=> {
            this.setState({activityIndicator:false});
            this.props.navigation.replace("Root")
        })
    }

    saveFeedBack = ()=>{
        const feedBack = this.state.feedBack;
        console.log(feedBack);
        this.setState({activityIndicator:true});
        if(feedBack){
            database.ref("/feedback/translateApp").push({
                feedback: this.state.feedBack,
                id: auth.currentUser.uid,
                email:auth.currentUser.email
            })
            .then(()=>{
                this.setState({activityIndicator:false});
                alert("Thanks for summiting feedback this keeps up to make innovative products");
                this.setState({feedBack:""});
            })
            .catch(()=> {
                alert("Somthing occured while saving feedback sorry !");
            })
        }
    }

    render(){
        return(
            <View style={styles.appbackground}>
                <View style={styles.avatarStyle}>
                <Avatar
                    size="xlarge"
                    title="U"
                    rounded
                    activeOpacity={0.7}
                ></Avatar>
                <Text style={{marginTop:10}}>{this.state.userName}</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Button
                    onPress={()=> this.signout()}
                    title="Logout"
                    buttonStyle={{width:80, height:40}}
                />
                <ActivityIndicator animating={this.state.activityIndicator} size="small" color="#ff8c00"></ActivityIndicator>
                <Text style={{textAlign:'center'}}>
                    Other features of users are coming soon !
                </Text>
                </View>
                <Input
                    containerStyle={{margin:40, width:'80%'}}
                    placeholder='     Feed Back please '
                    onChangeText = {(text)=> this.setState({feedBack:text})}
                        leftIcon={
                                <Icon
                                name='feedback'
                                type='material'
                                size={24}
                                color='#ff8c00'
                                />
                                }
                />
                <Button onPress={()=> this.saveFeedBack()} title="Submit Feedback" buttonStyle={{marginLeft:'25%',width:200, height:30}}></Button>
            </View>
        );
    }
}

export default User;