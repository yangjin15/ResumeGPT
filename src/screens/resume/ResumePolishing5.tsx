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

type ResumePolishing5NavigationProp = StackNavigationProp<RootStackParamList, 'ResumePolishing5'>;
type ResumePolishing5RouteProp = RouteProp<RootStackParamList, 'ResumePolishing5'>;

interface ResumePolishing5Props {
  navigation: ResumePolishing5NavigationProp;
  route: ResumePolishing5RouteProp;
}

const ResumePolishing5: React.FC<ResumePolishing5Props> = ({ navigation, route }) => {
  const { resumeData } = route.params || {};

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleFinish = () => {
    navigation.navigate('Home');
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
          <TouchableOpacity onPress={handleFinish} style={styles.doneButton}>
            <Text style={styles.doneText}>完成</Text>
          </TouchableOpacity>
        </View>

        {/* 简历对比内容 */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.contentContainer}>
            {/* 教育背景对比 */}
            <View style={styles.compareSection}>
              <Text style={styles.sectionTitle}>教育背景</Text>
              
              <View style={styles.compareBlock}>
                <View style={styles.compareBlockHeader}>
                  <View style={[styles.compareHeaderIndicator, { backgroundColor: COLORS.secondary }]} />
                  <Text style={styles.compareHeaderText}>修改前:</Text>
                </View>
                <Text style={styles.compareContent}>
                  2021.09-2025.06 XX大学 • 计算机科学与技术 • GPA 3.7/4.0{'\n'}
                  核心课程：数据库系统 | 算法设计 | 编译原理
                </Text>
              </View>
              
              <View style={styles.compareBlock}>
                <View style={styles.compareBlockHeader}>
                  <View style={[styles.compareHeaderIndicator, { backgroundColor: COLORS.primary }]} />
                  <Text style={styles.compareHeaderText}>修改后:</Text>
                </View>
                <Text style={styles.compareContent}>
                  2021.09-2025.06 XX大学 • 计算机科学与技术{'\n'}
                  平均学分绩：87.1{'\n'}
                  成绩排名：4/93（前5%）{'\n'}
                  英语水平：CET-6（602）{'\n'}
                  主修课程：数据库原理（97.6），编译原理（92），算法设计与分析（91.8）等
                </Text>
              </View>
            </View>
            
            {/* 个人技能对比 */}
            <View style={styles.compareSection}>
              <Text style={styles.sectionTitle}>个人技能</Text>
              
              <View style={styles.compareBlock}>
                <View style={styles.compareBlockHeader}>
                  <View style={[styles.compareHeaderIndicator, { backgroundColor: COLORS.secondary }]} />
                  <Text style={styles.compareHeaderText}>修改前:</Text>
                </View>
                <Text style={styles.compareContent}>
                  科研工具：LaTeX论文排版 | Zotero文献管理{'\n'}
                  AI工程：大语言模型微调 | Prompt优化策略{'\n'}
                  全栈开发：React前端架构 | Flask后端服务
                </Text>
              </View>
              
              <View style={styles.compareBlock}>
                <View style={styles.compareBlockHeader}>
                  <View style={[styles.compareHeaderIndicator, { backgroundColor: COLORS.primary }]} />
                  <Text style={styles.compareHeaderText}>修改后:</Text>
                </View>
                <Text style={styles.compareContent}>
                  掌握Latex、Google Scholar、Zotero等科研工具；{'\n'}
                  掌握大模型调用方法和Prompt工程；{'\n'}
                  掌握Web开发技能（React、js + Flask）
                </Text>
              </View>
            </View>
            
            {/* 科研经历对比 */}
            <View style={styles.compareSection}>
              <Text style={styles.sectionTitle}>科研经历</Text>
              
              <View style={styles.compareBlock}>
                <View style={styles.compareBlockHeader}>
                  <View style={[styles.compareHeaderIndicator, { backgroundColor: COLORS.secondary }]} />
                  <Text style={styles.compareHeaderText}>修改前:</Text>
                </View>
                <Text style={styles.compareContent}>
                  智能任务调度算法研究（CCF-C类会议）{'\n'}
                  设计融合进化计算与LLM的混合式调度框架{'\n'}
                  构建动态资源模型降低算法空间复杂度{'\n'}
                  实验证明较传统RL方法提升23%调度效率
                </Text>
              </View>
              
              <View style={styles.compareBlock}>
                <View style={styles.compareBlockHeader}>
                  <View style={[styles.compareHeaderIndicator, { backgroundColor: COLORS.primary }]} />
                  <Text style={styles.compareHeaderText}>修改后:</Text>
                </View>
                <Text style={styles.compareContent}>
                  智能任务调度算法研究（CCF-C类会议）{'\n'}
                  设计融合进化计算与LLM的混合式调度框架{'\n'}
                  构建动态资源模型降低算法空间复杂度{'\n'}
                  实验证明较传统RL方法提升23%调度效率
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        
        {/* 底部按钮 */}
        <View style={styles.bottomButton}>
          <Button
            title="查看对比"
            onPress={handleFinish}
            gradient={true}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  compareSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },
  compareBlock: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  compareBlockHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  compareHeaderIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  compareHeaderText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  compareContent: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textSecondary,
  },
  bottomButton: {
    padding: 16,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
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
});

export default ResumePolishing5; 