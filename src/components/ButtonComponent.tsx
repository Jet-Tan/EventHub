import React, { ReactNode } from 'react';
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { appColor } from '../constants/appColors';
import { globalStyle } from '../styles/globalStyles';
import TextComponent from './TextComponent';
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
    iconFlex?: 'right' | 'left',
    textFont?: string
}
const ButtonComponent = (props: Props) => {
    const { textFont, icon, text, textColor, textStyles, color, type, onPress, iconFlex, styles } = props
    return type === 'primary' ? (
        <View style={{ alignItems: 'center', }}>
            <TouchableOpacity
                onPress={onPress}
                style={[globalStyle.button, globalStyle.shadow, {
                    backgroundColor: color ?? appColor.primary,
                    marginBottom: 17, width: '90%'
                }, styles]}>
                {icon && iconFlex === 'left' && icon}
                <TextComponent
                    text={text}
                    color={textColor ?? appColor.white}
                    styles={[textStyles, { marginLeft: icon ? 12 : 0, fontSize: 16, textAlign: 'center' }]}
                    flex={icon && iconFlex === 'right' ? 1 : 0}
                    font={textFont ?? fontFamilies.medium}
                />
                {icon && iconFlex === 'right' && icon}
            </TouchableOpacity>
        </View>

    ) : (
        <TouchableOpacity onPress={onPress}>
            <TextComponent
                text={text}
                color={type === 'link' ? appColor.primary : appColor.text}
            />
        </TouchableOpacity>
    )
}

export default ButtonComponent