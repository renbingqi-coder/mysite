import req from "./request";
export default async function getAbout(){
   return  await req.get("/api/about")
}