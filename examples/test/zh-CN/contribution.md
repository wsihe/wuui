## 参与贡献

### 开发环境搭建

首先你需要 Node.js 4+ 和 NPM 3+

```
  git clone https://github.com/wsihe/wuui.git
  npm run dev

  # open http://localhost:8088
```
### 开发规范

- 使用最新ES2015语法，具体如下：
 - 正确使用const和let替代var
 - 使用模板字符串`${this.data}`
 - 将工具函数等依赖单独分离，并用import导入
 - 对象字面量缩写、箭头函数
- 通用工具集可以在src/utils/assist内扩展
- 在examples/routers内测试组件

### 组件
#### 命名
- 尽量简单、表意。
- export出的对象使用驼峰命名，比如Page、ButtonGroup
- 如组件需要嵌套使用，子组件命名在父组件后加-item，比如timeline及timeline-item
#### 目录
- 组件在目录src/components/下，每个组件单独一个目录，目录命名使用小写，入口文件为index.js，导出组件，再由根入口文件src/index.js暴露给使用者
- 每个组件的文件名使用小写，但与组件的名称一致，比如timeline.vue和timeline-item.vue
#### 属性
- 必须规定type或者使用validator进行验证
- 如果validator验证为几个值中的一个，则使用src/utils/assist内的oneOf函数验证
- 如果有尺寸的参数size，只能使用smalllarge，默认是适中，则不用写
### 事件
#### 命名
使用on-为前缀，比如on-change

#### 规范
$dispatch和$broadcast 替代方案在 src/mixins/emitter.js 内
嵌套组件之间通信，可以使用$parent和$children，在 src/utils/assist.js 内提供了 findComponentUpward、findComponentDownward、findComponentsDownward 三个方法来向上或向下查找元素，建议组件可以嵌套其它组件时，查询 parent 或 children 使用这三个方法。参考 Radio、Checkbox、Menu 组件的实现。

### 其它
css前缀使用 wu-