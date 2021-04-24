import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "@uuid",
      name: "个人博客",
      url: "http://82.156.239.86:8080/mysite",
      github: null,
      description: ["自己学完vue之后根据自己兴趣写的一个项目,基于vue的一个前台项目,个人空间"],
      thumb: `@image(300x250, @color, #fff,mysite)`,
    },
    {
      id: "@uuid",
      name: "在线考试系统",
      url: null,
      github: "https://github.com/RBQNB/Training.git",
      description: ["期末课设,基于vue和java的一个综合项目,老师账号默认17609206634,密码1234 学生可以注册"],
      thumb: `@image(300x250, @color, #fff,exam)`,
    },
    {
      id: "@uuid",
      name: "学生管理系统",
      url: "http://82.156.239.86:8080/student",
      github:null,
      description: ["这是学校的一个学校的一个小作业,基于html/css/js的一个项目"],
      thumb: `@image(300x250, @color, #fff,student)`,
    },
    {
      id: "@uuid",
      name: "贪吃蛇游戏",
      url: "http://82.156.239.86:8080/snake",
      github: null,
      description: ["这是我刚学完js时做的第一个小案例,基于原生js/html/css的一个小游戏"],
      thumb: `@image(300x250, @color, #fff,snake)`,
    },
    {
      id: "@uuid",
      name: "推箱子",
      url: "http://82.156.239.86:8080/box",
      github:null,
      description: ["这是我刚学完模块化,基于ES6模块化做的一个小案例"],
      thumb: `@image(300x250, @color, #fff,box)`,
    },
    {
      id: "@uuid",
      name: "购物车",
      url: "http://82.156.239.86:8080/shopping",
      github:null,
      description: ["为了练习浏览器存储,做的一个基于localStorage的一个小案例"],
      thumb: `@image(300x250, @color, #fff,shopping)`,
    },
    {
      id: "@uuid",
      name: "任务清单",
      url: "http://82.156.239.86:8080/todolist",
      github:null,
      description: ["基于vue3和localStorage的一个本地任务清单"],
      thumb: `@image(300x250, @color, #fff,todolist)`,
    },
  ],
});
