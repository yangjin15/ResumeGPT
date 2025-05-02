import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator
} from 'react-native';
import { COLORS } from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
  disabled?: boolean;
  gradient?: boolean;
  gradientColors?: string[];  // 添加这个属性
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'primary',
  size = 'medium',
  style, 
  textStyle,
  loading = false,
  disabled = false,
  gradient = false,
  gradientColors = ['#6979F8', '#A5AFFB'],  // 提供默认值

}) => {
  const sizeStyles = {
    small: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      fontSize: 14,
    },
    medium: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      fontSize: 16,
    },
    large: {
      paddingVertical: 14,
      paddingHorizontal: 32,
      fontSize: 18,
    },
  }[size];

  const variantStyles = {
    primary: {
      backgroundColor: COLORS.primary,
      textColor: COLORS.white,
    },
    secondary: {
      backgroundColor: COLORS.primaryLight,
      textColor: COLORS.primary,
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: COLORS.primary,
      borderWidth: 1,
      textColor: COLORS.primary,
    },
  }[variant];

  const buttonContent = (
    <>
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variantStyles.textColor} 
        />
      ) : (
        <Text 
          style={[
            styles.buttonText, 
            { fontSize: sizeStyles.fontSize, color: variantStyles.textColor },
            textStyle
          ]}
        >
          {title}
        </Text>
      )}
    </>
  );

  const buttonStyles = [
    styles.button,
    {
      paddingVertical: sizeStyles.paddingVertical,
      paddingHorizontal: sizeStyles.paddingHorizontal,
      backgroundColor: variantStyles.backgroundColor,
      borderColor: variantStyles.borderColor,
      borderWidth: variantStyles.borderWidth,
      opacity: disabled ? 0.7 : 1,
    },
    style,
  ];

  if (gradient && variant === 'primary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        style={{ 
          borderRadius: 25,
          shadowColor: 'transparent',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 0,
          backgroundColor: 'transparent',
        }}
      >
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[buttonStyles, { backgroundColor: 'transparent' }]}
        >
          {buttonContent}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={buttonStyles}
    >
      {buttonContent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
  },
  buttonText: {
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default Button;