import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { COLORS } from '../../styles/colors';
import { RootStackParamList } from '../../navigation/AppNavigator';

type InterviewQuestionsNavigationProp = StackNavigationProp<RootStackParamList, 'InterviewQuestions'>;
type InterviewQuestionsRouteProp = RouteProp<RootStackParamList, 'InterviewQuestions'>;

interface InterviewQuestionsProps {
  navigation: InterviewQuestionsNavigationProp;
  route: InterviewQuestionsRouteProp;
}

interface QuestionItem {
  id: string;
  title: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  date: string;
}

const InterviewQuestions: React.FC<InterviewQuestionsProps> = ({ navigation, route }) => {
  const { position, company } = route.params;
  const [searchQuery, setSearchQuery] = useState('C++');

  // 面试题目数据
  const questions: QuestionItem[] = [
    {
      id: '1',
      title: '说一说你了解的关于lambda函数的全部知识',
      category: 'C++',
      difficulty: 'medium',
      date: '2024-09-25',
    },
    {
      id: '2',
      title: 'C++11有哪些新特性？',
      category: 'C++',
      difficulty: 'hard',
      date: '2023-08-02',
    },
    {
      id: '3',
      title: '讲一下程序的内存分区/内存模型？',
      category: 'C++',
      difficulty: 'medium',
      date: '2023-07-06',
    },
    {
      id: '4',
      title: 'move了解？有什么作用？',
      category: 'C++',
      difficulty: 'easy',
      date: '2024-11-05',
    },
    {
      id: '5',
      title: '智能指针的原理、常用的智能指针及实现',
      category: 'C++',
      difficulty: 'easy',
      date: '2023-07-27',
    },
    {
      id: '6',
      title: '说一说你理解的内存对齐及原因',
      category: 'C++',
      difficulty: 'hard',
      date: '2023-08-08',
    },
    {
      id: '7',
      title: 'C++的多态是如何实现的？',
      category: 'C++',
      difficulty: 'medium',
      date: '2023-11-29',
    },
    {
      id: '8',
      title: '为什么析构函数一般写成虚函数？',
      category: 'C++',
      difficulty: 'medium',
      date: '2024-01-10',
    },
  ];

  const handleGoBack = () => {
    navigation.goBack();
  };

  // 获取难度标签的样式
  const getDifficultyStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return { backgroundColor: 'rgb(202,250,174)', color: 'rgb(0,97,11)' };
      case 'medium':
        return { backgroundColor: 'rgb(254,250,171)', color: 'rgb(141,134,0)' };
      case 'hard':
        return { backgroundColor: 'rgb(255,193,193)', color: 'rgb(146,0,0)' };
      default:
        return { backgroundColor: '#E0E0E0', color: '#1A1A1A' };
    }
  };

  // 获取难度对应的中文文本
  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '简单';
      case 'medium':
        return '中等';
      case 'hard':
        return '困难';
      default:
        return '未知';
    }
  };

  // 获取指示条颜色 - 基于题目ID
  const getIndicatorColor = (id: string) => {
    const num = parseInt(id, 10);
    return num % 2 === 1 ? 'rgb(176,190,255)' : 'rgb(71,90,221)';
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
          <Text style={styles.headerTitle}>查看题目</Text>
          <View style={styles.placeholder} />
        </View>

        {/* 搜索框 */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="搜索题目"
              placeholderTextColor="#9E9E9E"
            />
            <Image
              source={require('../../assets/images/icons/arrow_down.png')}
              style={styles.dropdownIcon}
            />
          </View>
        </View>

        {/* 题目列表头部 */}
        <View style={styles.listHeader}>
          <Text style={[styles.columnHeader, styles.titleHeader]}>题目名称</Text>
          <Text style={[styles.columnHeader, styles.categoryHeader]}>科目类型/难度</Text>
          <Text style={[styles.columnHeader, styles.dateHeader]}>考察时间</Text>
        </View>

        {/* 题目列表 */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.questionsContainer}>
            {questions.map((question) => (
              <View key={question.id} style={styles.questionItem}>
                <View 
                  style={[
                    styles.questionIndicator, 
                    { backgroundColor: getIndicatorColor(question.id) }
                  ]} 
                />
                <View style={styles.questionContent}>
                  <View style={styles.questionRow}>
                    <Text style={styles.questionTitle}>{question.title}</Text>
                    <View style={styles.questionMeta}>
                      <View style={styles.categoryContainer}>
                        <Text style={styles.questionCategory}>{question.category}</Text>
                      </View>
                      <View 
                        style={[
                          styles.difficultyTag, 
                          { backgroundColor: getDifficultyStyle(question.difficulty).backgroundColor }
                        ]}
                      >
                        <Text 
                          style={[
                            styles.difficultyText, 
                            { color: getDifficultyStyle(question.difficulty).color }
                          ]}
                        >
                          {getDifficultyText(question.difficulty)}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.dateContainer}>
                      <Text style={styles.questionDate}>{question.date}</Text>
                    </View>
                  </View>
                </View>
              </View>
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
    backgroundColor: '#FFFFFF',
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
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#2979FF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  placeholder: {
    width: 40,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000000',
    fontSize: 14,
  },
  dropdownIcon: {
    width: 14,
    height: 14,
    tintColor: '#9E9E9E',
  },
  listHeader: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F5F5F7',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  columnHeader: {
    fontSize: 14,
    fontWeight: '500',
    color: '#757575',
  },
  titleHeader: {
    flex: 2,
  },
  categoryHeader: {
    flex: 1,
    textAlign: 'center',
  },
  dateHeader: {
    flex: 1,
    textAlign: 'right',
  },
  scrollView: {
    flex: 1,
  },
  questionsContainer: {
    paddingHorizontal: 16,
  },
  questionItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  questionIndicator: {
    width: 4,
    height: '100%',
    borderRadius: 2,
    marginRight: 10,
  },
  questionContent: {
    flex: 1,
  },
  questionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionTitle: {
    fontSize: 14,
    color: '#000000',
    flex: 2,
    lineHeight: 20,
  },
  questionMeta: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryContainer: {
    backgroundColor: 'rgb(239,241,255)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  questionCategory: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '500',
  },
  difficultyTag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '500',
  },
  dateContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  questionDate: {
    fontSize: 12,
    color: '#9E9E9E',
    textAlign: 'right',
  },
});

export default InterviewQuestions; 