import { NamedMarkdownPage } from "@/components/NamedMarkdownPage";
import { Dashboard } from "@oruk/Dashboard";

export default function Home() {
  return (
    <>
      <NamedMarkdownPage name="dashboard" />
      <Dashboard />
    </>
  );
}
