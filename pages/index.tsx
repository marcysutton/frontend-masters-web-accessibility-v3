import { useRouter } from "next/router";
import 'wicg-inert';
import React from "react";

export default function Index() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/topics");
  }, []);

  return null;
}
