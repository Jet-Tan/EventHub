import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent } from '../../components'
import { globalStyle } from '../../styles/globalStyles'

const LoginScreen = () => {
    return (
        <View style={[globalStyle.container]}>
            <Text>LoginScreen</Text>
            {/* <Button title="Login" onPress={async () => await AsyncStorage.setItem('assetToken', 'fafafafa')} /> */}
            <ButtonComponent text='LOGIN' onPress={() => console.log('login')} type='' />
        </View>
    )
}

export default LoginScreen