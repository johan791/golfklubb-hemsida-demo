"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminBar() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("/api/admin/check")
      .then((r) => r.json())
      .then((data) => setIsAdmin(data.authenticated))
      .catch(() => {});
  }, []);

  if (!isAdmin) return null;

  return (
    <div className="bg-amber-400 text-amber-900 px-4 py-1.5 text-xs font-medium flex items-center justify-between z-[60] relative">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
        Admin-läge aktivt
      </div>
      <Link
        href="/admin"
        className="px-2.5 py-0.5 bg-amber-500 hover:bg-amber-600 text-white rounded transition-colors"
      >
        Adminpanel
      </Link>
    </div>
  );
}
