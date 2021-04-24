//接口
import request from "./request";

export async function getBanners() {
  return await request.get("/api/banner");
}
// getBanners().then((data)=>{
//   console.log(data)
// })