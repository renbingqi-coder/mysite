import request from "./request";
//所有接口

/**
 * 获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
    //第二项为请求参数
    return await request.get("/api/blog", {
      params: {
        page,
        limit,
        categoryId,
      },
    });
  }

/**
 * 获取博客分类
 */
 export async function getBlogTypes() {
    return await request.get("/api/blogtype");
  }


/**
 * 提交评论
 * @returns 
 */
  export async function postComment(commontInfo) {
    return await request.post(`/api/comment`,commontInfo);
  }


  /**
 * 获取单个博客
 * @returns 
 */
   export async function getBlog(id) {
    let data = await request.get("/api/blog/${id}");
    return data;
  }

  /**
 * 分页获取评论
 * @returns  结果
 */
   export async function getComments(page=1,limit=10,blogid) {
     console.log(page,limit,blogid);
    let data = await request.get("/api/comment",{
      params: {
        page,
        limit,
        blogid,
      },
    });
    return data;
  }
