import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "http://82.156.239.86:8080/student/image/logo.jpg",
    blog:"https://blog.csdn.net/qq_45044074?spm=1001.2101.3001.5343",
    siteTitle: "Q的个人空间",
    github: "https://github.com/RBQNB",
    qq: "2833667039",
    qqQrCode:
      "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    weixin: "17609206634",
    weixinQrCode:
      "http://i2.tiimg.com/735561/5dc0b232fbf0ef98.jpg",
    mail: "1820374832.com",
    icp: "Copyright ©2020 by Rbq",
    githubName: "Rbq",
    favicon: "http://i2.tiimg.com/735561/5dc0b232fbf0ef98.jpg",
  },
});
