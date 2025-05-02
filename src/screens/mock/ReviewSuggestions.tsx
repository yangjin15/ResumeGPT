import React, { useState } from 'react';
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

type ReviewSuggestionsNavigationProp = StackNavigationProp<RootStackParamList, 'ReviewSuggestions'>;
type ReviewSuggestionsRouteProp = RouteProp<RootStackParamList, 'ReviewSuggestions'>;

interface ReviewSuggestionsProps {
  navigation: ReviewSuggestionsNavigationProp;
  route: ReviewSuggestionsRouteProp;
}

const ReviewSuggestions: React.FC<ReviewSuggestionsProps> = ({ navigation, route }) => {
  const { interviewData } = route.params;
  const [selectedCategory, setSelectedCategory] = useState<string>('编码能力');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const categories = ['编码能力', '算法基础', '系统设计', '沟通表达'];

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
          <Text style={styles.headerTitle}>提升建议</Text>
          <View style={styles.placeholder} />
        </View>

        {/* 下拉选择器 */}
        <View style={styles.dropdownContainer}>
          <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
            <Text style={styles.dropdownText}>{selectedCategory}</Text>
            <Image 
              source={require('../../assets/images/icons/arrow_down.png')}
              style={[
                styles.dropdownIcon, 
                dropdownVisible && styles.dropdownIconRotate
              ]}
            />
          </TouchableOpacity>

          {dropdownVisible && (
            <View style={styles.dropdownMenu}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.dropdownItem,
                    selectedCategory === category && styles.dropdownItemSelected
                  ]}
                  onPress={() => handleCategorySelect(category)}
                >
                  <Text 
                    style={[
                      styles.dropdownItemText,
                      selectedCategory === category && styles.dropdownItemTextSelected
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <ScrollView style={styles.scrollView}>
          {selectedCategory === '编码能力' && (
            <View style={styles.contentSection}>
              <View style={styles.suggestionItem}>
                <LinearGradient
                  colors={['#B0FFFB', '#AEE2FF', '#A7D5FF', '#E6E6E6']}
                  locations={[0, 0.51, 0.84, 0.99]}
                  style={styles.suggestionHeader}
                >
                  <Text style={styles.suggestionNumber}>01</Text>
                  <Text style={styles.suggestionTitle}>技术基础</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')}
                    style={styles.arrowIcon}
                  />
                </LinearGradient>
                <View style={styles.suggestionContent}>
                  <Text style={styles.contentText}>
                    加强前端基础知识，特别是JavaScript的深入理解。面试中展现出对闭包、作用域、原型链等核心概念理解不深入。建议系统学习JavaScript高级特性，掌握ES6+新特性的使用场景，如Promise、async/await、解构赋值等。同时深化对DOM操作和事件机制的理解。
                  </Text>
                </View>
              </View>
              
              <View style={styles.suggestionItem}>
                <LinearGradient
                  colors={['#B0FFFB', '#AEE2FF', '#A7D5FF', '#E6E6E6']}
                  locations={[0, 0.51, 0.84, 0.99]}
                  style={styles.suggestionHeader}
                >
                  <Text style={styles.suggestionNumber}>02</Text>
                  <Text style={styles.suggestionTitle}>前端框架</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')}
                    style={styles.arrowIcon}
                  />
                </LinearGradient>
                <View style={styles.suggestionContent}>
                  <Text style={styles.contentText}>
                    深入学习React的核心概念和最佳实践。虽然提及了基本的React组件和状态管理，但对虚拟DOM工作原理、生命周期、Hooks使用、性能优化等方面的讨论不够深入。建议通过实际项目积累，掌握React组件设计模式、状态管理解决方案（如Redux、Context API）以及React性能优化技巧。
                  </Text>
                </View>
              </View>
              
              <View style={styles.suggestionItem}>
                <LinearGradient
                  colors={['#B0FFFB', '#AEE2FF', '#A7D5FF', '#E6E6E6']}
                  locations={[0, 0.51, 0.84, 0.99]}
                  style={styles.suggestionHeader}
                >
                  <Text style={styles.suggestionNumber}>03</Text>
                  <Text style={styles.suggestionTitle}>工程化与构建</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')}
                    style={styles.arrowIcon}
                  />
                </LinearGradient>
                <View style={styles.suggestionContent}>
                  <Text style={styles.contentText}>
                    了解现代前端工程化体系。在讨论项目经验时，对于Webpack、Babel、ESLint等工具的配置和使用缺乏深入讨论。建议学习前端构建工具链的工作原理、模块化方案、代码分割、懒加载等技术，并了解CI/CD流程在前端项目中的应用。尝试从零搭建项目脚手架，理解各个环节的配置和优化方法。
                  </Text>
                </View>
              </View>
              
              <View style={styles.suggestionItem}>
                <LinearGradient
                  colors={['#B0FFFB', '#AEE2FF', '#A7D5FF', '#E6E6E6']}
                  locations={[0, 0.51, 0.84, 0.99]}
                  style={styles.suggestionHeader}
                >
                  <Text style={styles.suggestionNumber}>04</Text>
                  <Text style={styles.suggestionTitle}>性能优化</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')}
                    style={styles.arrowIcon}
                  />
                </LinearGradient>
                <View style={styles.suggestionContent}>
                  <Text style={styles.contentText}>
                    掌握前端性能优化的系统方法。面试中对于性能优化的讨论局限于常见的图片压缩和代码压缩，缺乏全面性。建议学习浏览器渲染原理，掌握关键渲染路径优化、资源加载优化、JavaScript执行优化、缓存策略等多方面的技术。熟悉性能监测工具如Lighthouse、Performance API的使用，并能够针对性能瓶颈提出有效的优化方案。
                  </Text>
                </View>
              </View>
            </View>
          )}

          {selectedCategory !== '编码能力' && (
            <View style={styles.contentSection}>
              <Text style={styles.emptyStateText}>
                该分类内容正在完善中...
              </Text>
            </View>
          )}
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
  dropdownContainer: {
    padding: 16,
    position: 'relative',
    zIndex: 10,
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
  dropdownText: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  dropdownIcon: {
    width: 16,
    height: 16,
    tintColor: COLORS.textSecondary,
  },
  dropdownIconRotate: {
    transform: [{ rotate: '180deg' }],
  },
  dropdownMenu: {
    position: 'absolute',
    top: 68,
    left: 16,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    zIndex: 10,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  dropdownItemSelected: {
    backgroundColor: '#F0F0F0',
  },
  dropdownItemText: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  dropdownItemTextSelected: {
    fontWeight: '500',
    color: COLORS.primary,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentSection: {
    paddingTop: 0,
  },
  suggestionItem: {
    marginBottom: 16,
    borderRadius: 24,
    overflow: 'hidden',
  },
  suggestionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 0,
  },
  suggestionNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginRight: 10,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    flex: 1,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: COLORS.textSecondary,
  },
  suggestionContent: {
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
  emptyStateText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default ReviewSuggestions; 