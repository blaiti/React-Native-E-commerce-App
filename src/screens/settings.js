import React from 'react'
import {  StyleSheet, View, Text } from 'react-native'

// import theme
import * as theme from '../constants/theme'

const Settings = () => {
    return(
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    )
}

const currentTheme = theme.colors.light

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: currentTheme.background
    }
})

export default Settings