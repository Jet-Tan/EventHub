import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { appColor } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyle } from '../styles/globalStyles';

interface Props {
    text: string,
    color?: string,
    size?: number,
    flex?: number,
    font?: string,
    styles?: StyleProp<TextStyle>;
    title?: boolean
}
const TextComponent = (props: Props) => {
    const { text, size, flex, font, color, styles, title } = props;
    return (
        <Text style={[
            globalStyle.text,
            {
                color: color ?? appColor.text,
                flex: flex ?? 0,
                fontSize: size ?? title ? 24 : 16,
                fontFamily: font ?? title ? fontFamilies.bold : fontFamilies.regular,
            },
            styles
        ]}> {text}</Text >
    )
}

export default TextComponent