import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginForm from './componenets/LoginForm';
import RegisterForm from './componenets/RegisterForm';
import Root from './componenets/Root';
import MainPage from './componenets/MainPage';
import AddText from './componenets/AddText';
import User from './componenets/User'

const RootStack = createStackNavigator(
  {
    Root: Root,
    Login:LoginForm,
    Register: RegisterForm,
    AddText: AddText,
    Translations:MainPage,
    User:User
  },
  {
    initialRouteName: 'Root',
  }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}