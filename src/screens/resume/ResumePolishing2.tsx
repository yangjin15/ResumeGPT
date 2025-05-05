import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../styles/colors';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';

type ResumePolishing2NavigationProp = StackNavigationProp<RootStackParamList, 'ResumePolishing2'>;
type ResumePolishing2RouteProp = RouteProp<RootStackParamList, 'ResumePolishing2'>;

interface ResumePolishing2Props {
  navigation: ResumePolishing2NavigationProp;
  route: ResumePolishing2RouteProp;
}

const ResumePolishing2: React.FC<ResumePolishing2Props> = ({ navigation, route }) => {
  const { resumeData } = route.params || {};

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate('ResumePolishing3', { resumeData });
  };

  const renderSkillBar = (skillName: string, percentage: number) => {
    return (
      <View style={styles.skillBarContainer}>
        <View style={styles.skillBarHeader}>
          <Text style={styles.skillBarName}>{skillName}</Text>
          <Text style={styles.skillBarPercentage}>{percentage}%</Text>
        </View>
        <View style={styles.skillBarBg}>
          <View style={[styles.skillBarFill, { width: `${percentage}%` }]} />
        </View>
      </View>
    );
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
          <Text style={styles.headerTitle}>简历优化</Text>
          <TouchableOpacity onPress={handleNext} style={styles.doneButton}>
            <Text style={styles.doneText}>完成</Text>
          </TouchableOpacity>
        </View>

        {/* 主体内容 */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.contentContainer}>
            {/* 基本信息卡片 */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>基本信息</Text>
              </View>
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>姓名</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>张三</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>求职方向</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>前端开发工程师</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>联系方式</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>13800138000</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>电子邮箱</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>zhangsan@example.com</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
            </View>
            
            {/* 教育背景卡片 */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>教育背景</Text>
              </View>
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>学校名称</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>XX大学</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>专业</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>计算机科学与技术</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>学历</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>本科</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>时间段</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>2018.09 - 2022.06</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
            </View>
            
            {/* 项目经历卡片 */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>项目经历</Text>
              </View>
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>项目名称</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>在线教育平台</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>使用技术</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>React,Flash</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>项目描述</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>这是一个融入AIGC的智慧教育平...</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>项目职责</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>负责前端页面开发与维护</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
            </View>

            {/* 技能评分卡片 */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>技能评分</Text>
              </View>
              
              <View style={styles.skillsContainer}>
                {renderSkillBar("HTML/CSS", 85)}
                {renderSkillBar("JavaScript", 75)}
                {renderSkillBar("React", 70)}
                {renderSkillBar("TypeScript", 60)}
                {renderSkillBar("Node.js", 50)}
              </View>
            </View>
            
            {/* 修改建议卡片 */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>修改建议</Text>
              </View>
              
              <View style={styles.suggestionsContainer}>
                <View style={styles.suggestionItem}>
                  <LinearGradient
                    colors={['#FFCBD5', '#FFF0F2']}
                    locations={[0, 1]}
                    style={styles.suggestionGradient}
                  >
                    <Text style={styles.suggestionTitle}>项目命名更新</Text>
                    <Text style={styles.suggestionDesc}>
                      将项目名称"在线教育平台"更新为更具特色的名称"AI FOR TEACH"，突显项目的AI特性和创新点。
                    </Text>
                  </LinearGradient>
                </View>
                
                <View style={styles.suggestionItem}>
                  <LinearGradient
                    colors={['#FFCBD5', '#FFF0F2']}
                    locations={[0, 1]}
                    style={styles.suggestionGradient}
                  >
                    <Text style={styles.suggestionTitle}>技术栈更正</Text>
                    <Text style={styles.suggestionDesc}>
                      应将"Flash"改为更现代的技术如"Vue.js"或"React Native"，因Flash已被淘汰，影响简历专业性。
                    </Text>
                  </LinearGradient>
                </View>
                
                <View style={styles.suggestionItem}>
                  <LinearGradient
                    colors={['#FFCBD5', '#FFF0F2']}
                    locations={[0, 1]}
                    style={styles.suggestionGradient}
                  >
                    <Text style={styles.suggestionTitle}>项目描述完善</Text>
                    <Text style={styles.suggestionDesc}>
                      项目描述过于简略，建议详细说明项目目标、解决的问题、实现的功能以及你的贡献，突出技术亮点。
                    </Text>
                  </LinearGradient>
                </View>
                
                <View style={styles.suggestionItem}>
                  <LinearGradient
                    colors={['#FFCBD5', '#FFF0F2']}
                    locations={[0, 1]}
                    style={styles.suggestionGradient}
                  >
                    <Text style={styles.suggestionTitle}>量化成果</Text>
                    <Text style={styles.suggestionDesc}>
                      在项目描述中加入量化的成果，如"提升用户体验导致注册率提高30%"或"优化代码结构使页面加载速度提升40%"等。
                    </Text>
                  </LinearGradient>
                </View>
              </View>
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
    backgroundColor: COLORS.backgroundLight,
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
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.primary,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  doneButton: {
    padding: 8,
  },
  doneText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    padding: 16,
    backgroundColor: COLORS.primaryLight,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  infoLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  infoValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    marginRight: 8,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: COLORS.textTertiary,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: 16,
  },
  skillsContainer: {
    padding: 16,
  },
  skillBarContainer: {
    marginBottom: 12,
  },
  skillBarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  skillBarName: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  skillBarPercentage: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  skillBarBg: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
  },
  skillBarFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 3,
  },
  suggestionsContainer: {
    padding: 16,
  },
  suggestionItem: {
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
  },
  suggestionGradient: {
    padding: 16,
  },
  suggestionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  suggestionDesc: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
});

export default ResumePolishing2; 