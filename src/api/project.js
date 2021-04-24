import request from "./request";

export async function getProjects() {
  let resp = await request.get("/api/project");
  console.log(resp);
  return resp;
}
