title: 云智易物联平台简介
---

这是一个段落。

这是另外一个段落。

这一句后面有两个空格  
所以这句换行了

在当前目录建立一个与文件名称相同的目录用来存放该文件所需的图片，使用如下语法引用图片：

```
![logo](index/logo.png)
```

效果：

![logo](index/logo.png)

## 属性

### delegate

**定义**

```objectivec
@property (nonatomic, copy) id <WDGIMDelegate> delegate
```

**说明**
j
WDGIM 的代理。

</br>

------

### isConnecting

**定义**

```objectivec
@property (nonatomic, readonly) BOOL isConnecting
```

**说明**

正在连接 Wilddog IM 服务器。

**返回值**

会话对象
