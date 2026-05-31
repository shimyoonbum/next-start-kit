"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem", fontFamily: "sans-serif", padding: "1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>심각한 오류 발생</h1>
        <p style={{ color: "#666" }}>
          {error.message || "애플리케이션에서 복구할 수 없는 오류가 발생했습니다."}
        </p>
        <button
          onClick={reset}
          style={{ padding: "0.5rem 1rem", border: "1px solid #ccc", borderRadius: "0.375rem", cursor: "pointer", background: "#fff" }}
        >
          다시 시도
        </button>
      </body>
    </html>
  );
}
