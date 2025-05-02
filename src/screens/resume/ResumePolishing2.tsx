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
            </View>
            
            {/* 修改建议卡片 */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>修改建议</Text>
              </View>
              
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>项目名称</Text>
                <View style={styles.infoValue}>
                  <Text style={styles.infoText}>AI FOR TEACH</Text>
                  <Image 
                    source={require('../../assets/images/icons/arrow_right.png')} 
                    style={styles.arrowIcon}
                  />
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
});

export default ResumePolishing2; 