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
  await delay(3000);
  //const result = await fetch('https://dummyjson.com/quotes', { cache: 'no-store' })
  //console.log(result)
  // console.log("=========")
  // return JSON.stringify(result)

  return [
    {
      foo: "foo",
      bar: "bar",
    },
  ];
}
