import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Platform,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../styles/colors';
import Button from '../../components/Button';
import { launchImageLibrary } from 'react-native-image-picker';

type ResumeImportNavigationProp = StackNavigationProp<RootStackParamList, 'ResumeImport'>;

interface ResumeImportProps {
  navigation: ResumeImportNavigationProp;
}

const ResumeImport: React.FC<ResumeImportProps> = ({ navigation }) => {
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    uri: string;
    type: string;
  } | null>(null);

  const handleFileSelect = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'mixed',
        includeBase64: false,
        selectionLimit: 1,
      });
      
      if (result.didCancel) {
        return;
      }
      
      if (result.errorCode) {
        Alert.alert('错误', `选择文件时出现错误: ${result.errorMessage}`);
        return;
      }
      
      if (result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        const fileType = asset.type || 'application/octet-stream';
        const fileName = asset.fileName || '未知文件';
        
        setSelectedFile({
          name: fileName,
          uri: asset.uri || '',
          type: fileType,
        });
      }
    } catch (err) {
      Alert.alert('错误', '选择文件时出现错误');
      console.error(err);
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile) {
      Alert.alert('提示', '请先选择一个文件');
      return;
    }

    // 模拟解析数据
    const mockResumeData = {
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
      experience: [],
      projects: [],
    };

    navigation.navigate('ResumeAnalysis', {
      resumeData: mockResumeData,
      resumeFile: selectedFile,
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <SafeAreaView style={styles.safeArea}>
        {/* 头部导航 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Image 
              source={require('../../assets/images/icons/back.png')} 
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>简历导入</Text>
          <View style={styles.placeholder} />
        </View>
        
        {/* 文件选择区域 */}
        <View style={styles.fileSelectContainer}>
          <TouchableOpacity 
            style={styles.fileSelectBox}
            onPress={handleFileSelect}
          >
            <Image 
              source={require('../../assets/images/icons/folder.png')} 
              style={styles.folderIcon}
            />
            <Text style={styles.selectText}>选择文件</Text>
            <Text style={styles.supportText}>
              支持扩展: .pdf .jpg .png
            </Text>
          </TouchableOpacity>
          
          {selectedFile && (
            <View style={styles.selectedFileContainer}>
              <Image 
                source={require('../../assets/images/icons/file.png')} 
                style={styles.fileIcon}
              />
              <Text style={styles.fileName} numberOfLines={1}>
                {selectedFile.name}
              </Text>
              <TouchableOpacity onPress={() => setSelectedFile(null)}>
                <Image 
                  source={require('../../assets/images/icons/close.png')} 
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        
        {/* 底部按钮 */}
        <View style={styles.bottomButtons}>
          <Button
            title="简历解析"
            onPress={handleAnalyze}
            gradient={true}
            gradientColors={['#6979F8', '#A5AFFB']}  // 添加明确的渐变色值
            style={styles.analyzeButton}
          />
          
          <Button
            title="下一步"
            onPress={() => navigation.navigate('ResumeAnalysis', { resumeFile: selectedFile || undefined })}
            style={{
              ...styles.nextButton,
              backgroundColor: COLORS.white,
              borderWidth: 1,
              borderColor: COLORS.border
            }}
            textStyle={{ color: COLORS.textPrimary }}
            gradient={false}  // 明确指定不使用渐变
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
  placeholder: {
    width: 40,
  },
  fileSelectContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  fileSelectBox: {
    width: '100%',
    aspectRatio: 1.5,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  folderIcon: {
    width: 48,
    height: 48,
    marginBottom: 16,
    tintColor: COLORS.textSecondary,
  },
  selectText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  supportText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  selectedFileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    padding: 12,
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    width: '100%',
  },
  fileIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  fileName: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  closeIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.textSecondary,
  },
  bottomButtons: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
  },
  analyzeButton: {
    marginBottom: 12,
  },
  nextButton: {
    backgroundColor: COLORS.white,
  },
});

export default ResumeImport;