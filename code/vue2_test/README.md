# vue2_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 保存

#### 数据初始化载入Vue

原本计划将数据的初始化放在 `beforeCreate()` 函数内，由于beforeCreate() 在data()前执行，data()会覆盖beforeCreate()中获取的数据。所以索性便在data()中，从Vue原型上获取数据。

## 配置文件

`.eslintrc.js` 是后续添加的，为了解决文件名必须是两个单词报错的问题。