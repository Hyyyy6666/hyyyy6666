# javascript学习笔记

## 记录人：黄语馨

### 简单定义

JS是一种轻量级、解释型、面向对象的脚本语言。主要被设计用于网页上实现动态效果，增加用户与网页的交互性。

作为一种客户端脚本语言，JS可以直接嵌入HTML，并在浏览器中执行。

与HTML和CSS不同，JS使得网页不再是静态的，而是可以根据用户的操作动态变化的。



### JS导入方式

1. Head标签的内联样式:

   <img src="file:///C:/Users/Lenovo/AppData/Local/Temp/企业微信截图_17630364774282.png" alt="img" style="zoom:33%;" />

2. Head标签的外联样式:

   <img src="file:///C:/Users/Lenovo/AppData/Local/Temp/企业微信截图_17630365344984.png" alt="img" style="zoom: 50%;" />

3. body标签中的内联样式:

   <img src="file:///C:/Users/Lenovo/AppData/Local/Temp/企业微信截图_17630367934762.png" alt="img" style="zoom: 67%;" />

4. body标签中的内联样式，由弹窗显示：使用alert函数，alert（'输入内容'）；



### js基本语法

1. 变量

   ​	声明变量：

   ​		var：声明有函数作用域的变量

   ​		let：声明有块级作用域的变量，更安全，更灵活

   ​		const：声明常亮

   注：声明却无初始化的数据一般给出undefined；null变量被**明确**复制为空。

   

   ### JS函数

   函数是一段可重复使用的代码块，他接受输入（参数）、执行特定任务并输出

   1. 基本形式：

   function function_name(参数1，参数2，参数3，……){

   函数体，执行的代码

   return 返回值（若无则不写）；

   }

   

   

   ### JS事件

   事件是文档或浏览器窗口中发生的特定瞬间，例如用户的点击、键盘的按下、页面的加载等。常见事件如下：

   |    事件     | 描述             |
   | :---------: | ---------------- |
   |   onClick   | 点击事件         |
   | onMouseOver | 鼠标经过         |
   | onMouseOut  | 鼠标移出         |
   |  onChange   | 文本内容改变事件 |
   |  onSelect   | 文本框选中       |
   |   onFocus   | 光标聚焦         |
   |   onBlur    | 移开光标         |

   1. 事件绑定常用方法
      1. 'HTML'属性
      2. 'DOM'属性
      3. 'addEventListener'方法

   

   ### DOM

   在Web开发中，浏览器会创建页面的文档对象模型，也就是DOM

   每个HTML或XML文档都可以被视作一个文档树，文档树是整个文档的层次结构表示

   文档节点是整个文档树的根节点

   DOM为这个文档树提供了一个编程接口，开发者可以使用Javascript来操作这个树状结构。

   ![QQ_1763109704093](C:\Users\Lenovo\AppData\Local\Temp\QQ_1763109704093.png)

1. 获取文档中的元素