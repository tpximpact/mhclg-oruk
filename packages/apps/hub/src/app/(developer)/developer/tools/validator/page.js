import { NamedMarkdownPage } from "@/components/NamedMarkdownPage";
import { Validator } from "@oruk/Validator";
import { navigate } from "@/actions/validate";

export default function Home() {
  return (
    <>
      <NamedMarkdownPage name="validator" />
      <Validator validationAction={navigate} />
    </>
  );
}
