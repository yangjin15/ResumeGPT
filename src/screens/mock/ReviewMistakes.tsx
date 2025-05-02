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

type ReviewMistakesNavigationProp = StackNavigationProp<RootStackParamList, 'ReviewMistakes'>;
type ReviewMistakesRouteProp = RouteProp<RootStackParamList, 'ReviewMistakes'>;

interface ReviewMistakesProps {
  navigation: ReviewMistakesNavigationProp;
  route: ReviewMistakesRouteProp;
}

const ReviewMistakes: React.FC<ReviewMistakesProps> = ({ navigation, route }) => {
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
          <Text style={styles.headerTitle}>错误纠正</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.scrollView}>
          {/* 问题描述 */}
          <View style={styles.section}>
            <LinearGradient
              colors={['#DEFCCA', '#D1F5E7', '#E9F9F6']}
              locations={[0, 0.54, 1]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              style={styles.sectionHeader}
            >
              <Image 
                source={require('../../assets/images/icons/document.png')} 
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionTitle}>面试题目</Text>
            </LinearGradient>
            <View style={styles.sectionContent}>
              <Text style={styles.contentText}>
                请描述一下前端项目中如何实现响应式布局？移动端和桌面端的不同适配方案有哪些？
              </Text>
            </View>
          </View>

          {/* 逻辑错误 */}
          <View style={styles.section}>
            <LinearGradient
              colors={['#DEFCCA', '#D1F5E7', '#E9F9F6']}
              locations={[0, 0.54, 1]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              style={styles.sectionHeader}
            >
              <Image 
                source={require('../../assets/images/icons/warning.png')} 
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionTitle}>回答问题</Text>
            </LinearGradient>
            <View style={styles.sectionContent}>
              <Text style={styles.contentText}>
                面试者回答了响应式布局的基本概念，提到了使用媒体查询(Media Query)和百分比布局，但忽略了许多关键点：没有提及移动优先策略，未详细说明viewport设置的重要性，对于Flexbox和Grid布局的讨论不够深入，且未提及实际项目中如何搭配CSS框架（如Bootstrap或Tailwind）实现快速响应式开发。
              </Text>
            </View>
          </View>

          {/* 代码可优化点 */}
          <View style={styles.section}>
            <LinearGradient
              colors={['#DEFCCA', '#D1F5E7', '#E9F9F6']}
              locations={[0, 0.54, 1]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              style={styles.sectionHeader}
            >
              <Image 
                source={require('../../assets/images/icons/check.png')} 
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionTitle}>改进建议</Text>
            </LinearGradient>
            <View style={styles.sectionContent}>
              <Text style={styles.contentText}>
                1. 强调移动优先(Mobile First)设计理念，先为移动设备设计简单的布局，再逐步扩展到大屏幕设备。
                {'\n\n'}
                2. 详细描述viewport的配置：meta标签设置width=device-width, initial-scale=1.0的重要性。
                {'\n\n'}
                3. 深入讨论现代CSS布局技术：Flexbox用于一维布局，Grid用于二维布局的具体应用场景和优势。
                {'\n\n'}
                4. 补充响应式图片技术：srcset属性、picture元素和art direction的使用。
                {'\n\n'}
                5. 提及CSS单位选择：em、rem、vh/vw以及如何结合使用以实现更精确的响应式布局。
              </Text>
            </View>
          </View>

          {/* 正确回答示例 */}
          <View style={styles.section}>
            <LinearGradient
              colors={['#DEFCCA', '#D1F5E7', '#E9F9F6']}
              locations={[0, 0.54, 1]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              style={styles.sectionHeader}
            >
              <Image 
                source={require('../../assets/images/icons/check.png')} 
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionTitle}>优质回答示例</Text>
            </LinearGradient>
            <View style={styles.sectionContent}>
              <Text style={styles.contentText}>
                "响应式布局是指网页能够自动适应不同设备屏幕尺寸的设计方法。我通常采用'移动优先'策略，先设计移动端界面，再逐步增强桌面端体验。
                {'\n\n'}
                实现响应式布局的核心技术包括：
                {'\n\n'}
                1. Viewport设置：设置meta标签确保移动设备正确渲染，如width=device-width, initial-scale=1.0。
                {'\n\n'}
                2. 弹性布局：使用相对单位而非固定像素，如百分比、em、rem用于字体，vh/vw用于视口相关尺寸。
                {'\n\n'}
                3. 媒体查询：根据不同屏幕尺寸应用不同CSS规则，常用断点有768px(平板)、992px(小型笔记本)和1200px(桌面)。
                {'\n\n'}
                4. Flexbox和Grid：Flexbox适合一维布局，如导航栏；Grid适合二维布局，如整体页面结构。
                {'\n\n'}
                5. 响应式图片：使用srcset属性和picture元素实现在不同设备上加载不同分辨率的图像。
                {'\n\n'}
                在实际项目中，我经常结合Bootstrap或Tailwind等框架加速开发，但理解底层原理对于处理复杂场景和性能优化至关重要。针对特殊设备，如折叠屏，我会使用CSS媒体特性查询(Media Feature Queries)和动态JavaScript检测来应对更复杂的适配需求。"
              </Text>
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
    padding: 16,
  },
  section: {
    marginBottom: 16,
    borderRadius: 24,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
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
  contentText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  codeBlock: {
    backgroundColor: '#F5F5F7',
    padding: 16,
    borderRadius: 24,
  },
  codeContent: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 12,
    color: '#333',
    lineHeight: 18,
  },
});

export default ReviewMistakes; 