import { Suspense } from "react";

export const SuspenseIf = ({ condition, fallback, children }) => {
  if (!condition) {
    return children;
  }

  return <Suspense fallback={fallback}>{children}</Suspense>;
};
