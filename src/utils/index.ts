import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const DESIGN_BASE_SCREEN = {
  width: 375,
  height: 812,
};

export const scale = (size: number): number => {
  return (width / DESIGN_BASE_SCREEN.width) * size;
};
