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
模板会发生更换
文章的标题，后端就写死了，这样一旦标题发生变化，前后端的标题都需要修改
* 前端页面中的模板改变后，不会对后端造成影响
* 有的组件，创建后，可以往Vue上添加内容；不得丢失未创建组件的内容；
    * 强迫用户，点进去每个组件。用户没有查看的组件，不会导入进word文档

#### 数据存在Vue

```javascript
let textData = {
      t1: this.t1,
      t2: this.t2,
      t3: this.t3,
      t4: this.t4,
      t5: this.t5,
      t6: this.t6,
    };
    this.$paper.ch2.se2 = textData;
```
> ch2.se2 表示第2章第2节


#### 数据初始化载入Vue

原本计划将数据的初始化放在 `beforeCreate()` 函数内，由于beforeCreate() 在data()前执行，data()会覆盖beforeCreate()中获取的数据。所以索性便在data()中，从Vue原型上获取数据。

```javascript
let textData = this.$paper.ch2.se2;
if (typeof textData === "undefined") {
      t1 = "";
      t2 = "";
      t3 = "";
      t4 = "";
      t5 = "";
      t6 = "";
    } else {
      t1 = textData.t1;
      t2 = textData.t2;
      t3 = textData.t3;
      t4 = textData.t4;
      t5 = textData.t5;
      t6 = textData.t6;
    }
```