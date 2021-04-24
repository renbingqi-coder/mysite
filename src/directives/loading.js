import loadingimg from "@/assets/loading.svg";
import loadingstyle from "./loading.module.less"

//获取转圈圈
function getLoadingImage(el){
    return el.querySelector("img[data-role=loading]")
}

//创建转圈圈
function createLoadingImg(){
    const img = new Image();
    img.dataset.role = "loading";
    img.className = loadingstyle.loading;
    img.src = loadingimg;
    return img;
}

// 导出指令的配置对象
export default function(el, binding) {
    // 根据 binding.value 的值，决定创建或删除img元素
    
    //获取当前元素
    const curImg = getLoadingImage(el);
    
    if (binding.value) {
      
        // 没有创建
      if (!curImg) {
        const img = createLoadingImg();
        el.appendChild(img);
      }
    } else {
      if (curImg) {
        curImg.remove();
      }
    }
  }