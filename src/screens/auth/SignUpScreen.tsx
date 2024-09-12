import { Lock, Sms } from 'iconsax-react-native'
import React, { useState } from 'react'
import { ButtonComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import ContainerComponent from '../../components/ContainerComponent'
import { appColor } from '../../constants/appColors'
import SocialLogin from './components/SocialLogin'

const initValue = {
    usename: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpScreen = ({ navigation }: any) => {

    const [values, setValues] = useState(initValue);

    const handleChangeValue = (key: string, value: string) => {
        const data: any = { ...values };

        data[`${key}`] = value;
        setValues(data);
    }
    return (
        // <View style={[globalStyle.container, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>

        // </View>
        <ContainerComponent isImageBackground back>
            <SectionComponent>
                <TextComponent text='Sign up' size={24} />
                <SpaceComponent height={21} />
                <InputComponent
                    value={values.usename} onChange={val => handleChangeValue('usename', val)}
                    placeholder='Fullname'
                    allowClear
                    affix={<Sms size={22} color={appColor.gray} />}
                />
                <InputComponent
                    value={values.email} onChange={val => handleChangeValue('email', val)}
                    placeholder='Email'
                    // isPassword
                    allowClear
                    affix={<Sms size={22} color={appColor.gray} />}
                />
                <InputComponent
                    value={values.password}
                    onChange={val => handleChangeValue('password', val)}
                    placeholder='Password'
                    isPassword
                    allowClear
                    affix={<Lock size={22} color={appColor.gray} />}
                />
                <InputComponent
                    value={values.confirmPassword}
                    onChange={val => handleChangeValue('confirmPassword', val)}
                    placeholder='Confirm password'
                    isPassword
                    allowClear
                    affix={<Lock size={22} color={appColor.gray} />}
                />
            </SectionComponent>
            <SpaceComponent height={16} />
            <SectionComponent styles={{ alignItems: 'center' }}>
                <ButtonComponent text='SIGN UP' type='primary' />
            </SectionComponent>
            <SocialLogin />
            <SectionComponent>
                <RowComponent justify='center'>
                    <TextComponent text="Don't  have an account? " />
                    <ButtonComponent type='link' text='Signin' onPress={() => navigation.navigate('LoginScreen')} />
                </RowComponent>
            </SectionComponent>
        </ContainerComponent>
    )
}

export default SignUpScreen