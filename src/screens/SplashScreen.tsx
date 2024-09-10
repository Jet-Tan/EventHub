import React from 'react';
import { ImageBackground, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { appInfos } from '../constants/appInfos';
import { SpaceComponent } from '../components';
import { appColor } from '../constants/appColors';

const SplashScreen = () => {
    return (
        <ImageBackground
            source={require('../assets/images/splash-img.png')}
            style={styles.background}
        >
            <Image
                source={require("../assets/images/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <SpaceComponent height={16} />
            <ActivityIndicator color={appColor.gray} size={22} />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: appInfos.sizes.WIDTH * 0.7,
    },
});

export default SplashScreen;
