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
import { COLORS } from '../../styles/colors';
import { RootStackParamList } from '../../navigation/AppNavigator';

type InterviewCompaniesNavigationProp = StackNavigationProp<RootStackParamList, 'InterviewCompanies'>;
type InterviewCompaniesRouteProp = RouteProp<RootStackParamList, 'InterviewCompanies'>;

interface InterviewCompaniesProps {
  navigation: InterviewCompaniesNavigationProp;
  route: InterviewCompaniesRouteProp;
}

interface CompanyItem {
  id: string;
  name: string;
  logo: any;
  description: string;
}

const InterviewCompanies: React.FC<InterviewCompaniesProps> = ({ navigation, route }) => {
  const { position } = route.params;

  // 公司数据
  const companies: CompanyItem[] = [
    {
      id: 'byte',
      name: '字节跳动',
      logo: require('../../assets/images/company/byte.png'),
      description: '字节跳动面试经验',
    },
    {
      id: 'huawei',
      name: '华为公司',
      logo: require('../../assets/images/company/huawei.png'),
      description: '华为公司面试经验',
    },
    {
      id: 'alibaba',
      name: '阿里巴巴',
      logo: require('../../assets/images/company/alibaba.png'),
      description: '阿里巴巴面试经验',
    },
    {
      id: 'jd',
      name: '京东',
      logo: require('../../assets/images/company/jd.png'),
      description: '京东公司面试经验',
    },
    {
      id: 'tencent',
      name: 'Tencent',
      logo: require('../../assets/images/company/tencent.png'),
      description: '腾讯公司面试经验',
    },
    {
      id: 'baidu',
      name: '百度',
      logo: require('../../assets/images/company/baidu.png'),
      description: '百度公司面试经验',
    },
    {
      id: 'meituan',
      name: '美团',
      logo: require('../../assets/images/company/meituan.png'),
      description: '美团公司面试经验',
    },
  ];

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCompanySelect = (company: string) => {
    navigation.navigate('InterviewQuestions', { 
      position,
      company,
    });
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
          <Text style={styles.headerTitle}>{position}</Text>
          <View style={styles.placeholder} />
        </View>

        {/* 公司列表 */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.companiesContainer}>
            {companies.map((company) => (
              <TouchableOpacity
                key={company.id}
                style={styles.companyCard}
                onPress={() => handleCompanySelect(company.name)}
              >
                <View style={styles.companyLogoContainer}>
                  <Image source={company.logo} style={styles.companyLogo} resizeMode="contain" />
                </View>
                <Text style={styles.companyName}>{company.description}</Text>
                <TouchableOpacity style={styles.viewButton}>
                  <Text style={styles.viewButtonText}>查看题目</Text>
                </TouchableOpacity>
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
  companiesContainer: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  companyCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  companyLogoContainer: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  companyLogo: {
    width: 48,
    height: 48,
  },
  companyName: {
    fontSize: 14,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 12,
  },
  viewButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  viewButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default InterviewCompanies; 