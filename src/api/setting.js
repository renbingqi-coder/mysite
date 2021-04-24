import request from "./request";

export default async function getsetting(){
    let data = await request.get("/api/setting");
    return data;
}