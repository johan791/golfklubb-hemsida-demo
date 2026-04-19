import { cookies } from "next/headers";

const ADMIN_CODES = ["ljgk2026", "demo"];

export async function POST(request: Request) {
  const { code } = (await request.json()) as { code: string };
  const envCode = process.env.ADMIN_CODE;

  const validCodes = envCode ? [envCode, ...ADMIN_CODES] : ADMIN_CODES;

  if (!validCodes.includes(code.trim())) {
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
