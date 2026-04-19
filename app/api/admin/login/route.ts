import { cookies } from "next/headers";

const ADMIN_CODE = process.env.ADMIN_CODE || "ljgk2026";

export async function POST(request: Request) {
  const { code } = (await request.json()) as { code: string };

  if (code !== ADMIN_CODE) {
    return Response.json({ error: "Fel kod" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8,
    path: "/",
  });

  return Response.json({ ok: true });
}
