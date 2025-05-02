import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../styles/colors';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showTagline?: boolean;
  style?: any;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  showTagline = true,
  style
}) => {
  // 根据size参数决定logo的尺寸
  const logoSize = {
    small: 80,
    medium: 100,
    large: 120
  }[size];

  return (
    <View style={[styles.container, style]}>
      <Image 
        source={require('../assets/images/icons/logo.png')} 
        style={{
          width: logoSize,
          height: logoSize,
          marginBottom: 16
        }}
        resizeMode="contain"
      />
      
      <Text style={styles.logoText}>ResumeGPT</Text>
      {showTagline && (
        <Text style={styles.tagline}>你的专属面试助手</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
});

export default Logo; 