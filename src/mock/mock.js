
// import Mock from 'mockjs' //引Amockjs
// const Random=Mock.Random
// // Mock . Random 屉一个工具类,用于生成容种随机数据
// let data = []//用子接受生成数据的数组
// // let size = [
// //     '300x250',
// //     '250x250','240x400','336x280',
// //     '180x150', '720x300','468x60','234x60',
// //     '88x31','120x90','120x60','120x240',
// //     '125x125','728x90','160x600','120x600',
// //     '300x600'
// // ]
// //定义随乩值
// for (let i = 0; i < 10; i++) {//可自定义生成的个数
//     let template = {
//         ' Boolean': Random.boolean, // 可以生成基本数据类型
//         ' Natural': Random.natural(1, 10),//生成1 9100.之间自然数
//         ' Integer': Random.integer(1, 100), //生成1 100.之间的整数
//         'Float': Random.float(0, 100, 0, 5),//生成0今100.之间的浮点数,小数点后尾数为0 5位
//         ' Character': Random.character(), //生成随机字符串,可加参数定义规则
//         'String': Random.string(2, 10), //生成2 18个字符之间的字符串
//         ' Range': Random.range(0, 10, 2),//生成一个随机数组
//         'Date': Random.date(), //生成一个随机日期,可加参数定义日期格式
//         ' Image': Random.image(Random.size,'#02adea','Hello'), // Random. size表示将从size数据中任选一个数据
//         'Color': Random.color(), //生成一个颜色随机值
//         'Paragraph': Random.paragraph(2, 5), //生成2至5个句子的文本
//         ' Name': Random.name(), //生成姓名
//         'Ur1': Random.url(), //生成veb他址
//         ' Address': Random.province() //生成地址
//     }
//     data.push(template)
// }
// Mock.mock('/data/index', 'post',data) //根据数据模板生成模拟数据















// 使用 Mock
// let Mock = require('mockjs')
// let path = require('path')
// let fs = require('fs')
// // const Random=Mock.Random
// // Random.image('200x100', '#894FC4', '#FFF', 'png', '!')

// let data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-19': [{  //随机生成1到19的随机数
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }],
//     "string|1-10": "★",
//     "object|4": {
//         "310000": "上海市",
//         "320000": "江苏省",
//         "330000": "浙江省",
//         "340000": "安徽省"
//       }
      
// })

// for(let i=0;i<=10;i++){
//     let template={
//         ' Image': Random.image(Random.size,'#02adea','Hello')
//     }
//     data.push(template)
// }

// 输出结果
// console.log(JSON.stringify(data, null))

// fs.writeFile(path.join(__dirname, './data/data.json'),JSON.stringify(data),err => {console.log(err)})