import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent';
import { globalStyle } from '../styles/globalStyles';
import { appColor } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';


interface Props {
    icon?: ReactNode,
    text: string,
    type?: 'primary' | 'text' | 'link',
    color?: string,
    styles?: StyleProp<ViewStyle>,
    textColor?: string,
    textStyles?: StyleProp<TextStyle>,
    onPress?: () => void;
    iconFlex?: 'right' | 'left'
}
const ButtonComponent = (props: Props) => {
    const { icon, text, textColor, textStyles, color, type, onPress, iconFlex, styles } = props
    return type === 'primary' ? (

        <TouchableOpacity
            onPress={onPress}
            style={[globalStyle.button, {
                backgroundColor: color ?? appColor.primary
            }, styles]}>
            {icon && icon}
            <TextComponent
                text={text}
                color={textColor ?? appColor.white}
                styles={[textStyles, { marginLeft: icon && iconFlex === 'left' ? 12 : 0 }]}
                flex={icon && iconFlex === 'right' ? 1 : 0}
            />
            {icon && iconFlex === 'right' && icon}
        </TouchableOpacity>
    ) : (
        <TouchableOpacity>
            <TextComponent
                text={text}
                color={type === 'link' ? appColor.primary : appColor.tex}
            />
        </TouchableOpacity>
    )
}

export default ButtonComponent