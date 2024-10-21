"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// posthog here?

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return null; // Optionally return null, or a loading state while redirecting
}
