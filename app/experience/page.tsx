"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push("/W26-SAP");
  }, [router]);

  return null; // Optionally return null, or a loading state while redirecting
}
