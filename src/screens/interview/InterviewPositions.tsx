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
import { COLORS } from '../../styles/colors';
import { RootStackParamList } from '../../navigation/AppNavigator';

type InterviewPositionsNavigationProp = StackNavigationProp<RootStackParamList, 'InterviewPositions'>;

interface InterviewPositionsProps {
  navigation: InterviewPositionsNavigationProp;
}

interface PositionItem {
  id: string;
  name: string;
  companies: CompanyLogo[];
}

interface CompanyLogo {
  id: string;
  icon: any;
}

const InterviewPositions: React.FC<InterviewPositionsProps> = ({ navigation }) => {
  // 公司图标数据
  const companyLogos = {
    huawei: require('../../assets/images/company/huawei.png'),
    meituan: require('../../assets/images/company/meituan.png'),
    alibaba: require('../../assets/images/company/alibaba.png'),
    jd: require('../../assets/images/company/jd.png'),
    baidu: require('../../assets/images/company/baidu.png'),
    byte: require('../../assets/images/company/byte.png'),
    tencent: require('../../assets/images/company/tencent.png'),
  };

  // 岗位数据
  const positions: PositionItem[] = [
    {
      id: '1',
      name: '后端开发',
      companies: [
        { id: 'byte', icon: companyLogos.byte },
        { id: 'huawei', icon: companyLogos.huawei },
        { id: 'meituan', icon: companyLogos.meituan },
      ],
    },
    {
      id: '2',
      name: '前端开发',
      companies: [
        { id: 'alibaba', icon: companyLogos.alibaba },
        { id: 'huawei', icon: companyLogos.huawei },
        { id: 'meituan', icon: companyLogos.meituan },
      ],
    },
    {
      id: '3',
      name: '产品经理',
      companies: [
        { id: 'jd', icon: companyLogos.jd },
        { id: 'alibaba', icon: companyLogos.alibaba },
      ],
    },
    {
      id: '4',
      name: '测试开发',
      companies: [
        { id: 'baidu', icon: companyLogos.baidu },
        { id: 'byte', icon: companyLogos.byte },
        { id: 'huawei', icon: companyLogos.huawei },
      ],
    },
    {
      id: '5',
      name: 'NLP算法工程师',
      companies: [
        { id: 'byte', icon: companyLogos.byte },
        { id: 'meituan', icon: companyLogos.meituan },
        { id: 'huawei', icon: companyLogos.huawei },
      ],
    },
    {
      id: '6',
      name: 'Prompt开发',
      companies: [
        { id: 'meituan', icon: companyLogos.meituan },
        { id: 'alibaba', icon: companyLogos.alibaba },
        { id: 'huawei', icon: companyLogos.huawei },
      ],
    },
    {
      id: '7',
      name: '算法工程师',
      companies: [
        { id: 'huawei', icon: companyLogos.huawei },
        { id: 'byte', icon: companyLogos.byte },
        { id: 'meituan', icon: companyLogos.meituan },
      ],
    },
    {
      id: '8',
      name: 'Java开发',
      companies: [
        { id: 'byte', icon: companyLogos.byte },
        { id: 'jd', icon: companyLogos.jd },
        { id: 'baidu', icon: companyLogos.baidu },
      ],
    },
    {
      id: '9',
      name: '数据分析',
      companies: [
        { id: 'jd', icon: companyLogos.jd },
        { id: 'meituan', icon: companyLogos.meituan },
        { id: 'baidu', icon: companyLogos.baidu },
      ],
    },
    {
      id: '10',
      name: '大模型开发',
      companies: [
        { id: 'byte', icon: companyLogos.byte },
        { id: 'meituan', icon: companyLogos.meituan },
        { id: 'huawei', icon: companyLogos.huawei },
      ],
    },
    {
      id: '11',
      name: '云计算与大数据工程师',
      companies: [
        { id: 'byte', icon: companyLogos.byte },
        { id: 'alibaba', icon: companyLogos.alibaba },
        { id: 'tencent', icon: companyLogos.tencent },
      ],
    },
    {
      id: '12',
      name: '硬件与嵌入式开发',
      companies: [
        { id: 'jd', icon: companyLogos.jd },
        { id: 'baidu', icon: companyLogos.baidu },
        { id: 'byte', icon: companyLogos.byte },
      ],
    },
  ];

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handlePositionSelect = (position: string) => {
    navigation.navigate('InterviewCompanies', { position });
  };

  // 显示公司图标，最多显示3个，超过的显示...
  const renderCompanyLogos = (companies: CompanyLogo[]) => {
    return (
      <View style={styles.companyLogosContainer}>
        {companies.slice(0, 3).map((company, index) => (
          <Image key={index} source={company.icon} style={styles.companyLogo} />
        ))}
        {companies.length > 3 && (
          <Text style={styles.moreCompanies}>...</Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <SafeAreaView style={styles.safeArea}>
        {/* 头部导航 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Image 
              source={require('../../assets/images/icons/back.png')} 
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>面试岗位</Text>
          <View style={styles.placeholder} />
        </View>

        {/* 岗位列表 */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.positionsContainer}>
            {positions.map((position, index) => (
              <TouchableOpacity
                key={position.id}
                style={styles.positionCard}
                onPress={() => handlePositionSelect(position.name)}
              >
                <Text style={styles.positionName}>{position.name}</Text>
                <View style={styles.companyContainer}>
                  {renderCompanyLogos(position.companies)}
                  <TouchableOpacity style={styles.moreButton}>
                    <Text style={styles.moreButtonText}>...</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
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
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  positionsContainer: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  positionCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  positionName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  companyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyLogosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  companyLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 12,
    resizeMode: 'contain',
  },
  moreCompanies: {
    fontSize: 16,
    color: COLORS.textTertiary,
  },
  moreButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreButtonText: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
});

export default InterviewPositions; 