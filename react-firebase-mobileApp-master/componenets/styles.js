import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  appbackground :{
      flex: 1,
      backgroundColor:'white',
      position:'relative'
    },
    container: {
      flex: 1,
      marginVertical : 200,
      textAlignVertical : "center",
      marginHorizontal: 16,
    },
    floatingButtonTouch:{
      position:'absolute',
      right:20,
      bottom:30
    },
    floatingButton :{
      resizeMode: 'contain',
      width: 55,
      height: 55,
    },
    inputtext : {
      width : '80%',
      padding : 10,
      marginLeft : 40,
      alignContent : 'center',
      height : 40,
      borderRadius : 3,
      borderColor : 'gray',
      borderWidth : 2,
      textAlign : "center"
    },
    emptyspace : {
      width: 50,
      marginVertical: 10,
    },
    
    normalbutton :{
      width : 100,
      marginLeft : 150,
      alignContent : 'center',
      backgroundColor: '#ff8c00',
      borderColor: 'white',
      borderRadius: 12,
      color: '#ff8c00',
      fontSize: 12,
      padding: 4,
      textAlign:'center'
    },
    viewbutton :{
      width : 140,
      marginLeft:38,
      alignContent : 'center',
      backgroundColor: '#ff8c00',
      borderColor: 'white',
      borderRadius: 12,
      color: 'white',
      fontSize: 12,
      padding: 6,
      textAlign:'center'
    },
    warningbutton :{
      backgroundColor: '#fffafa',
      borderColor: 'red',
      borderWidth: 1,
      borderRadius: 12,
      color: 'black',
      fontSize: 12,
      overflow: 'hidden',
      padding: 4,
      textAlign:'center',
    },
    logo : {
       width: 200, 
       height:200,
       marginVertical : 40,
       marginLeft : 85,
       overflow : "hidden",
       resizeMode: 'stretch'
    },
    buttonWithoutBackground :{
        width : 40,
        textAlign : "center",
        fontSize : 12,  
    },
    parralelViewParent :{
      flexDirection:'row',
      alignItems:'center'
    },
    parralelViewElement:{
      justifyContent:'space-evenly',
    },
    instructionsText:{
      color:'grey', 
      marginLeft:20, 
      fontSize:12, 
      fontFamily:'sans-serif', 
      textAlign:'left', 
      width:'80%'
    },
    translatedText:{
      marginLeft:20, 
      marginRight:20,
      fontSize:18, 
      textAlign:'left',
    },
    cardDsiplay:{
      flex: 1,
      backgroundColor:'#FFFF',
      width:'90%',
      margin:20,
      shadowOffset:{  width: 10,  height: 10,  },
      shadowColor: 'black',
      shadowOpacity: 1.0,
    },
    sideHeadings:{
      flexDirection:"row",
      padding:7,
      color:'#ff8c00',
      fontSize:16,
      fontFamily:'sans-serif',
    },
    showTexts:{
      marginLeft:16,
      fontSize:18
    },
    bottomIcons : {
      flexDirection:"row",
      position:'absolute',  
    },
    avatarStyle:{
      alignItems:'center',
      alignContent:'center',
      padding:60
    }

  });

  export default styles;