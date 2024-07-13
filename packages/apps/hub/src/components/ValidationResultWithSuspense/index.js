import {SuspenseIf} from "@/components/SuspenseIf";

async function ValidationResultLoader() {
  const products = await fetchValidationResult();

  return <ValidationResult products={products} />;
}

export function ValidationResultWithSuspense({ products }) {
  return (
    <SuspenseIf condition={!products} fallback={<ValidationResultSkeleton />}>
      <ValidationResultLoader />
    </SuspenseIf>
  );
}

export function ValidationResult({ products }) {
  return <div>{JSON.stringify(products)}</div>;
}

export function ValidationResultSkeleton() {
  return <div>loading</div>;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchValidationResult() {
  await delay(3000);

  return [
    {
     foo:"foo",
     bar:"bar"
    },
  ];
}
