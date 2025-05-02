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
  Dimensions,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../styles/colors';
import RadarChart from '../../components/RadarChart';
import LinearGradient from 'react-native-linear-gradient';

type MockReviewNavigationProp = StackNavigationProp<RootStackParamList, 'MockReview'>;
type MockReviewRouteProp = RouteProp<RootStackParamList, 'MockReview'>;

interface MockReviewProps {
  navigation: MockReviewNavigationProp;
  route: MockReviewRouteProp;
}

const MockReview: React.FC<MockReviewProps> = ({ navigation, route }) => {
  const { interviewData } = route.params;
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  const navigateToOverall = () => {
    navigation.navigate('ReviewOverall', { interviewData });
  };

  const navigateToMistakes = () => {
    navigation.navigate('ReviewMistakes', { interviewData });
  };

  const navigateToSuggestions = () => {
    navigation.navigate('ReviewSuggestions', { interviewData });
  };

  const navigateToSimilar = () => {
    navigation.navigate('ReviewSimilar', { interviewData });
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
          <Text style={styles.headerTitle}>面试回顾</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* 雷达图区域 */}
          <View style={styles.radarSection}>
            <RadarChart 
              data={interviewData.scores} 
              size={width * 0.98} 
              fillColor="rgb(218,195,243)" 
              strokeColor="rgb(105,121,248)"
            />
            <Text style={styles.chartTitle}>项目能力分析雷达图</Text>
          </View>

          {/* 四个回顾板块 - 每行两个 */}
          <View style={styles.categoriesContainer}>
            <View style={styles.categoryRow}>
              {/* 整体情况 */}
              <TouchableOpacity 
                style={styles.categoryCard} 
                onPress={navigateToOverall}
              >
                <LinearGradient
                  colors={['#FFB4C4', '#F8F0FF', '#FBF3FE']}
                  locations={[0, 0.45, 0.96]}
                  style={styles.cardGradient}
                >
                  <Text style={styles.categoryTitle}>整体情况</Text>
                  <Text style={styles.categoryDesc}>
                    技能和经验:熟悉计算机科学教育背景，创造React.js与Flask开发...
                  </Text>
                  <View style={styles.moreContainer}>
                    <Text style={styles.moreText}>更多</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>

              {/* 错误纠正 */}
              <TouchableOpacity 
                style={styles.categoryCard} 
                onPress={navigateToMistakes}
              >
                <LinearGradient
                  colors={['#E0FDC5', '#CFF5E6', '#F2FAFC']}
                  locations={[0, 0.49, 1]}
                  style={styles.cardGradient}
                >
                  <Text style={styles.categoryTitle}>错误纠正</Text>
                  <Text style={styles.categoryDesc}>
                    逻辑错误不完全:在找到一组解后，虽然通过left += 1和right -=1尝试避免重...
                  </Text>
                  <View style={styles.moreContainer}>
                    <Text style={styles.moreText}>更多</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.categoryRow}>
              {/* 提升建议 */}
              <TouchableOpacity 
                style={styles.categoryCard} 
                onPress={navigateToSuggestions}
              >
                <LinearGradient
                  colors={['#BBFAF2', '#C8ECFC', '#DFEAFF']}
                  locations={[0, 0.54, 1]}
                  style={styles.cardGradient}
                >
                  <Text style={styles.categoryTitle}>提升建议</Text>
                  <Text style={styles.categoryDesc}>
                    问题理解与解题思路能够准确把握基本问题，如"寻找数组中的三个数之和"...
                  </Text>
                  <View style={styles.moreContainer}>
                    <Text style={styles.moreText}>更多</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>

              {/* 相似问题 */}
              <TouchableOpacity 
                style={styles.categoryCard} 
                onPress={navigateToSimilar}
              >
                <LinearGradient
                  colors={['#FFCD71', '#FFC390', '#FFF2F1']}
                  locations={[0, 0.56, 1]}
                  style={styles.cardGradient}
                >
                  <Text style={styles.categoryTitle}>相似问题</Text>
                  <Text style={styles.categoryDesc}>
                    HTTP与HTTPS有什么区别? HTTP协议传输的数据都是未加密的,就是明...
                  </Text>
                  <View style={styles.moreContainer}>
                    <Text style={styles.moreText}>更多</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const { width } = Dimensions.get('window');

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
  },
  scrollContent: {
    paddingBottom: 40,
  },
  radarSection: {
    backgroundColor: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 0,
    alignItems: 'center',
    marginBottom: 5,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginTop: -10,
  },
  categoriesContainer: {
    padding: 15,
    paddingBottom: 25,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryCard: {
    width: '47.5%',
    borderRadius: 19,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
    height: 135,
  },
  cardGradient: {
    padding: 12,
    borderRadius: 19,
    height: '100%',
    justifyContent: 'space-between',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  categoryDesc: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 16,
    maxHeight: 64,
  },
  moreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  moreText: {
    fontSize: 12,
    color: COLORS.primary,
  },
});

export default MockReview; 