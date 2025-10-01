import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  Title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: scaleFontSize(24),
  },
});

export default style;
