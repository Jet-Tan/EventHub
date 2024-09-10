import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { globalStyle } from '../../styles/globalStyles';
import Swiper from 'react-native-swiper';
import { appInfos } from '../../constants/appInfos';
import { appColor } from '../../constants/appColors';
import { TextComponent } from '../../components';
import { fontFamilies } from '../../constants/fontFamilies';
const OnbroadingScreen = ({ navigation }: any) => {
    const [index, setIndex] = useState(0)
    return (
        <View style={[globalStyle.container]}>
            <Swiper loop={false} onIndexChanged={num => setIndex(num)} activeDotColor={appColor.white} index={index}>
                <Image source={require('../../assets/images/onboarding-1.png')} style={{ flex: 1, width: appInfos.sizes.WIDTH, height: appInfos.sizes.HEIGHT, resizeMode: "contain" }} />
                <Image source={require('../../assets/images/onboarding-2.png')} style={{ flex: 1, width: appInfos.sizes.WIDTH, height: appInfos.sizes.HEIGHT, resizeMode: "contain" }} />
                <Image source={require('../../assets/images/onboarding-3.png')} style={{ flex: 1, width: appInfos.sizes.WIDTH, height: appInfos.sizes.HEIGHT, resizeMode: "contain" }} />
            </Swiper>
            <View
                style={[
                    {
                        paddingHorizontal: 16,
                        paddingVertical: 20,
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: 'center'
                    },
                ]}
            >
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <TextComponent text="Skip" color={appColor.gray2} font={fontFamilies.medium} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')} >
                    <TextComponent text="Next" color={appColor.white} font={fontFamilies.medium} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default OnbroadingScreen;

const styles = StyleSheet.create({
    text: {
        color: appColor.white,
        fontSize: 18,
        fontWeight: '600',
    }
})