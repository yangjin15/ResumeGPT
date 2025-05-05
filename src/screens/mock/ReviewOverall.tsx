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
import LinearGradient from 'react-native-linear-gradient';

type ReviewOverallNavigationProp = StackNavigationProp<RootStackParamList, 'ReviewOverall'>;
type ReviewOverallRouteProp = RouteProp<RootStackParamList, 'ReviewOverall'>;

interface ReviewOverallProps {
  navigation: ReviewOverallNavigationProp;
  route: ReviewOverallRouteProp;
}

const ReviewOverall: React.FC<ReviewOverallProps> = ({ navigation, route }) => {
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
          <Text style={styles.headerTitle}>整体情况</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* 个人信息卡片 */}
          <View style={styles.infoCardContainer}>
            <LinearGradient
              colors={['#F5B0BA', '#FFDDE1']}
              locations={[0, 1]}
              style={styles.infoCard}
            >
              <View style={styles.userInfoHeader}>
                <Text style={styles.userName}>张三</Text>
                <Text style={styles.jobTitle}>求职意向：前端开发工程师</Text>
                <Image 
                  source={require('../../assets/images/avatar.png')} 
                  style={styles.avatar}
                />
              </View>
            </LinearGradient>
          </View>
          
          {/* 能力板块 - 按图二重新排列 */}
          <View style={styles.skillCardsContainer}>
            {/* 技能和经验 + 沟通能力 */}
            <View style={styles.skillCardRow}>
              <View style={styles.skillCard}>
                <LinearGradient
                  colors={['#FFD6DE', '#FFF0F2']}
                  locations={[0, 1]}
                  style={styles.skillCardGradient}
                >
                  <Text style={styles.skillCardTitle}>技能和经验</Text>
                  <Text style={styles.skillCardContent}>
                    张三具有计算机科学教育背景，熟悉React.js与Python开发，展现了现代前端技术栈(如Vite,TypeScript)的初步应用能力。
                  </Text>
                </LinearGradient>
              </View>
              
              <View style={[styles.skillCard, styles.skillCardRight]}>
                <LinearGradient
                  colors={['#FFD6DE', '#FFF0F2']}
                  locations={[0, 1]}
                  style={styles.skillCardGradient}
                >
                  <Text style={styles.skillCardTitle}>沟通能力</Text>
                  <Text style={styles.skillCardContent}>
                    在面试中，张三能够清晰表达自己的教育背景、专业技能和项目经验，但在技术细节阐述上略显生疏，其沟通表达能力良好，但在技术深度沟通上需提升自信。
                  </Text>
                </LinearGradient>
              </View>
            </View>
            
            {/* 职业素养 + 适应性和灵活性 */}
            <View style={styles.skillCardRowSecond}>
              <View style={styles.skillCard}>
                <LinearGradient
                  colors={['#FFD6DE', '#FFF0F2']}
                  locations={[0, 1]}
                  style={styles.skillCardGradient}
                >
                  <Text style={styles.skillCardTitle}>职业素养</Text>
                  <Text style={styles.skillCardContent}>
                    张三在面试中态度积极，对待问题诚恳且努力回答，体现了良好的学习愿景和职业态度，但需在准备上更加充分，以展现更深厚的专业知识基础。
                  </Text>
                </LinearGradient>
              </View>
              
              <View style={[styles.skillCard, styles.skillCardRight]}>
                <LinearGradient
                  colors={['#FFD6DE', '#FFF0F2']}
                  locations={[0, 1]}
                  style={styles.skillCardGradient}
                >
                  <Text style={styles.skillCardTitle}>适应性和灵活性</Text>
                  <Text style={styles.skillCardContent}>
                    通过参与"AI FOR TEACH"项目，张三展现出对新技术快速学习和应用的能力，以及寻找解决方案的灵活性，表明具有较强的适应性和问题解决能力。
                  </Text>
                </LinearGradient>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const { height, width } = Dimensions.get('window');

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
    paddingBottom: 30,
    flexGrow: 1,
  },
  infoCardContainer: {
    overflow: 'hidden',
    marginBottom: 15,
  },
  infoCard: {
    padding: 16,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  userInfoHeader: {
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  jobTitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  avatar: {
    position: 'absolute',
    right: 16,
    top: 10,
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.8)',
  },
  skillCardsContainer: {
    padding: 16,
  },
  skillCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  skillCardRowSecond: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 1,
  },
  skillCard: {
    width: '48%',
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    height: 220, // 增加卡片高度
  },
  skillCardRight: {
    marginTop: 20, // 右侧卡片向下偏移
  },
  skillCardGradient: {
    padding: 16,
    height: '100%',
    justifyContent: 'flex-start',
  },
  skillCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  skillCardContent: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
    flexShrink: 1,
  },
});

export default ReviewOverall; 