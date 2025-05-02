import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../styles/colors';

type MockInterviewNavigationProp = StackNavigationProp<RootStackParamList, 'MockInterview'>;

interface MockInterviewProps {
  navigation: MockInterviewNavigationProp;
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isStreaming?: boolean;
}

const MockInterview: React.FC<MockInterviewProps> = ({ navigation }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [streamingText, setStreamingText] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const streamInterval = useRef<NodeJS.Timeout | null>(null);

  // 初始化欢迎消息
  const welcomeMessage = '您好，我是今天的虚拟面试官，很高兴能与您进行这次面试。请允许我先做一个简单的自我介绍，我是一款为技术岗位面试设计的AI工具，我在全面评估应聘者候选人的专业技能与适应能力。请您不必紧张，把这次交流当作是一次分享经验和展现切能力的机会。现在，请您先简单地介绍一下自己，包括您的教育背景和主要的专业方向。';
  
  useEffect(() => {
    // 流式输出初始欢迎消息
    simulateStreamingText(welcomeMessage, 1);
    
    // 组件卸载时清除定时器
    return () => {
      if (streamInterval.current) {
        clearInterval(streamInterval.current);
      }
    };
  }, []);

  const simulateStreamingText = (fullText: string, messageId: number) => {
    setIsStreaming(true);
    setStreamingText('');
    
    // 添加空的流式消息
    const newMessage: Message = {
      id: messageId,
      text: '',
      isUser: false,
      timestamp: new Date(),
      isStreaming: true
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    let index = 0;
    
    // 创建定时器逐字显示文本
    streamInterval.current = setInterval(() => {
      if (index < fullText.length) {
        setStreamingText(prevText => prevText + fullText.charAt(index));
        index++;
        
        // 更新消息中的文本
        setMessages(prevMessages => {
          const updatedMessages = [...prevMessages];
          const streamingMessage = updatedMessages.find(msg => msg.id === messageId);
          if (streamingMessage) {
            streamingMessage.text = fullText.substring(0, index);
          }
          return updatedMessages;
        });
        
        // 自动滚动到底部
        scrollViewRef.current?.scrollToEnd({ animated: true });
      } else {
        // 完成流式输出，清除定时器
        if (streamInterval.current) {
          clearInterval(streamInterval.current);
          streamInterval.current = null;
        }
        
        // 将消息标记为非流式
        setMessages(prevMessages => {
          const updatedMessages = [...prevMessages];
          const streamingMessage = updatedMessages.find(msg => msg.id === messageId);
          if (streamingMessage) {
            streamingMessage.isStreaming = false;
          }
          return updatedMessages;
        });
        
        setIsStreaming(false);
        setStreamingText('');
      }
    }, 30); // 每30毫秒输出一个字符
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '' || isStreaming) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages([...messages, newUserMessage]);
    setInputText('');

    // 模拟AI回复
    setTimeout(() => {
      const responses = [
        '很好，张三同学，了解您熟悉React.js，能否谈谈React框架的核心特性以及它为何适合构建大型应用？',
        '您提到了React的虚拟DOM和组件化设计，能否更深入地解释一下React的状态管理方案，以及您在项目中是如何处理复杂状态的？',
        '关于前端性能优化，您能否分享一些在React项目中您采取的具体措施来提升应用性能的经验？',
        '在前端开发中，如何处理跨浏览器兼容性问题？您有什么实际的解决方案？',
        '能否介绍一下您在项目中使用过的前端测试策略和工具？您如何确保代码质量？'
      ];
      
      // 随机选择一个回复
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      // 使用流式输出显示AI回复
      simulateStreamingText(randomResponse, messages.length + 2);
    }, 1000);
  };

  const handleFinishInterview = () => {
    // 如果正在流式输出，先停止
    if (streamInterval.current) {
      clearInterval(streamInterval.current);
      streamInterval.current = null;
      setIsStreaming(false);
    }
    
    // 结束面试，导航到面试回顾页面
    const interviewData = {
      messages: messages.filter(msg => !msg.isStreaming), // 过滤掉未完成的流式消息
      duration: 20, // 模拟面试时长(分钟)
      date: new Date(),
      position: '前端开发工程师',
      scores: {
        专业能力: 85,
        逻辑思考: 78,
        沟通能力: 90,
        应变能力: 82,
        技术素养: 88
      }
    };
    
    navigation.navigate('MockReview', { interviewData });
  };

  useEffect(() => {
    // 当消息更新时，滚动到底部
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

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
          <Text style={styles.headerTitle}>面试问答</Text>
          <TouchableOpacity style={styles.finishButton} onPress={handleFinishInterview}>
            <Text style={styles.finishText}>完成</Text>
          </TouchableOpacity>
        </View>

        {/* 聊天区域 */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.chatContainer}
        >
          <ScrollView
            ref={scrollViewRef}
            style={styles.messagesContainer}
            contentContainerStyle={styles.messagesContent}
          >
            {messages.map((message) => (
              <View
                key={message.id}
                style={[
                  styles.messageBubble,
                  message.isUser ? styles.userBubble : styles.botBubble,
                ]}
              >
                {!message.isUser && (
                  <Image
                    source={require('../../assets/images/icons/robot_small.png')}
                    style={styles.avatarIcon}
                  />
                )}
                <View style={[
                  styles.messageContent,
                  message.isUser ? styles.userMessageContent : styles.botMessageContent
                ]}>
                  <Text style={[
                    styles.messageText,
                    message.isUser ? styles.userMessageText : styles.botMessageText
                  ]}>
                    {message.text}
                    {message.isStreaming && <View style={styles.blinkingCursor} />}
                  </Text>
                </View>
                {message.isUser && (
                  <Image
                    source={require('../../assets/images/icons/user_small.png')}
                    style={styles.avatarIcon}
                  />
                )}
              </View>
            ))}
          </ScrollView>

          {/* 输入区域 */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="输入您的回答"
              placeholderTextColor="#999"
              value={inputText}
              onChangeText={setInputText}
              multiline
              editable={!isStreaming}
            />
            <TouchableOpacity 
              style={[styles.sendButton, isStreaming && styles.disabledSendButton]} 
              onPress={handleSendMessage}
              disabled={isStreaming}
            >
              <Image
                source={require('../../assets/images/icons/send.png')}
                style={[styles.sendIcon, isStreaming && styles.disabledSendIcon]}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

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
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
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
    textAlign: 'center',
  },
  finishButton: {
    padding: 8,
  },
  finishText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '500',
  },
  chatContainer: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messagesContent: {
    paddingBottom: 10,
  },
  messageBubble: {
    flexDirection: 'row',
    marginVertical: 5,
    maxWidth: '80%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    marginLeft: 'auto',
  },
  botBubble: {
    alignSelf: 'flex-start',
    marginRight: 'auto',
  },
  avatarIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  messageContent: {
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  userMessageContent: {
    backgroundColor: '#4080FF',
  },
  botMessageContent: {
    backgroundColor: '#ECECEC',
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#FFFFFF',
  },
  botMessageText: {
    color: '#333333',
  },
  blinkingCursor: {
    width: 2,
    height: 16,
    backgroundColor: '#333',
    marginLeft: 2,
    opacity: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    maxHeight: 100,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledSendButton: {
    backgroundColor: '#CCCCCC',
  },
  sendIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  disabledSendIcon: {
    tintColor: '#F0F0F0',
  },
});

export default MockInterview; 