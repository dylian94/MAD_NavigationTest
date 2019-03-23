import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Paragraph} from "react-native-paper";
import AppHeader from "../Components/AppHeader";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        margin: 16
    }
});

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppHeader appTitle="Home" />
                <Card style={styles.card}>
                    <Card.Content>
                        <Paragraph>Welcome to my shopping app, please look around and browse the different categories.</Paragraph>
                        <Paragraph>The API for this app was gracefully provided by mockable.io .</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        );
    }
}