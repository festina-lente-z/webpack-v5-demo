// 将一个文件转化为 string
module.exports = function (source) {
    // ES6 模板字符串为什么存在安全问题？
    const json = JSON.stringify(source).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
    return `export default ${json}`;
}