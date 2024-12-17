"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";
import type { GlobalVariables } from "@/lib/contentful/getGlobalVariables";
import { GlobalVariablesProvider } from "@/context/globalContext.context";

interface ProvidersProps {
  children: ReactNode;
  globalVariables: GlobalVariables | null;
}

export default function Providers(props: ProvidersProps) {
  const { children, globalVariables } = props;

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalVariablesProvider value={globalVariables}>
        {children}
      </GlobalVariablesProvider>
    </QueryClientProvider>
  );
}
