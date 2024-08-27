// 从React库中引入React，这是构建React组件和管理组件状态的核心库
import React from 'react';
// 从React-DOM库中引入ReactDOM，用于在DOM中渲染React组件
import ReactDOM from 'react-dom/client';
// 引入全局样式文件
import './index.css';
// 引入App组件，这是应用程序的根组件
import App from './App';
// 引入reportWebVitals函数，用于性能分析和优化
import reportWebVitals from './reportWebVitals';

// 获取DOM中的根元素，并创建一个React根实例
const root = ReactDOM.createRoot(document.getElementById('root'));

// 使用ReactDOM渲染App组件到根元素中
root.render(
  // 开启严格模式，React.StrictMode是一个工具帮助开发者识别潜在问题。它在开发模式下运行，主要用来检测不兼容的代码（例如废弃、过时的API）
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// 如果你想开始在应用中测量性能，可以将一个函数传递给reportWebVitals（例如：console.log），或者发送给分析端点。了解更多：https://bit.ly/CRA-vitals
// 调用reportWebVitals函数，开始进行性能分析和优化
reportWebVitals();


// 严格模式的作用
// 1. 不安全的生命周期方法：某些生命周期方法在未来的React版本中将被弃用。严格模式会警告这些不安全的方法的使用。
// 2. 使用过时或遗留的API：严格模式会警告使用过时或遗留的API。
// 3. 意外的副作用：严格模式可以帮助你发现组件中可能的意外副作用。
// 4. 与旧版本React不兼容的代码：严格模式会警告你的代码中可能与未来版本的React不兼容的部分。

// React和ReactDom两个包分别有什么作用？
// 1. react：这是React库的核心。它定义了React组件的创建和生命周期方法，以及React元素的概念。你可以将其视为React的“引擎”。
// 2. react-dom：这个库提供了在浏览器环境中使用React的方法，例如将React组件渲染到DOM中，或者在DOM中触发React组件的更新。你可以将其视为React的“驱动程序”。