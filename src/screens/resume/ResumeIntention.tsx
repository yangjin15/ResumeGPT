import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../styles/colors';
import Button from '../../components/Button';
import { Alert } from 'react-native';

type ResumeIntentionNavigationProp = StackNavigationProp<RootStackParamList, 'ResumeIntention'>;
type ResumeIntentionRouteProp = RouteProp<RootStackParamList, 'ResumeIntention'>;

interface ResumeIntentionProps {
  navigation: ResumeIntentionNavigationProp;
  route: ResumeIntentionRouteProp;
}

const ResumeIntention: React.FC<ResumeIntentionProps> = ({ navigation, route }) => {
  const { resumeData } = route.params;
  
  const [targetCompany, setTargetCompany] = useState('');
  const [targetPosition, setTargetPosition] = useState('');
  const [positionRequirements, setPositionRequirements] = useState(
    
  );

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleComplete = () => {
    // 添加提交成功的提示，然后导航到简历润色第一页
    Alert.alert('提示', '简历信息已保存', [
      {
        text: '确定',
        onPress: () => navigation.navigate('ResumePolishing1', { resumeData })
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea}>
        {/* 头部导航 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Image 
              source={require('../../assets/images/icons/back.png')} 
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>求职意向</Text>
          <View style={styles.placeholder} />
        </View>
        
        <ScrollView style={styles.scrollView}>
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>填写求职意向</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>意向公司</Text>
              <TextInput
                style={styles.input}
                value={targetCompany}
                onChangeText={setTargetCompany}
                placeholder="请输入意向公司"
                placeholderTextColor={COLORS.textTertiary}
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>意向岗位</Text>
              <TextInput
                style={styles.input}
                value={targetPosition}
                onChangeText={setTargetPosition}
                placeholder="请输入意向岗位"
                placeholderTextColor={COLORS.textTertiary}
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>岗位要求</Text>
              <TextInput
                style={[styles.input, styles.multilineInput]}
                value={positionRequirements}
                onChangeText={setPositionRequirements}
                placeholder="请输入岗位要求"
                placeholderTextColor={COLORS.textTertiary}
                multiline
                numberOfLines={10}
                textAlignVertical="top"
              />
            </View>
          </View>
        </ScrollView>
        
        {/* 底部按钮 */}
        <View style={styles.bottomButtons}>
          <Button
            title="完成"
            onPress={handleComplete}
            gradient={true}
            style={styles.completeButton}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.textPrimary,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  multilineInput: {
    height: 200,
    textAlignVertical: 'top',
  },
  bottomButtons: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  completeButton: {
    marginBottom: 0,
  },
  section: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginBottom: 16,
    marginHorizontal: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default ResumeIntention;