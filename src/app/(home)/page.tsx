import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home() {
  const data = await trpc.hello({
    text: "Wells",
  });
  return (
    <div>
      <HydrateClient>
        <Suspense fallback={<p>Loading...</p>}>
          <ErrorBoundary fallback={<p>Error</p>}>Client</ErrorBoundary>
        </Suspense>
      </HydrateClient>
    </div>
  );
}
