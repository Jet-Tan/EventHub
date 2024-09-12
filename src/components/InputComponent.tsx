import React, { ReactNode, useState } from 'react';
import { KeyboardType, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { appColor } from '../constants/appColors';
interface Props {
    value: string;
    onChange: (val: string) => void;
    affix?: ReactNode;
    placeholder?: string;
    suffix?: ReactNode;
    isPassword?: boolean;
    allowClear?: boolean;
    type?: KeyboardType;
}
const InputComponent = (props: Props) => {
    const { value, onChange, affix, placeholder, suffix, isPassword, type, allowClear } = props;
    const [isShowPass, setIsShowPass] = useState(isPassword ?? false)
    return (
        <View style={styles.inputContainer}>
            {affix ?? affix}
            <TextInput
                style={styles.input}
                value={value}
                placeholder={placeholder ?? ''}
                onChangeText={val => onChange(val)}
                secureTextEntry={isShowPass}
                keyboardType={type ?? 'default'}
            />
            {suffix ?? suffix}
            <TouchableOpacity onPress={isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')}>
                {isPassword ?
                    (
                        <FontAwesome name={isShowPass ? 'eye-slash' : 'eye'} size={22} color={appColor.gray} />
                    )
                    : (
                        value.length > 0 && allowClear && (
                            <AntDesign name="close" size={22} color={appColor.text} />
                        )
                    )}
            </TouchableOpacity>
        </View>
    )
}

export default InputComponent;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: appColor.gray3,
        width: '100%',
        minHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: appColor.white,
        marginBottom: 19,
    },

    input: {
        margin: 0,
        padding: 0,
        flex: 1,
        paddingHorizontal: 14,
    }
})