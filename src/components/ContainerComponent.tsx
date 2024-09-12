import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'iconsax-react-native'
import React, { ReactNode } from 'react'
import { ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { appColor } from '../constants/appColors'
import { globalStyle } from '../styles/globalStyles'
import RowComponent from './RowComponent'
import TextComponent from './TextComponent'
import { fontFamilies } from '../constants/fontFamilies'

interface Props {
    isImageBackground?: boolean
    isScroll?: boolean
    title?: string
    children: ReactNode;
    back?: boolean
}
const ContainerComponent = (props: Props) => {
    const { isImageBackground, isScroll, children, title, back } = props
    const navigation: any = useNavigation()
    const headerComponent = () => {
        return <View style={{ flex: 1, paddingTop: 30 }}>
            {(title || back) &&
                <RowComponent styles={{ paddingHorizontal: 16, paddingVertical: 8, minHeight: 48, minWidth: 48 }}>
                    {back &&
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 12 }}>
                            <ArrowLeft size={24} color={appColor.text} />
                        </TouchableOpacity>}
                    {title && <TextComponent text={title} font={fontFamilies.medium} size={16} flex={1} />}
                </RowComponent>
            }
            {returnContainer}
        </View >
    }
    const returnContainer = isScroll ? <ScrollView style={{ flex: 1 }}>{children}</ScrollView> : <View style={{ flex: 1 }}>{children}</View>
    return isImageBackground ? (
        <ImageBackground
            source={require('../assets/images/splash-img.png')}
            style={{ flex: 1 }}
            imageStyle={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                {headerComponent()}
            </SafeAreaView>
        </ImageBackground>

    ) : (
        <SafeAreaView style={[globalStyle.container]} >
            {headerComponent()}
        </SafeAreaView >
    )
}

export default ContainerComponent