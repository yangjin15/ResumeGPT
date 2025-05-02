import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

type ReviewSimilarNavigationProp = StackNavigationProp<RootStackParamList, 'ReviewSimilar'>;
type ReviewSimilarRouteProp = RouteProp<RootStackParamList, 'ReviewSimilar'>;

interface ReviewSimilarProps {
  navigation: ReviewSimilarNavigationProp;
  route: ReviewSimilarRouteProp;
}

const ReviewSimilar: React.FC<ReviewSimilarProps> = ({ navigation, route }) => {
  const { interviewData } = route.params;
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea}>
        {/* 头部导航 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Image 
              source={require('../../assets/images/icons/back.png')} 
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>相似问题</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.scrollView}>
          {/* 问题卡片 */}
          <View style={[styles.section, styles.firstSection]}>
            <LinearGradient
              colors={['#FFD47C', '#FFCCA4', '#FFDACB']}
              locations={[0, 0.54, 1]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              style={styles.sectionHeader}
            >
              <Image 
                source={require('../../assets/images/icons/document.png')} 
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionTitle}>题目</Text>
            </LinearGradient>
            <View style={styles.sectionContent}>
              <Text style={styles.questionText}>
                HTTP与HTTPS有什么区别?
              </Text>
            </View>
          </View>

          {/* 解答卡片 */}
          <View style={styles.section}>
            <LinearGradient
              colors={['#FFD47C', '#FFCCA4', '#FFDACB']}
              locations={[0, 0.54, 1]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              style={styles.sectionHeader}
            >
              <Image 
                source={require('../../assets/images/icons/check.png')} 
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionTitle}>解答</Text>
            </LinearGradient>
            <View style={styles.sectionContent}>
              <Text style={styles.contentText}>
                HTTP协议传输的数据都是未加密的，也就是明文的，因此使用HTTP协议传输隐私信息非常不安全。HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全。
                {'\n\n'}
                http与https的区别主要如下：
                {'\n\n'}
                1、https协议需要到ca申请证书，一般免费证书很少，需要交费。
                {'\n\n'}
                2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
                {'\n\n'}
                3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
                {'\n\n'}
                4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
              </Text>
            </View>
          </View>

          {/* 相关问题列表 */}
          <View style={styles.section}>
            <LinearGradient
              colors={['#FFD47C', '#FFCCA4', '#FFDACB']}
              locations={[0, 0.54, 1]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              style={styles.sectionHeader}
            >
              <Image 
                source={require('../../assets/images/icons/document.png')} 
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionTitle}>相关考点</Text>
            </LinearGradient>
            <View style={styles.sectionContent}>
              <TouchableOpacity style={styles.relatedQuestionItem}>
                <Text style={styles.relatedQuestionText}>
                  什么是HTTP协议的无状态？如何保持用户状态？
                </Text>
                <Image 
                  source={require('../../assets/images/icons/arrow_right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.relatedQuestionItem}>
                <Text style={styles.relatedQuestionText}>
                  HTTPS的加密原理是什么？对称加密和非对称加密在其中扮演什么角色？
                </Text>
                <Image 
                  source={require('../../assets/images/icons/arrow_right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.relatedQuestionItem}>
                <Text style={styles.relatedQuestionText}>
                  HTTP/2相比HTTP/1.1有哪些改进？
                </Text>
                <Image 
                  source={require('../../assets/images/icons/arrow_right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.relatedQuestionItem}>
                <Text style={styles.relatedQuestionText}>
                  你如何理解RESTful API设计理念？
                </Text>
                <Image 
                  source={require('../../assets/images/icons/arrow_right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
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
    backgroundColor: '#FFFFFF',
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
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 16,
    borderRadius: 24,
    overflow: 'hidden',
  },
  firstSection: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
  },
  sectionIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  sectionContent: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  questionText: {
    fontSize: 16,
    color: COLORS.textPrimary,
    lineHeight: 22,
    fontWeight: '500',
  },
  contentText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  relatedQuestionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  relatedQuestionText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    marginLeft: 10,
    tintColor: COLORS.textSecondary,
  },
});

export default ReviewSimilar; 