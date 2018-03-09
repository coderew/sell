

## 2.3 数字

### 2.3.2 较小的数值

`0.1 + 0.3 === 0.3;  // false`

简单来说：二进制浮点数中的0.1和0.2并不是十分精确，它们相加的结果并非刚好等于0.3，而是一个比较接近的数字`0.30000000000000004`，所以条件判断结果为`false`。

那么如何判断`0.1 + 0.2`和`0.3`是否相等呢？最常见的方法是设置一个误差范围值（也称为机器精度），对于JavaScript语言来说，这个值通常为：2^-52(2.220446049250313e-16)。在ES6中，该值定义**Number.EPSILON**中，在ES6之前的版本，我们可以这样写：

```javascript
if (!Number.EPSILON) {
  	Number.EPSILON = Math.pow(2, -52);
}
```

比较两个数字是否相等就可以这样判断：

```javascript
function numbersCloseEnoughToEqual(n1, n2) {
  	return Math.abs( n1 - n2) < Number.EPSILON;
}

var a = 0.1 + 0.2;
var b = 0.3;

numbersCloseEnoughToEqual(a, b) 				// true
numbersCloseEnoughToEqual(0.0000001, 0.0000002) // false
```

###2.3.3 整数的安全范围

在JavaScript中，数字的安全值远远小于**Number.MAX_VALUE**，能够安全呈现的最大整数是2^53 - 1。在ES6中，**Number.MAX_SAFE_INTEGER**和**Number.MIN_SAFE_INTEGER**分别表示最大和最小的安全值。

如果需要处理超出安全范围的数字，必须将它们转换为字符串。

### 2.3.4 整数检测

**检测是否是一个整数**

在ES6中，可以直接使用**Number.isInteger(..)**方法：

```javascript
Number.isInteger( 42 ); 	//true
Number.isInteger( 42.000 ); //true
Number.isInteger( 42.2 ); 	//false
```

在ES6之前的版本可以使用下面的代码判断：

```javascript
if (!Number.isInteger) {
  Number.isInteger = function(num) {
    return typeof num === 'number' && num % 1 == 0;
  }
}
```

**检测是否是一个安全的整数**
在ES6中，可以直接使用**Number.isSafeInteger(..)**方法：

```javascript
Number.isSafeInteger( Number.MAX_SAFE_INTEGER); 	//true
Number.isSafeInteger( Math.pow(2, 53));				//false
Number.isSafeInteger( Math.pow(2, 53) - 1);			//true
```

在ES6之前的版本可以使用下面的代码判

```javascript
if (!Number.isSafeInteger) {
  Number.isSafeInteger = function(num) {
    return Number.isInteger( num ) && Math.abs( num ) <= Number.MAX_SAFE_INTEGER  };
}
```



## 2.4 特殊数值

JavaScript数据类型中有几个特殊的值需要开发人员特别注意和小心使用。

### 2.4.1 不是值的值

undefined类型的值只有一个，即undefined。null类型也只有一个值，即null。它们的名称既是类型也是值，两者之间的区别是：

- null，指空值，引用为空。
- undefined指没有值，即没有赋值；

### 2.4.2 undefined

如果要将代码中的值设置为undefined，可以使用void，这种做法不常见，但是有些情况下却很有用。

### 2.4.3 特殊的数字

在JavaScript中，如果数学运算无法返回一个有效的数字，就会返回NaN，意指"不是一个数字"，但是将它理解为“无效数值”“失败数值”或者“坏数值”更精确些。例如：

```javascript
var a = 2 / "foo";     // NaN
typeof a === "number"; // true
```

上面的例子说明NaN还是数字类型，出现NaN意味“执行数学运算没有成功，这是失败后返回的结果”

NaN比较特殊，`它和自身并不相等，是唯一一个自相反的值`，即：

```javascript
NaN != NaN;		// true
```

**检测是否是NaN的方法**

ES6中，使用Number.isNaN(..)

ES6之前，利用NaN不等于自身这个特点（JavaScript中唯一具有这个特性）

```javascript
if (！Number.isNaN) {
  Number.isNaN = function(n) {
    return n != n
  }
}  
```

注意：在代码中尽量不要使用isNaN(...)，因为它会“检查参数是否是NaN，也不是数字”: `window.isNaN("foo") // true`。