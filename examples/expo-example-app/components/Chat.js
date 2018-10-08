import React from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TextInput, Button, StyleSheet } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import withScaledSheetSwitch from './behaviors/withScaledSheetSwitch';

const inputBoxHeight = 45;

const scaledSheet = ScaledSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    inputBox: {
        alignSelf: 'stretch',
        height: `${inputBoxHeight}@ms`,
        padding: '6@ms',
        flexDirection: 'row',
    },
    textInput: {
        paddingHorizontal: '10@s',
        flex: 1,
        borderRadius: '25@ms',
        backgroundColor: 'white',
        borderWidth: 0.25,
        borderColor: '#545454'
    },
    chatBox: {
        maxWidth: '270@s',
        margin: '5@s',
        borderRadius: '8@ms',
        padding: '10@ms'
    },
    chatText: {
        fontSize: '15@s'
    }
});

const regularSheet = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    inputBox: {
        alignSelf: 'stretch',
        height: inputBoxHeight,
        padding:6,
        flexDirection: 'row',
    },
    textInput: {
        paddingHorizontal: 10,
        flex: 1,
        borderRadius: 25,
        backgroundColor: 'white',
        borderWidth: 0.25,
        borderColor: '#545454'
    },
    chatBox: {
        maxWidth: 270,
        margin: 5,
        borderRadius: 8,
        padding: 10
    },
    chatText: {
        fontSize: 15
    }
});

const data = [
    { text: 'Hey', me: 1},
    { text: 'what you doin?', me: 1},
    { text: 'Eating lunch right now 🍜. What about you?', me: 0},
    { text: 'nothing...', me: 1},
    { text: 'Wanna do something tonight? my girlfriend is working and I\'m bored.', me: 1},
    { text: 'Ummmm, I\'m only available after 9pm, sounds good?', me: 0},
    { text: 'Yeah, I\'ll watch some Netflix before 📺', me: 1},
    { text: 'ohhhh what are you watching??', me: 0},
    { text: 'Stranger Things, season 2!', me: 1},
    { text: 'Niceeee! 😍😍😍', me: 0},
    { text: 'I just saw the last episode yesterday', me: 0},
    { text: 'MIND = BLOWN', me: 0},
    { text: 'LOL no spoilers!!! I\'m only at episode 3', me: 1},
    { text: 'yeah yeah no worries!', me: 0},
    { text: 'so see ya later!', me: 0},
    { text: 'See ya!', me: 1},
    { text: '👋', me: 1},
];

const Chat2 = ({ scale }) => {
    const styles = scale ? scaledSheet : regularSheet;
    // alert(JSON.stringify(styles));
    return (
        // <KeyboardAvoidingView style={styles.container}
        //     behavior="padding" keyboardVerticalOffset={inputBoxHeight + 40}>
        <View style={styles.container}>
            <View style={{ flex: 1, height: '100%', backgroundColor: '#DDD' }}>
                <ScrollView>
                    {data.map((entry, i) => <View key={i} style={[styles.chatBox, {
                        alignSelf: entry.me ? 'flex-end' : 'flex-start',
                        backgroundColor: entry.me ? '#B6F6B3' : 'white'
                    }]}>
                        <Text style={[styles.chatText, { alignSelf: entry.me ? 'flex-end' : 'flex-start' }]}>{entry.text}</Text>
                    </View>)}
                </ScrollView>
            </View>
            <View style={styles.inputBox}>
                <TextInput style={styles.textInput} disabled={true} placeholder={'Type something here...'} />
                <Button title={'Send'} onPress={() => null} />
            </View>
            </View>
        // </KeyboardAvoidingView>
    );
};

const Chat = ({ scale }) => {
    const styles = scale ? scaledSheet : regularSheet;
    return <KeyboardAvoidingView style={styles.container}>
        <View style={{flex: 1, height: '100%', backgroundColor: '#DDD'}}>
            <ScrollView>
                {data.map((entry, i) => <View key={i} style={[styles.chatBox, {
                    alignSelf: entry.me ? 'flex-end' : 'flex-start',
                    backgroundColor: entry.me ? '#B6F6B3' : 'white'
                }]}>
                    <Text style={[styles.chatText, {alignSelf: entry.me ? 'flex-end' : 'flex-start'}]}>{entry.text}</Text>
                </View>)}
            </ScrollView>
        </View>
        <View style={styles.inputBox}>
            <TextInput style={styles.textInput} disabled={true} placeholder={'Type something here...'}/>
            <Button title={'Send'} onPress={() => null}/>
        </View>
    </KeyboardAvoidingView>
};

// const wrapped = () => {
//     const styles = global.sharedState.scale ? scaledSheet : regularSheet;
//     return <KeyboardAvoidingView style={styles.container}> 
//         {withScaledSheetSwitch(Chat2)}
//     </KeyboardAvoidingView>
// };

export default withScaledSheetSwitch(Chat2);
// export default wrapped;