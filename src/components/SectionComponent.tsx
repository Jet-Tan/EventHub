import React, { ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyle } from '../styles/globalStyles'

interface Props {
    children: ReactNode
    styles?: StyleProp<ViewStyle>
}
const SectionComponent = (props: Props) => {
    const { children, styles } = props
    return (
        <View style={[globalStyle.section, {}, styles]}>
            {children}
        </View>
    )
}

export default SectionComponent