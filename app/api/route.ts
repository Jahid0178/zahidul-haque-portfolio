export async function GET(request: Request) {
  console.log("hello world from api route");
  return new Response("hello world from api route");
}
