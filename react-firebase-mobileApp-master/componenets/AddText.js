import React from 'react';
import { View, Picker, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../cutomComponenets/CustomButton';
import content from '../commonContent/content.js';
import TextApi from '../config/textApi';
import { database, auth } from '../config/config.js';
import {Icon} from "react-native-elements"

export default class AddText extends React.Component {
    state = {
        fromLanguage: "en",
        toLanguage: "en",
        translatedText: '',
        textToTranslate: '',
        saveLoading: false,
        response: '',
        textDisplay: <Text></Text>
    }

    translate = () => {
        this.setState({ textDisplay: <ActivityIndicator size="small" color="#ff8c00" /> });
        const lang = this.state.fromLanguage + "-" + this.state.toLanguage;
        console.log(lang);
        if (this.state.textToTranslate) {
            console.log("Text to translate " + this.state.textToTranslate)
            let url = TextApi.url + "?key=" + TextApi.key + "&lang=" + lang + "&text=" + this.state.textToTranslate;
            console.log(url);
            fetch(url, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then(res => {
                    this.setState({
                        textDisplay: <View style={{ marginBottom: 20 }}>
                            <Text>{res.text[0]}</Text>
                            <View style={styles.emptyspace} />
                            <CustomButton text="Add Suggesion" styles={styles.viewbutton} callback={this.addSuggestedText} />
                        </View>
                    });
                    this.setState({ response: res.text[0] });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    addSuggestedText = () => {
        if (this.state.textToTranslate && this.state.response) {
            this.save(this.state.textToTranslate, this.state.response);
        }
        else {
            alert('Translated text or Text to Translate cannot be empty');
        }
    }

    addText = () => {
        if (this.state.textToTranslate && this.state.translatedText) {
            this.save(this.state.textToTranslate, this.state.translatedText);
        }
        else {
            alert('Translated text or Text to Translate cannot be empty');
        }
    }

    //Utilities 

    save = (before, after) => {
        this.setState({ saveLoading: true });
        database.ref('/translations/' + auth.currentUser.uid).push({
                userId: auth.currentUser.uid,
                userEmail: auth.currentUser.email,
                fromLang: this.state.fromLanguage,
                toLang: this.state.toLanguage,
                beforeTranslation: before,
                afterTranslation: after,
                createdDateLong: new Date().getTime(),
                key: Math.random().toString(36).substring(6)
        }).then(() => {
            this.setState({ saveLoading: false, textToTranslate:'', translatedText:'' })
            this.props.getAddedData();
        })
            .catch(() => this.setState({ saveLoading: false }));
        alert('Translation Added');
    }

    handleFromChange = (from) => {
        this.setState({ fromLanguage: from })
    }

    handleToChange = (to) => {
        this.setState({ toLanguage: to })
    }

    render() {
        return (
            <ScrollView style={styles.appbackground}>
                <Icon 
                        reverse
                        size={20}
                        name="accessibility"
                        type="material"
                        color="#ff8c00"
                        onPress={() => this.props.navigation.navigate('User')}
                        containerStyle={{flexDirection:"row",position:'absolute',padding:5, marginLeft:"80%", marginTop:20}}
                    />
                <View style={{ width: '100%', marginTop: 80 }}>
                    <View style={styles.parralelViewParent}>
                        <View style={{ marginLeft: 40 }}>
                            <Text style={{ color: '#ff8c00', fontSize: 20, fontWeight: "bold" }}>From </Text>
                            <Picker
                                selectedValue={this.state.fromLanguage}
                                style={{ height: 50, width: 140 }}
                                onValueChange={this.handleFromChange}>
                                <Picker.Item label="English" value="en" />
                                <Picker.Item label="Tamil" value="ta" />
                                <Picker.Item label="Spanish" value="es" />
                                <Picker.Item label="Malayalam" value="ml"/>
                                <Picker.Item label="German" value="de"/>
                                <Picker.Item label="Hindi" value="hi"/>
                            </Picker>
                        </View>
                        <View style={{ marginLeft: 40 }}>
                            <Text style={{ color: '#ff8c00', fontSize: 20, fontWeight: "bold" }}>To </Text>
                            <Picker
                                selectedValue={this.state.toLanguage}
                                style={{ height: 50, width: 140 }}
                                onValueChange={this.handleToChange}>
                                <Picker.Item label="English" value="en" />
                                <Picker.Item label="Tamil" value="ta" />
                                <Picker.Item label="Spanish" value="es" />
                                <Picker.Item label="Malayalam" value="ml"/>
                                <Picker.Item label="German" value="de"/>
                                <Picker.Item label="Hindi" value="hi"/>
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.emptyspace} />
                    <TextInput style={styles.inputtext}
                        placeholder="Text Before Translation"
                        onChangeText={(text) => this.setState({ textToTranslate: text })}
                    />
                    <View style={styles.emptyspace} />
                    <TextInput style={styles.inputtext}
                        placeholder="Add Your Own Translation"
                        onChangeText={(text) => this.setState({ translatedText: text })}
                    />
                    <View style={styles.emptyspace} />
                    <View style={{ flexDirection: "row" }}>
                        <CustomButton callback={this.translate} text="Get Translation" styles={styles.viewbutton}></CustomButton>
                        <CustomButton callback={this.addText} text="Add Text" styles={styles.viewbutton}></CustomButton>
                    </View>
                    <ActivityIndicator animating={this.state.saveLoading} size="small" color="#ff8c00"></ActivityIndicator>
                    <View style={styles.emptyspace} />
                    <View style={styles.emptyspace} />
                    <Text style={{ color: 'black', marginLeft: 20, marginTop: 40 }}>Instructions</Text>
                    <Text style={styles.instructionsText}>
                        {content.addTextContent}
                    </Text>
                    <View style={styles.emptyspace} />
                    <Text style={{ color: 'black', marginLeft: 20 }}>Example</Text>
                    <Text style={styles.instructionsText}>
                        {content.addTextExample}
                    </Text>
                    <View style={styles.emptyspace} />
                    <Text style={{ color: 'black', marginLeft: 20 }}>
                        {content.getTranslate}
                    </Text>
                    <View style={styles.emptyspace} />
                    <View style={styles.translatedText}>
                        {this.state.textDisplay}
                    </View>
                </View>
            </ScrollView>
        )
    }
}