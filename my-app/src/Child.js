import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      derivedText: props.text
    };
  }

   // 静态方法getDerivedStateFromProps，用于派生状态(传递给组件的新状态)
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps,'nextProps');
    console.log(prevState,'prevState');
    console.log('getDerivedStateFromProps挂载时和更新时执行');
    if (nextProps.text !== prevState.derivedText) {
      return {
        derivedText: nextProps.text
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <p>Derived Text: {this.state.derivedText}</p>
      </div>
    );
  }
}

export default Child;


// ### 1. **`getDerivedStateFromProps`**

// - **静态方法 (`static`)**：
//   - `getDerivedStateFromProps` 必须使用 `static` 关键字声明为静态方法，因为它不依赖于组件实例（因此没有 `this`）。
  
// - **调用时机**：
//   - 该方法在组件挂载和更新时被调用。具体来说，当父组件更新并传递新的 `props` 给子组件时，`getDerivedStateFromProps` 会被调用，并传入新的 `props` 和当前的 `state`。
  
// - **返回值**：
//   - 该方法必须返回一个对象，代表新的状态。如果返回 `null`，则表示不需要更新状态。

// ### 2. **`nextProps`**

// - **定义**：
//   - `nextProps` 是即将接收的新 `props` 值。这些 `props` 是由父组件传递给子组件的，可能是初次传递，也可能是父组件更新后的新值。

// ### 3. **`prevState`**

// - **定义**：
//   - `prevState` 是组件当前的状态（`state`）。它表示在 `getDerivedStateFromProps` 被调用之前组件的状态。
//   - `prevState` 包含的是 `this.state` 中的所有数据，因此它代表组件的现有状态。

// ### 总结

// - **`getDerivedStateFromProps`**：
//   - **静态方法**，在组件挂载和更新时调用。
//   - 用于在 `props` 改变时，根据新的 `props` 来更新组件的 `state`。
//   - 返回一个对象来更新 `state`，或返回 `null` 表示不更新。

// - **`nextProps`**：
//   - 即将接收到的新 `props`，通常是由父组件传递过来的。

// - **`prevState`**：
//   - 当前组件的状态，是 `this.state` 的现有数据。