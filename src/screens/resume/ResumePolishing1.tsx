import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../styles/colors';
import Button from '../../components/Button';

type ResumePolishing1NavigationProp = StackNavigationProp<RootStackParamList, 'ResumePolishing1'>;
type ResumePolishing1RouteProp = RouteProp<RootStackParamList, 'ResumePolishing1'>;

interface ResumePolishing1Props {
  navigation: ResumePolishing1NavigationProp;
  route: ResumePolishing1RouteProp;
}

const ResumePolishing1: React.FC<ResumePolishing1Props> = ({ navigation, route }) => {
  const { resumeData } = route.params || {};

  useEffect(() => {
    // 3秒后自动跳转到第二个页面
    const timer = setTimeout(() => {
      navigation.navigate('ResumePolishing2', { resumeData });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, resumeData]);

  const handleGoBack = () => {
    navigation.goBack();
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
          <Text style={styles.headerTitle}>ResumeGPT</Text>
          <View style={styles.placeholder} />
        </View>

        {/* 主体内容 */}
        <View style={styles.contentContainer}>
          <Text style={styles.mainTitle}>ResumeGPT</Text>
          <Text style={styles.subtitle}>你的专属面试助手</Text>
          
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/icons/file.png')} 
              style={styles.documentIcon}
              resizeMode="contain"
            />
          </View>
          
          <Text style={styles.statusText}>简历润色中......</Text>
        </View>
        
        {/* 底部按钮 */}
        <View style={styles.bottomButtons}>
          <Button
            title="查看简历"
            onPress={() => navigation.navigate('ResumePolishing2', { resumeData })}
            gradient={true}
            style={styles.button}
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 60,
  },
  iconContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  documentIcon: {
    width: 100,
    height: 100,
    tintColor: COLORS.primary,
  },
  statusText: {
    fontSize: 18,
    color: COLORS.textPrimary,
    marginBottom: 20,
  },
  bottomButtons: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
  },
  button: {
    marginBottom: 0,
  },
});

export default ResumePolishing1; 