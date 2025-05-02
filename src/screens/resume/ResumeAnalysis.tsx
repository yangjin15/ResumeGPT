import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../styles/colors';
import Button from '../../components/Button';

type ResumeAnalysisNavigationProp = StackNavigationProp<RootStackParamList, 'ResumeAnalysis'>;
type ResumeAnalysisRouteProp = RouteProp<RootStackParamList, 'ResumeAnalysis'>;

interface ResumeAnalysisProps {
  navigation: ResumeAnalysisNavigationProp;
  route: ResumeAnalysisRouteProp;
}

const ResumeAnalysis: React.FC<ResumeAnalysisProps> = ({ navigation, route }) => {
  const { resumeData = {
    basicInfo: {
      name: '张三',
      phone: '12345678900',
      position: '前端开发',
      skills: 'React.js,Flask',
    },
    education: {
      school: 'XX大学',
      major: '计算机科学与技术',
      graduationYear: '2021级',
      honors: [],
    },
    experience: [
      {
        company: '某科技公司',
        position: '前端开发实习生',
        duration: '2020.06 - 2020.09',
        description: '参与公司产品的前端开发工作'
      }
    ],
    projects: [
      {
        name: '个人博客系统',
        duration: '2020.10 - 2020.12',
        description: '使用React和Node.js开发的个人博客系统'
      }
    ],
    honors: [
      '校级优秀学生',
      '算法竞赛三等奖'
    ]
  } } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate('ResumeIntention', { resumeData });
  };

  const handleComplete = () => {
    navigation.navigate('ResumeIntention', { resumeData });
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
          <Text style={styles.headerTitle}>简历解析</Text>
          <TouchableOpacity onPress={handleComplete}>
            <Text style={styles.completeText}>下一步</Text>
          </TouchableOpacity>
        </View>
        
        {/* 简历内容 */}
        <ScrollView style={styles.scrollView}>
          {/* 基本信息 */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>基本信息</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>姓名</Text>
              <TouchableOpacity style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>{resumeData.basicInfo.name}</Text>
                <Image 
                  source={require('../../assets/images/icons/arrow_right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
            
            <View style={styles.separator} />
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>电话</Text>
              <TouchableOpacity style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>{resumeData.basicInfo.phone}</Text>
                <Image 
                  source={require('../../assets/images/icons/arrow_right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
            
            <View style={styles.separator} />
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>岗位</Text>
              <TouchableOpacity style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>{resumeData.basicInfo.position}</Text>
                <Image 
                  source={require('../../assets/images/icons/arrow_right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
            
            <View style={styles.separator} />
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>技能</Text>
              <TouchableOpacity style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>{resumeData.basicInfo.skills}</Text>
                <Image 
                  source={require('../../assets/images/icons/arrow_right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          
          {/* 教育经历 */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>教育经历</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>学校</Text>
              <TouchableOpacity style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>{resumeData.education.school}</Text>
                <Image 
                  source={require('../../assets/images/icons/arrow_right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
            
            <View style={styles.separator} />
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>专业</Text>
              <TouchableOpacity style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>{resumeData.education.major}</Text>
                <Image 
                  source={require('../../assets/images/icons/arrow_right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
            
            <View style={styles.separator} />
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>毕业年份</Text>
              <TouchableOpacity style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>{resumeData.education.graduationYear}</Text>
                <Image 
                  source={require('../../assets/images/icons/arrow_right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* 实习经历 */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>实习经历</Text>
            </View>
            
            {resumeData.experience && resumeData.experience.length > 0 ? (
              resumeData.experience.map((exp, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <View style={styles.separator} />}
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>公司</Text>
                    <TouchableOpacity style={styles.infoValueContainer}>
                      <Text style={styles.infoValue}>{exp.company}</Text>
                      <Image 
                        source={require('../../assets/images/icons/arrow_right.png')} 
                        style={styles.arrowIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  
                  <View style={styles.separator} />
                  
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>职位</Text>
                    <TouchableOpacity style={styles.infoValueContainer}>
                      <Text style={styles.infoValue}>{exp.position}</Text>
                      <Image 
                        source={require('../../assets/images/icons/arrow_right.png')} 
                        style={styles.arrowIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  
                  <View style={styles.separator} />
                  
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>时间</Text>
                    <TouchableOpacity style={styles.infoValueContainer}>
                      <Text style={styles.infoValue}>{exp.duration}</Text>
                      <Image 
                        source={require('../../assets/images/icons/arrow_right.png')} 
                        style={styles.arrowIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </React.Fragment>
              ))
            ) : (
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>添加实习经历</Text>
                <TouchableOpacity style={styles.infoValueContainer}>
                  <Text style={styles.infoValue}>点击添加</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* 项目经历 */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>项目经历</Text>
            </View>
            
            {resumeData.projects && resumeData.projects.length > 0 ? (
              resumeData.projects.map((project, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <View style={styles.separator} />}
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>项目名称</Text>
                    <TouchableOpacity style={styles.infoValueContainer}>
                      <Text style={styles.infoValue}>{project.name}</Text>
                      <Image 
                        source={require('../../assets/images/icons/arrow_right.png')} 
                        style={styles.arrowIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  
                  <View style={styles.separator} />
                  
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>时间</Text>
                    <TouchableOpacity style={styles.infoValueContainer}>
                      <Text style={styles.infoValue}>{project.duration}</Text>
                      <Image 
                        source={require('../../assets/images/icons/arrow_right.png')} 
                        style={styles.arrowIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </React.Fragment>
              ))
            ) : (
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>添加项目经历</Text>
                <TouchableOpacity style={styles.infoValueContainer}>
                  <Text style={styles.infoValue}>点击添加</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* 荣誉奖项 */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>荣誉奖项</Text>
            </View>
            
            {resumeData.honors && resumeData.honors.length > 0 ? (
              resumeData.honors.map((honor, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <View style={styles.separator} />}
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>奖项 {index + 1}</Text>
                    <TouchableOpacity style={styles.infoValueContainer}>
                      <Text style={styles.infoValue}>{honor}</Text>
                      <Image 
                        source={require('../../assets/images/icons/arrow_right.png')} 
                        style={styles.arrowIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </React.Fragment>
              ))
            ) : (
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>荣誉奖项</Text>
                <TouchableOpacity style={styles.infoValueContainer}>
                  <Text style={styles.infoValue}>点击添加</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
        
        {/* 底部按钮 */}
        <View style={styles.bottomButtons}>
          <Button
            title="下一步"
            onPress={handleNext}
            gradient={true}
            gradientColors={['#6979F8', '#A5AFFB']}
            style={styles.nextButton}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.backgroundLight,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
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
    tintColor: COLORS.textPrimary,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  completeText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
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
  sectionHeader: {
    padding: 16,
    backgroundColor: COLORS.primaryLight,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  infoLabel: {
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  infoValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginRight: 8,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: COLORS.textSecondary,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginLeft: 16,
  },
  bottomButtons: {
    padding: 16,
    backgroundColor: COLORS.white,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
  },
  nextButton: {
    backgroundColor: COLORS.primary,
  },
});

export default ResumeAnalysis;