import React from 'react';
import { StyleSheet, ViewStyle, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../styles/colors';

interface GradientBackgroundProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  colors?: string[];
  useBackgroundImage?: boolean;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ 
  children, 
  style,
  colors = [COLORS.gradientStart, COLORS.gradientEnd],
  useBackgroundImage = true,
}) => {
  if (useBackgroundImage) {
    return (
      <ImageBackground 
        source={require('../assets/images/icons/bg.png')} 
        style={[styles.container, style]}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    );
  }

  return (
    <LinearGradient
      colors={colors}
      style={[styles.container, style]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientBackground; 