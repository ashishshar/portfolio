import React from 'react';
import { StyleSheet, Button, Image, Text } from 'react-native';


export default class LoginScreen extends React.Component {
    render() {
        return (
            <Image source={require('../assets/images/background.jpg')} style={styles.backgroundImage}>
                <Text>Login Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
    },
});
