import { Lock, Sms } from 'iconsax-react-native'
import React, { useState } from 'react'
import { Image, Switch } from 'react-native'
import { ButtonComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import ContainerComponent from '../../components/ContainerComponent'
import { appColor } from '../../constants/appColors'
import SocialLogin from './components/SocialLogin'

const LoginScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(true)
    return (
        // <View style={[globalStyle.container, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>

        // </View>
        <ContainerComponent isImageBackground isScroll>
            <SectionComponent
                styles={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 75,
                }}
            >
                <Image
                    source={require('../../assets/images/text-logo.png')}
                    style={{
                        width: 162,
                        height: 114,
                        marginBottom: 30,
                    }}
                />
            </SectionComponent>
            <SectionComponent >
                <TextComponent text='Sign in' title size={24} />
                <SpaceComponent height={21} />
                <InputComponent
                    value={email} onChange={val => setEmail(val)}
                    placeholder='Email'
                    // isPassword
                    allowClear
                    affix={<Sms size={22} color={appColor.gray} />}
                />
                <InputComponent
                    value={password}
                    onChange={val => setPassword(val)}
                    placeholder='Password'
                    isPassword
                    allowClear
                    affix={<Lock size={22} color={appColor.gray} />}
                />

                <RowComponent justify='space-between'>
                    <RowComponent onPress={() => setIsRemember(!isRemember)}>
                        <Switch
                            trackColor={{ true: appColor.primary }}
                            thumbColor={appColor.white}
                            value={isRemember} onChange={() => setIsRemember(!isRemember)} />
                        <TextComponent text='Remember me' />
                    </RowComponent>
                    <ButtonComponent text='Forgot Password' onPress={() => navigation.navigate('ForgotPassword')} type='text' />
                </RowComponent>
            </SectionComponent>
            <SpaceComponent height={16} />
            <SectionComponent styles={{ alignItems: 'center' }}>
                <ButtonComponent text='SIGN IN' type='primary' />
            </SectionComponent>
            <SocialLogin />
            <SectionComponent>
                <RowComponent justify='center'>
                    <TextComponent text="Don't  have an account? " />
                    <ButtonComponent type='link' text='Sign up' onPress={() => navigation.navigate('SignUpScreen')} />
                </RowComponent>
            </SectionComponent>
        </ContainerComponent>
    )
}

export default LoginScreen