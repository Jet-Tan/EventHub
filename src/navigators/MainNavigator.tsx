import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabNavigator from './TabNavigator';
const MainNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Main" component={TabNavigator} />
        </Tab.Navigator>
    )

}
export default MainNavigator