import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, InputComponent } from '../../components'
import { globalStyle } from '../../styles/globalStyles'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    return (
        <View style={[globalStyle.container]}>
            <Text>LoginScreen</Text>
            <ButtonComponent text='LOGIN' onPress={() => console.log('login')} type='primary' />
            <View style={[globalStyle.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <InputComponent email={email} onChangge={val => setEmail(val)} />
            </View>
        </View>
    )
}

export default LoginScreen