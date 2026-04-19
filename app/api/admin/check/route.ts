import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  return Response.json({ authenticated: session?.value === "authenticated" });
}
