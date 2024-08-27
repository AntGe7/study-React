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
  constructor(props) {
    console.log('constructor构造函数执行');
    // 调用父类的构造函数，初始化组件的状态
    super(props);
    // 初始化组件的状态，这里定义了一个名为count的属性，初始值为0
    this.state = {
      count: 0
    }
    // this.handleClick = this.handleClick.bind(this);
  }
  // render方法是React组件中必需的方法，用于渲染UI
  render() {
    console.log('render方法');
    // JSX语法，用于定义组件的UI结构
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>点击 Count</button>
      </div>
    )
  }
}

// 导出App组件，供其他模块使用
export default App;


// ### 1. **`class App extends React.Component`**
//    - **解释**：`App` 组件继承了 `React.Component` 类，因此它具有 `React.Component` 类的所有方法和属性。
//    - **补充说明**：`React.Component` 是 React 库中的一个基类（或父类），是 React 的一部分。它包含了 React 组件的核心功能，如状态管理、生命周期方法、渲染逻辑等。

// ### 2. **`constructor(props)` 相当于 Vue 的 `data` 和 `created` 生命周期**
//    - **解释**：`constructor(props)` 在某种程度上结合了 Vue 的 `data` 和 `created` 的功能。它用于初始化组件的状态和属性，并执行其他初始化操作。
//    - **补充说明**：在 React 中，`constructor` 会在组件实例化时自动调用，通常用于初始化 `state` 和绑定事件处理函数。在 Vue 中，`data` 函数用于返回初始状态对象，而 `created` 钩子则在实例创建后立即调用，适用于初始化数据和执行操作。

// ### 3. **`super(props)`**
//    - **解释**：调用 `super(props)` 确保 `this` 在构造函数中被正确初始化。`super(props)` 是调用父类的构造函数，使得 `this.props` 可以在 `constructor` 中被访问。
//    - **补充说明**：在子类的 `constructor` 中，必须在使用 `this` 之前调用 `super(props)`，以便正确初始化父类的构造函数。

// ### 4. **`props`**
//    - **解释**：`props` 是一个对象，包含了传递给组件的属性。在 React 中，组件的 `props` 是只读的，不能被修改。
//    - **补充说明**：`props` 是由父组件传递给子组件的数据，用于配置组件的行为或显示不同的内容。它们是组件的输入，是外部传入的。

// ### 5. **`this.state`**
//    - **解释**：`this.state` 相当于 Vue 的 `data`，用于定义组件的状态和初始化数据。
//    - **补充说明**：`this.state` 是 React 组件的本地状态，用于存储组件的动态数据。与 Vue 的 `data` 类似，`this.state` 中的数据是响应式的，意味着当 `state` 发生变化时，组件会重新渲染。
