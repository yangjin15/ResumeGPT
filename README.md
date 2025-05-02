This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# 面试助手应用

## 模拟面试板块

该应用已实现模拟面试板块的六个主要页面，构成了完整的模拟面试流程：

### 1. 模拟面试页面 (MockInterview.tsx)

- 实现了类似聊天应用的界面风格，支持用户与 AI 面试官进行对话
- 采用消息气泡设计区分用户和面试官的对话内容
- 底部配有输入框和发送按钮，方便用户输入回答
- 顶部导航栏提供返回按钮和完成面试功能

### 2. 面试回顾页面 (MockReview.tsx)

- 中央展示雷达图，直观显示面试能力分布
- 下方设计四个评估板块卡片，采用每行两个的布局方式
- 卡片内含标题、简短描述和"更多"按钮，便于深入查看
- 每个卡片使用不同的背景色，增强视觉区分度

### 3. 整体情况页面 (ReviewOverall.tsx)

- 顶部显示个人信息卡片，包含姓名、求职意向和头像
- 四个能力评估板块采用两列布局，包括:
  - 技能和经验
  - 沟通能力
  - 职业素养
  - 适应性和灵活性
- 每个板块卡片有独立标题和详细内容描述

### 4. 错误纠正页面 (ReviewMistakes.tsx)

- 顶部显示面试题目内容
- 中部分析逻辑错误和可优化点
- 底部提供正确代码示例
- 全部采用相同的背景色和圆角设计，保持视觉一致性

### 5. 提升建议页面 (ReviewSuggestions.tsx)

- 顶部提供类别选择下拉框，支持切换不同类别的建议
- 内容区域以编号卡片形式呈现多条建议
- 每条建议包含标题、详细内容和指示箭头
- 采用蓝色系背景，并添加序号突出重点

### 6. 相似问题页面 (ReviewSimilar.tsx)

- 顶部显示面试中出现的问题
- 中部提供标准解答
- 底部列出相关考点列表
- 每个相关考点可点击查看，配有右侧箭头指示

所有页面都遵循统一的设计风格，包括顶部导航栏、圆角卡片、一致的字体和色彩系统，确保整体用户体验的连贯性和专业性。
