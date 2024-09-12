import React from 'react'
import { Facebook, Google } from '../../../assets/svgs'
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColor } from '../../../constants/appColors'
import { fontFamilies } from '../../../constants/fontFamilies'



const SocialLogin = () => {
    return (
        <SectionComponent styles={{ alignItems: 'center' }}>
            <TextComponent
                styles={{ textAlign: 'center' }}
                text='OR'
                color={appColor.gray4}
                size={16}
                font={fontFamilies.medium}
            />
            <SpaceComponent height={16} />
            <ButtonComponent type='primary' textFont={fontFamilies.regular} color={appColor.white} textColor={appColor.text} text='Login with Google' iconFlex='left' icon={<Google />} />
            <ButtonComponent type='primary' textFont={fontFamilies.regular} color={appColor.white} textColor={appColor.text} text='Login with Facebook' iconFlex='left' icon={<Facebook />} />
        </SectionComponent>

    )
}

export default SocialLogin