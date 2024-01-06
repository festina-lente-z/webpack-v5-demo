const loaderUtils = require('loader-utils');

// 将一个文件转化为 string
module.exports = function (source) {
    const { name } = loaderUtils.getOptions(this);
    console.log('name', name)
    // ES6 模板字符串为什么存在安全问题？
    const json = JSON.stringify(source).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

    // 方式一
    // throw new Error('Error');
    // return `export default ${json}`;

    // 方式二
    // this.callback(new Error('Error 1'), json, 1, 2, 3);

    // 回传多个值
    this.callback(null, json, 1, 2, 3);
}