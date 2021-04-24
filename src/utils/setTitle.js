let routeTitle = "",siteTitle = "";

function setTitle(){
    //如果路由标题和网站标题都没有
    if (!routeTitle && !siteTitle) {
        document.title = "loading...";
      } else if (routeTitle && !siteTitle) {
        document.title = routeTitle;
      } else if (!routeTitle && siteTitle) {
        document.title = siteTitle;
      } else {
        document.title = `${routeTitle}-${siteTitle}`;
      }
    
}

export default{
    setRouterTitle(title){
        routeTitle = title;
        setTitle();
    },
    setSiteTitle(title){
        siteTitle = title;
        setTitle();
    }
}