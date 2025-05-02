import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  SafeAreaView, 
  Platform,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import { COLORS } from '../styles/colors';
import GradientBackground from '../components/GradientBackground';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handlePhoneLogin = () => {
    if (agreeTerms) {
      navigation.navigate('Home');
    } else {
      // 可以添加弹窗提示用户需要同意条款
      Alert.alert('提示', '请先阅读并同意《服务条款》和《隐私协议》');
    }
  };

  const handleThirdPartyLogin = (provider: string) => {
    // 实际应用中这里应该调用对应第三方登录API
    console.log(`使用${provider}登录`);
  };

  return (
    <GradientBackground useBackgroundImage={true}>
      <SafeAreaView style={styles.container}>
        <StatusBar 
          barStyle="dark-content" 
          backgroundColor="transparent"
          translucent
        />
        
        <View style={styles.logoContainer}>
          <Logo size="large" />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="手机号一键登录" 
            onPress={handlePhoneLogin} 
            gradient={true}
            style={styles.phoneLoginButton}
          />
          
          <View style={styles.thirdPartyContainer}>
            <TouchableOpacity 
              style={styles.thirdPartyButton} 
              onPress={() => handleThirdPartyLogin('微信')}
            >
              <View style={styles.thirdPartyIconContainer}>
                <Image 
                  source={require('../assets/images/icons/wechat.png')}
                  style={styles.thirdPartyIconImage}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.thirdPartyButton}
              onPress={() => handleThirdPartyLogin('Apple')}
            >
              <View style={styles.thirdPartyIconContainer}>
                <Image 
                  source={require('../assets/images/icons/apple.png')}
                  style={styles.thirdPartyIconImage}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.thirdPartyButton}
              onPress={() => handleThirdPartyLogin('更多')}
            >
              <View style={styles.thirdPartyIconContainer}>
                <Image 
                  source={require('../assets/images/icons/more.png')}
                  style={styles.thirdPartyIconImage}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={styles.termsContainer}>
            <Checkbox 
              checked={agreeTerms} 
              onToggle={() => setAgreeTerms(!agreeTerms)} 
            />
            <Text style={styles.termsText}>
              我已阅读并同意 
              <Text style={styles.termsLink}>《服务条款》</Text> 和 
              <Text style={styles.termsLink}>《隐私协议》</Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  logoContainer: {
    flex: 1,
    marginTop: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 30,
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  phoneLoginButton: {
    width: 280,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  thirdPartyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  thirdPartyButton: {
    marginHorizontal: 20,
  },
  thirdPartyIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdPartyIconImage: {
    width: 40,
    height: 40,
    tintColor: 'black',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  termsText: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '500',
  },
  termsLink: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export default Login; 