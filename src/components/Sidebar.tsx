import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  StatusBar,
  Platform,
  Animated,
  Easing,
} from 'react-native';
import { COLORS } from '../styles/colors';

// 类型定义
interface JobRecord {
  id: string;
  date: string; // 日期，例如 2025.3.19
  company: 'meituan' | 'tencent' | 'jd' | 'huawei' | 'alibaba' | 'baidu' | 'byte';
  position: string; // 职位名称
  time: string; // 时间，例如 09:16
}

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

// 侧边栏组件
const Sidebar: React.FC<SidebarProps> = ({ visible, onClose }) => {
  const [searchText, setSearchText] = useState('');
  const [records, setRecords] = useState<Record<string, JobRecord[]>>({});
  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isVisible, setIsVisible] = useState(false);
  
  // 模拟数据源
  const mockJobRecords: JobRecord[] = [
    { id: '1', date: '2025.3.19', company: 'byte', position: '后端开发', time: '09:16' },
    { id: '2', date: '2025.3.19', company: 'meituan', position: '算法工程师', time: '13:17' },
    { id: '3', date: '2025.3.19', company: 'tencent', position: '前端开发', time: '22:55' },
    { id: '4', date: '2025.2.23', company: 'byte', position: '后端开发', time: '09:16' },
    { id: '5', date: '2025.2.23', company: 'jd', position: '产品经理', time: '16:57' },
    { id: '6', date: '2025.2.23', company: 'tencent', position: '后端开发', time: '17:55' },
    { id: '7', date: '2025.1.7', company: 'byte', position: '测试开发', time: '14:15' },
    { id: '8', date: '2024.12.11', company: 'meituan', position: '数据分析师', time: '08:20' },
    { id: '9', date: '2024.12.11', company: 'baidu', position: '算法研究员', time: '12:56' },
    { id: '10', date: '2024.12.11', company: 'huawei', position: '网络工程师', time: '19:30' },
    { id: '11', date: '2024.12.11', company: 'meituan', position: '前端开发', time: '21:45' },
  ];

  // 获取公司图标
  const getCompanyIcon = (company: string) => {
    switch (company) {
      case 'meituan':
        return require('../assets/images/company/meituan.png');
      case 'tencent':
        return require('../assets/images/company/tencent.png');
      case 'jd':
        return require('../assets/images/company/jd.png');
      case 'huawei':
        return require('../assets/images/company/huawei.png');
      case 'alibaba':
        return require('../assets/images/company/alibaba.png');
      case 'baidu':
        return require('../assets/images/company/baidu.png');
      case 'byte':
        return require('../assets/images/company/byte.png');
      default:
        return require('../assets/images/company/byte.png');
    }
  };

  // 按照日期分组并按照时间倒序排列
  useEffect(() => {
    const filteredRecords = mockJobRecords.filter(record => 
      record.position.includes(searchText) || 
      record.company.includes(searchText)
    );
    
    // 按日期分组
    const groupedRecords: Record<string, JobRecord[]> = {};
    filteredRecords.forEach(record => {
      if (!groupedRecords[record.date]) {
        groupedRecords[record.date] = [];
      }
      groupedRecords[record.date].push(record);
    });
    
    // 按日期倒序排序
    const sortedDates = Object.keys(groupedRecords).sort((a, b) => {
      return new Date(b.replace(/\./g, '-')) > new Date(a.replace(/\./g, '-')) ? 1 : -1;
    });
    
    // 按日期重新组织数据
    const sortedRecords: Record<string, JobRecord[]> = {};
    sortedDates.forEach(date => {
      sortedRecords[date] = groupedRecords[date];
    });
    
    setRecords(sortedRecords);
  }, [searchText]);

  // 删除记录处理函数
  const handleDelete = (id: string) => {
    // 实际应用中应该调用API删除数据
    const updatedMockRecords = mockJobRecords.filter(record => record.id !== id);
    
    // 重新按日期分组
    const groupedRecords: Record<string, JobRecord[]> = {};
    updatedMockRecords.forEach(record => {
      if (!groupedRecords[record.date]) {
        groupedRecords[record.date] = [];
      }
      groupedRecords[record.date].push(record);
    });
    
    setRecords(groupedRecords);
  };

  // 初始化组件和动画值
  useEffect(() => {
    // 确保初始状态正确
    slideAnim.setValue(-SIDEBAR_WIDTH);
    fadeAnim.setValue(0);
  }, []);
  
  // 处理显示/隐藏
  useEffect(() => {
    if (visible) {
      setIsVisible(true);
      // 使用序列动画，先淡入背景
      Animated.sequence([
        // 先淡入背景
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 180,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        // 再滑入侧边栏
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic), // 使用cubic缓动函数，更自然
        })
      ]).start();
    } else {
      // 收起时使用并行动画，一起进行
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -SIDEBAR_WIDTH,
          duration: 250,
          useNativeDriver: true,
          easing: Easing.in(Easing.cubic),
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        })
      ]).start(() => {
        setIsVisible(false);
      });
    }
  }, [visible, slideAnim, fadeAnim]);

  // 不可见时不渲染组件，提高性能
  if (!visible && !isVisible) {
    return null;
  }

  return (
    <View style={[styles.container, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }]}>
      {/* 背景半透明遮罩，点击关闭侧边栏 */}
      <Animated.View 
        style={[
          styles.overlay,
          {
            opacity: fadeAnim,
            zIndex: 1
          }
        ]}
      >
        <TouchableOpacity 
          style={{ flex: 1 }}
          activeOpacity={1} 
          onPress={onClose} 
        />
      </Animated.View>
      
      <Animated.View 
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: slideAnim }],
            zIndex: 2
          }
        ]}
      >
        {/* 搜索栏 */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Image 
              source={require('../assets/images/icons/search.png')} 
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="搜索"
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#999"
              autoFocus={false}
            />
          </View>
        </View>

        {/* 记录列表 */}
        <ScrollView style={styles.recordList}>
          {Object.keys(records).map(date => (
            <View key={date}>
              <Text style={styles.dateHeader}>{date}</Text>
              {records[date].map(record => (
                <View key={record.id} style={styles.recordItem}>
                  <View style={styles.recordLeft}>
                    <Image 
                      source={getCompanyIcon(record.company)} 
                      style={styles.companyIcon} 
                    />
                    <View style={styles.recordInfo}>
                      <Text style={styles.position}>{record.position}</Text>
                      <Text style={styles.time}>{record.time}</Text>
                    </View>
                  </View>
                  <TouchableOpacity 
                    style={styles.deleteButton}
                    onPress={() => handleDelete(record.id)}
                  >
                    <Image 
                      source={require('../assets/images/icons/trash.png')} 
                      style={styles.trashIcon}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.8; // 侧边栏宽度为屏幕宽度的80%

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 1000, // 确保显示在最上层
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 30,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    position: 'absolute', // 确保绝对定位
    left: 0,
    top: 0,
    bottom: 0,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 0,
    marginBottom: 5,
    borderBottomWidth: 0,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 38,
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    tintColor: '#888',
  },
  searchInput: {
    flex: 1,
    height: 38,
    color: '#333',
    fontSize: 15,
    padding: 0,
  },
  recordList: {
    flex: 1,
    paddingBottom: 40,  // 添加底部间距
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: '#fff',
    color: '#333',
  },
  recordItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  recordLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  companyIcon: {
    width: 32,
    height: 32,
    borderRadius: 4,
    marginRight: 12,
  },
  recordInfo: {
    flex: 1,
  },
  position: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    marginBottom: 2,
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginTop: 0,
  },
  deleteButton: {
    padding: 10,
    marginRight: -5,
  },
  trashIcon: {
    width: 18,
    height: 18,
    tintColor: '#ccc',
  },
});

export default Sidebar; 