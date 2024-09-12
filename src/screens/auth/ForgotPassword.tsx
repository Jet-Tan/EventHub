import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { appColor } from '../../constants/appColors'
import { Sms } from 'iconsax-react-native'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    return (
        <ContainerComponent back>
            <SectionComponent>
                <TextComponent text='Reset Password' title />
                <TextComponent text='Please enter your email address to request a password reset' />
                <SpaceComponent height={26} />
                <InputComponent value={email} onChange={val => setEmail(val)} affix={<Sms size={20} color={appColor.gray} />} placeholder='abc@gmail.com' />
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent text='Send' type='primary' icon={appColor.white} />
            </SectionComponent>
        </ContainerComponent>
    )
}

export default ForgotPassword