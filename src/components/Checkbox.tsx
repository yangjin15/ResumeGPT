import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewStyle,
  TextStyle,
  Image,
  Platform,
} from 'react-native';
import { COLORS } from '../styles/colors';

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  label?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  checkboxStyle?: ViewStyle;
}

const Checkbox: React.FC<CheckboxProps> = ({ 
  checked, 
  onToggle, 
  label, 
  style, 
  textStyle,
  checkboxStyle,
}) => {
  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <View 
        style={[
          styles.checkbox, 
          checked && styles.checkboxChecked,
          checkboxStyle,
        ]}
      >
        {checked && (
          <View style={styles.checkmark}>
            <View style={styles.checkLine1} />
            <View style={styles.checkLine2} />
          </View>
        )}
      </View>
      
      {label && (
        <Text style={[styles.label, textStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  checkboxChecked: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
  checkmark: {
    width: 12,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkLine1: {
    position: 'absolute',
    width: 3,
    height: 6,
    backgroundColor: COLORS.white,
    transform: [{ rotate: '45deg' }],
    left: 3,
    top: 5,
  },
  checkLine2: {
    position: 'absolute',
    width: 8,
    height: 3,
    backgroundColor: COLORS.white,
    transform: [{ rotate: '-45deg' }],
    right: 2,
    top: 6,
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    color: COLORS.textSecondary,
  },
});

export default Checkbox; 