//弹出消息框
import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";
/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function (options) {
  //初始化
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 500;
  const container = options.container || document.body;

  //创建消息元素
  const div = document.createElement("div")
  //获取组件根元素
  const IconDom = getComponentRootDom(Icon, {
    type,
  })
  console.log(IconDom);
  div.innerHTML = `
        <span class = "${styles.icon}">
        ${IconDom.outerHTML}
        </span>
        <div>${content}</div>
    `;
  //类型样式名  cssmodule 中类名会变
  const typeClassName = styles[`message-${type}`];
  div.className = `${styles.message} ${typeClassName}`;

  // 将div加入到容器中

  if (getComputedStyle(container).position === "static") {
    container.style.position = "relative";
  }
  container.appendChild(div);

  // 浏览器强行渲染
  div.clientHeight; // 导致reflow
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%) translateY(0px)`
  // 等一段时间，消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    div.addEventListener(
      "transitionend",
      function () {
        div.remove();
        // 运行回调函数
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}