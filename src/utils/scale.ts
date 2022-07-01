import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

/**
 * Guideline sizes are based on the designs for iPhone X screen mobile device
 * iPhone X Resolution: 375 x 812 dp.
 */

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export {scale, verticalScale, moderateScale, moderateVerticalScale};
