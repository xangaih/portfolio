import dynamic from "next/dynamic";

// Import client-side components with dynamic imports
const ClientPage = dynamic(() => import("./page-client"), { ssr: false });

export default function Home() {
  return <ClientPage />;
}
