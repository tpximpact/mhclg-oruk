import { ValidationResultWithSuspense } from "@/components/ValidationResultWithSuspense";
import { fetchValidationResult} from "@/components/ValidationResultWithSuspense";
import { headers } from "next/headers";

export function isInitialPageLoad() {
  return !!headers().get("accept")?.includes("text/html");
}

export default async function Page({ params }) {
  let products;

  // for initial page load we want to preload all the data
  // for client side navigation we want to lazy load the data and show loading state
  if (isInitialPageLoad()) {
    products = await fetchValidationResult();
  }

  return (
    <>
      {params.id}
      <ValidationResultWithSuspense products={products} />
    </>
  );
}