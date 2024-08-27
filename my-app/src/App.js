// 从本地项目中导入logo图片
import logo from './logo.svg';
// 导入全局样式文件
import './App.css';
// 从React库中引入React，用于创建和管理组件
import React from 'react';

// 这是一个使用函数式组件定义的App组件的代码片段，已被注释掉
// function App() {
//   return (
//     // JSX语法，用于定义组件的UI结构
//     <div className="App">
//       {/* 定义应用的header部分 */}
//       <header className="App-header">
//         {/* 在页面中显示logo图片，并为其指定样式和替代文本 */}
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* 显示一段提示文字，指导用户编辑src/App.js文件以触发页面重载 */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         {/* 定义一个链接，指向React官网，当用户点击时将在新标签页中打开 */}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// 这是一个使用类组件定义的App组件，替代了上面被注释掉的函数式组件
class App extends React.Component {
  // render方法是React组件中必需的方法，用于渲染UI
  render() {
    // JSX语法，用于定义组件的UI结构
    return (
      // 定义一个div容器，包含整个应用的内容
      <div className="App">
        {/* 定义应用的header部分 */}
        <header className="App-header">
          {/* 在页面中显示logo图片，并为其指定样式和替代文本 */}
          <img src={logo} className="App-logo" alt="logo" />
          {/* 显示一段提示文字，指导用户编辑src/App.js文件以触发页面重载 */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* 定义一个链接，指向React官网，当用户点击时将在新标签页中打开 */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

// 导出App组件，供其他模块使用
export default App;
