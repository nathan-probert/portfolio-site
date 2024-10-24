"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import posthog from 'posthog-js';

// posthog here?

export default function Home() {
  posthog.init('phc_iL7fYKrzXDw4RwSCO2XmumwGCuOgDoiDP73Q7BDA9X5',
    {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
  )


  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return null; // Optionally return null, or a loading state while redirecting
}
