/*
    1.生成随机整数
    2.默认返回0-10 的值
*/
export function randomInt(max = 0, min = 10) {
  return Math.round((Math.random() * min) + max);
}
/* 随机十六进制颜色 */
export const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;

/* 复制指定文本 */
export const copyText= function (text = '') {
  const tempdom = document.createElement('input');
  tempdom.value = text;
  document.body.appendChild(tempdom);
  tempdom.select();
  document.execCommand('Copy');
  tempdom.remove();
}
/* 获取UUID */
export  const uuid = (a) => (a ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid));

/* 角度转弧度 */

export const degs2Rads = (deg) => (deg * Math.PI) / 180.0;


/* 绑定事件 */

export const addEvent = function (element, type, callback) {
  if (element.addEventListener) {
      // 支持使用 addEventListener()
      if (type.slice(0, 2) === "on")
      // 以 "on" 开头不需要则去掉
      type = type.slice(2);
      element.addEventListener(type, callback);
  } else if (element.attachEvent) {
      // 支持使用 attachEvent()
      if (type.slice(0, 2) !== "on")
      // 没有以 "on" 开头需要则加上
      type = "on" + type;
      element.attachEvent(type, callback);
  } else {
      type.slice(0, 2) !== "on"
      ? (element["on" + type] = callback)
      : (element[type] = callback);
  }
  };


/* 
    desc:删除事件
    el:dom元素;
    event:事件名字 
    func:函数
*/
export function removeEvent(el, event, func) {
  if (!el) {
      return
  }
  if (el.detachEvent) {
      el.detachEvent('on' + event, func)
  } else if (el.removeEventListener) {
      el.removeEventListener(event, func, true)
  } else {
      el['on' + event] = null
  }
}
  /* 生成 {count} 数量的数组 */
export const arr = function (count=0){
 return Array.from({length:count}, (_,k) => k)
};

/* 打开一个链接 */

export const openLink = (href) => {
  var link = document.createElement("a") ;
  link.href = href;
  link.target = "_blank";
  document.body.append(link);
  link.click();
  setTimeout(() => link.parentNode.removeChild(link));
};

/* 检测A是否包含b */
export const contains = (a, b) => a.x1 <= b.x1 && a.y1 <= b.y1 && a.x2 >= b.x2 && a.y2 >= b.y2;



// 计算
export const radiansAngle =   (p1, p2) => Math.atan2(p2.y - p1.y, p2.x - p1.x);
// 弧度
export const degreesAngle = (p1, p2) => (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;

/* 获取对象类型 */
export const getType = (obj) => Object.prototype.toString.call(obj).match(/[object (.*)]/)[1];

/* 检测数组中的最大值 */
export const maxInArr = (arr) => Math.max(...arr);

/* 取dom */
export const query = function(el){
    document.querySeleoctor(el)
}
/* 获取windows最小宽度 */
export const maxWidth = function(){
    return window.innerWidth;
}

/* 获取windows最大宽度 */
export const maxHeigth = function(){
    return window.innerHeight;
}

