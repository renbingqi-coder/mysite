import eventBus from "@/eventBus";
import debounce from "@/utils/debounce";
import defaultGif from "@/assets/default.gif";

//存储未加载图片的dom元素  
let doms = [];
/**
 * 设置每一个图片
 * @param {*} dom 
 */
function setImage(dom){ 
    let ClientHeight = window.innerHeight;
    let rect = dom.el.getBoundingClientRect();
    let height = rect.height || 150;
    // 判断图片是不是在是视口内   在视口内再请求    不在 不做什么
    if(rect.top >= -height && rect.top <= ClientHeight){
         dom.el.src = dom.src;
         //从未加载的元素中删除元素 
         doms = doms.filter((e)=>e !== dom);
    }
    
}

/**
 * 加载图片
 */
function loadImage(){
    //循环所有的未加载的图片
    for(const dom of doms){
        setImage(dom);
    }
}

eventBus.$bus.$on("mainScroll",debounce(loadImage,200));

export default {
    bind(el,binding){
        el.src = defaultGif;
        doms.push({
            el, //dom元素
            src:binding.value,
        })
    },
    unbind(el,binding){
         doms = doms.filter((dom)=>dom.el !== el) //移除里面等于el的
      
    }
}