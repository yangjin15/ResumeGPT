import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';
import ResumeImport from '../screens/resume/ResumeImport';
import ResumeAnalysis from '../screens/resume/ResumeAnalysis';
import ResumeIntention from '../screens/resume/ResumeIntention';
import ResumePolishing1 from '../screens/resume/ResumePolishing1';
import ResumePolishing2 from '../screens/resume/ResumePolishing2';
import ResumePolishing3 from '../screens/resume/ResumePolishing3';
import ResumePolishing4 from '../screens/resume/ResumePolishing4';
import ResumePolishing5 from '../screens/resume/ResumePolishing5';
import InterviewPositions from '../screens/interview/InterviewPositions';
import InterviewCompanies from '../screens/interview/InterviewCompanies';
import InterviewQuestions from '../screens/interview/InterviewQuestions';
import MockInterview from '../screens/mock/MockInterview';
import MockReview from '../screens/mock/MockReview';
import ReviewOverall from '../screens/mock/ReviewOverall';
import ReviewMistakes from '../screens/mock/ReviewMistakes';
import ReviewSuggestions from '../screens/mock/ReviewSuggestions';
import ReviewSimilar from '../screens/mock/ReviewSimilar';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  ResumeImport: undefined;
  ResumeAnalysis: {
    resumeData?: any;
    resumeFile?: {
      name: string;
      uri: string;
      type: string;
    };
  };
  ResumeIntention: {
    resumeData?: any;
  };
  ResumePolishing1: {
    resumeData?: any;
  };
  ResumePolishing2: {
    resumeData?: any;
  };
  ResumePolishing3: {
    resumeData?: any;
  };
  ResumePolishing4: {
    resumeData?: any;
  };
  ResumePolishing5: {
    resumeData?: any;
  };
  InterviewPositions: undefined;
  InterviewCompanies: {
    position: string;
  };
  InterviewQuestions: {
    position: string;
    company: string;
  };
  MockInterview: undefined;
  MockReview: {
    interviewData: any;
  };
  ReviewOverall: {
    interviewData: any;
  };
  ReviewMistakes: {
    interviewData: any;
  };
  ReviewSuggestions: {
    interviewData: any;
  };
  ReviewSimilar: {
    interviewData: any;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ResumeImport" component={ResumeImport} />
        <Stack.Screen name="ResumeAnalysis" component={ResumeAnalysis} />
        <Stack.Screen name="ResumeIntention" component={ResumeIntention} />
        <Stack.Screen name="ResumePolishing1" component={ResumePolishing1} />
        <Stack.Screen name="ResumePolishing2" component={ResumePolishing2} />
        <Stack.Screen name="ResumePolishing3" component={ResumePolishing3} />
        <Stack.Screen name="ResumePolishing4" component={ResumePolishing4} />
        <Stack.Screen name="ResumePolishing5" component={ResumePolishing5} />
        <Stack.Screen name="InterviewPositions" component={InterviewPositions} />
        <Stack.Screen name="InterviewCompanies" component={InterviewCompanies} />
        <Stack.Screen name="InterviewQuestions" component={InterviewQuestions} />
        <Stack.Screen name="MockInterview" component={MockInterview} />
        <Stack.Screen name="MockReview" component={MockReview} />
        <Stack.Screen name="ReviewOverall" component={ReviewOverall} />
        <Stack.Screen name="ReviewMistakes" component={ReviewMistakes} />
        <Stack.Screen name="ReviewSuggestions" component={ReviewSuggestions} />
        <Stack.Screen name="ReviewSimilar" component={ReviewSimilar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;