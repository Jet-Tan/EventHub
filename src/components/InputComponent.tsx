import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'


interface Props {
    value: string;
    onChangge: (val: string) => void;
    affix?: ReactNode;
    placeholder?: string;
    suffix?: ReactNode;
    isPassword?: boolean;

}
const InputComponent = (props: Props) => {
    const { value, onChangge, affix, placeholder, suffix, isPassword } = props
    return (
        <View>

        </View>
    )
}

export default InputComponent