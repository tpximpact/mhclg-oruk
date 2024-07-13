import { Suspense } from "react";

export function SuspenseIf({ condition, fallback, children }) {
  if (!condition) {
    return children;
  }

  return <Suspense fallback={fallback}>{children}</Suspense>;
}
