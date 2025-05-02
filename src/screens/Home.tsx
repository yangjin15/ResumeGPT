import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Logo from '../components/Logo';
import Button from '../components/Button';
import GradientBackground from '../components/GradientBackground';
import Sidebar from '../components/Sidebar';
import { COLORS } from '../styles/colors';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // 更新 handleResumeOptimization 函数
  const handleResumeOptimization = () => {
    navigation.navigate('ResumeImport');
  };

  const handleMockInterview = () => {
    // 导航到模拟面试页面
    navigation.navigate('MockInterview');
  };

  const handleInterviewQuestions = () => {
    // 导航到面试题库岗位选择页面
    navigation.navigate('InterviewPositions');
  };

  const toggleSidebar = () => {
    setSidebarVisible(true);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <GradientBackground useBackgroundImage={true}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        
        {/* 顶部导航栏 */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
            <Image
              source={require('../assets/images/icons/menu.png')}
              style={styles.menuIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={require('../assets/images/icons/user.png')}
              style={styles.profileIcon}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        
        {/* Logo区域 */}
        <View style={styles.logoContainer}>
          <Logo size="medium" />
        </View>
        
        {/* 功能按钮区域 */}
        <View style={styles.functionContainer}>
          <Button
            title="简历优化"
            onPress={handleResumeOptimization}
            gradient={true}
            style={styles.mainButton}
          />
          
          <View style={styles.secondaryButtonsContainer}>
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={handleMockInterview}
            >
              <Text style={styles.secondaryButtonText}>模拟面试</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={handleInterviewQuestions}
            >
              <Text style={styles.secondaryButtonText}>面试题库</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* 侧边栏组件 */}
      <Sidebar 
        visible={sidebarVisible} 
        onClose={closeSidebar} 
      />
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    marginBottom: 10,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    width: 26,
    height: 26,
  },
  profileButton: {
    padding: 10,
  },
  profileIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  functionContainer: {
    flex: 1,
    paddingBottom: 0,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  mainButton: {
    marginBottom: 30,
    height: 55,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  secondaryButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  secondaryButton: {
    backgroundColor: 'rgb(218, 224, 254)',
    borderRadius: 15,
    paddingVertical: 18,
    paddingHorizontal: 10,
    flex: 0.48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  secondaryButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default Home;