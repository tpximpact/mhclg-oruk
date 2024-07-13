import { SuspenseIf } from "@tpx/SuspenseIf";
import Spinner from "@tpx/Spinner";

async function ValidationResultLoader() {
  const result = await fetchValidationResult();

  return <ValidationResult result={result} />;
}

export function ValidationResultWithSuspense({ result }) {
  return (
    <SuspenseIf condition={!result} fallback={<ValidationResultSkeleton />}>
      <ValidationResultLoader />
    </SuspenseIf>
  );
}

export function ValidationResult({ result }) {
  return <div>{JSON.stringify(result)}</div>;
}

export function ValidationResultSkeleton() {
  return <Spinner />;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchValidationResult() {
  await delay(3000)
  const url = 'https://dummyjson.com/quotes'
  const res = await fetch(url);
  const data = await res.json();
 return data
}
