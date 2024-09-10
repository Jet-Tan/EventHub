import {StyleSheet} from 'react-native';
import {appColor} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.white,
  },

  text: {
    fontFamily: fontFamilies.regular,
    fontSize: 14,
    color: appColor.text,
  },
  button: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 56,
    flexDirection: 'row',
  },
});
