import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../styles/colors';
import Button from '../../components/Button';

type ResumePolishing3NavigationProp = StackNavigationProp<RootStackParamList, 'ResumePolishing3'>;
type ResumePolishing3RouteProp = RouteProp<RootStackParamList, 'ResumePolishing3'>;

interface ResumePolishing3Props {
  navigation: ResumePolishing3NavigationProp;
  route: ResumePolishing3RouteProp;
}

const ResumePolishing3: React.FC<ResumePolishing3Props> = ({ navigation, route }) => {
  const { resumeData } = route.params || {};

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handlePreview = () => {
    navigation.navigate('ResumePolishing4', { resumeData });
  };

  const handleExport = () => {
    navigation.navigate('ResumePolishing5', { resumeData });
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
          <Text style={styles.headerTitle}>简历导出</Text>
          <TouchableOpacity style={styles.doneButton}>
            <Text style={styles.doneText}>完成</Text>
          </TouchableOpacity>
        </View>

        {/* 主体内容 */}
        <View style={styles.contentContainer}>
          <View style={styles.fileContainer}>
            <Image 
              source={require('../../assets/images/icons/folder.png')} 
              style={styles.folderIcon}
            />
            <View style={styles.fileInfo}>
              <Image 
                source={require('../../assets/images/icons/file.png')} 
                style={styles.pdfIcon}
              />
              <Text style={styles.fileName}>简历.pdf</Text>
            </View>
          </View>
          
          {/* 按钮区域 */}
          <View style={styles.buttonsContainer}>
            <Button
              title="预览"
              onPress={handlePreview}
              gradient={true}
              style={styles.previewButton}
            />
            
            <Button
              title="导出"
              onPress={handleExport}
              variant="outline"
              style={styles.exportButton}
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
  contentContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fileContainer: {
    alignItems: 'center',
    marginBottom: 100,
  },
  folderIcon: {
    width: 120,
    height: 120,
    tintColor: COLORS.primaryLight,
    marginBottom: 16,
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pdfIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.textTertiary,
    marginRight: 8,
  },
  fileName: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  buttonsContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    paddingHorizontal: 16,
  },
  previewButton: {
    marginBottom: 16,
  },
  exportButton: {
    backgroundColor: COLORS.white,
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

export default ResumePolishing3; 