import React, { useRef, useState } from 'react';
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
  Alert,
  ActivityIndicator,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../styles/colors';
import Button from '../../components/Button';

type ResumePolishing4NavigationProp = StackNavigationProp<RootStackParamList, 'ResumePolishing4'>;
type ResumePolishing4RouteProp = RouteProp<RootStackParamList, 'ResumePolishing4'>;

interface ResumePolishing4Props {
  navigation: ResumePolishing4NavigationProp;
  route: ResumePolishing4RouteProp;
}

const ResumePolishing4: React.FC<ResumePolishing4Props> = ({ navigation, route }) => {
  const { resumeData } = route.params || {};
  const [isExporting, setIsExporting] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCompare = () => {
    navigation.navigate('ResumePolishing5', { resumeData });
  };

  const handleExport = async () => {
    // 模拟导出过程
    setIsExporting(true);
    
    // 简单延迟模拟导出处理时间
    setTimeout(() => {
      setIsExporting(false);
      Alert.alert(
        '导出成功', 
        '简历已成功导出，您可以在"我的简历"中查看',
        [
          { text: '确定', style: 'default' }
        ]
      );
    }, 1500);
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
          <Text style={styles.headerTitle}>预览</Text>
          <TouchableOpacity style={styles.doneButton} onPress={handleExport}>
            <Text style={styles.doneText}>导出</Text>
          </TouchableOpacity>
        </View>

        {/* 导出加载指示器 */}
        {isExporting && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.primary} />
            <Text style={styles.loadingText}>正在导出...</Text>
          </View>
        )}

        {/* 简历预览内容 */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.resumePreview}>
            {/* 个人信息头部 */}
            <View style={styles.personalInfoHeader}>
              <View style={styles.personalInfo}>
                <Text style={styles.name}>张三</Text>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactText}>📞 12345678901</Text>
                  <Text style={styles.contactText}>📧 zhangsan@mail.ccnu.edu.cn</Text>
                </View>
              </View>
              <Image 
                source={require('../../assets/images/icons/user.png')} 
                style={styles.avatar}
              />
            </View>
            
            {/* 教育信息 */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionHeaderIndicator} />
                <Text style={styles.sectionTitle}>教育背景</Text>
              </View>
              
              <View style={styles.educationInfo}>
                <Text style={styles.educationDate}>2021.09-2025.06</Text>
                <Text style={styles.universityName}>XX大学 • 计算机科学与技术</Text>
                <View style={styles.educationDetails}>
                  <Text style={styles.educationDetail}>平均学分绩：87.1</Text>
                  <Text style={styles.educationDetail}>成绩排名：4/93（前5%）</Text>
                  <Text style={styles.educationDetail}>英语水平：CET-6（602）</Text>
                  <Text style={styles.educationDetail}>主修课程：数据库原理（97.6），编译原理（92），算法设计与分析（91.8）等</Text>
                </View>
              </View>
            </View>
            
            {/* 个人技能 */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionHeaderIndicator} />
                <Text style={styles.sectionTitle}>个人技能</Text>
              </View>
              
              <View style={styles.educationInfo}>
                <Text style={styles.skillDetail}>掌握Latex、Google Scholar、Zotero等科研工具；</Text>
                <Text style={styles.skillDetail}>掌握大模型调用方法和Prompt工程；</Text>
                <Text style={styles.skillDetail}>掌握Web开发技能（React、js + Flask）</Text>
              </View>
            </View>
            
            {/* 科研经历 */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionHeaderIndicator} />
                <Text style={styles.sectionTitle}>科研经历</Text>
              </View>
              
              <View style={styles.researchInfo}>
                <Text style={styles.researchTitle}>智能任务调度算法研究（CCF-C类会议）</Text>
                <Text style={styles.researchDetail}>设计融合进化计算与LLM的混合式调度框架</Text>
                <Text style={styles.researchDetail}>构建动态资源模型降低算法空间复杂度</Text>
                <Text style={styles.researchDetail}>实验证明较传统RL方法提升23%调度效率</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        
        {/* 底部按钮区域 */}
        <View style={styles.bottomActions}>
          <View style={styles.exportInfoContainer}>
            <Image 
              source={require('../../assets/images/icons/warning.png')} 
              style={styles.infoIcon}
            />
            <Text style={styles.exportInfoText}>导出选项: PDF, 图片</Text>
          </View>
          <View style={styles.bottomButton}>
            <Button
              title="查看对比"
              onPress={handleCompare}
              gradient={true}
            />
          </View>
        </View>
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
  resumePreview: {
    backgroundColor: COLORS.white,
    margin: 16,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  personalInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
    marginBottom: 16,
  },
  personalInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  contactInfo: {
    flexDirection: 'column',
  },
  contactText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  avatar: {
    width: 60,
    height: 80,
    borderRadius: 4,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionHeaderIndicator: {
    width: 4,
    height: 16,
    backgroundColor: COLORS.primary,
    marginRight: 8,
    borderRadius: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  educationInfo: {
    marginLeft: 12,
  },
  educationDate: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  universityName: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  educationDetails: {
    marginTop: 4,
  },
  educationDetail: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  skillDetail: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  researchInfo: {
    marginLeft: 12,
  },
  researchTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  researchDetail: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  bottomActions: {
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  exportInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  infoIcon: {
    width: 16,
    height: 16,
    tintColor: COLORS.textTertiary,
    marginRight: 8,
  },
  exportInfoText: {
    fontSize: 12,
    color: COLORS.textTertiary,
  },
  bottomButton: {
    padding: 16,
    paddingTop: 8,
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
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 999,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
});

export default ResumePolishing4; 