import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyle } from '../styles/globalStyles'

interface Props {
    justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined,
    styles?: StyleProp<ViewStyle>
    children: ReactNode
    onPress?: () => void
}
const RowComponent = (props: Props) => {
    const { justify, styles, children, onPress } = props
    const localStyle = [
        globalStyle.row, { justifyContent: justify }, styles
    ]
    return onPress ? (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={localStyle}>
            {children}
        </TouchableOpacity>
    ) : (
        <View style={localStyle}>
            {children}
        </View>
    )
}

export default RowComponent