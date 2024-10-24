import { useQuery } from "@tanstack/react-query";

import { getMetadata } from "libs";
// implements custom hooks with tanstack query for asynchronous state management
// concepts described here: https://tkdodo.eu/blog/react-query-as-a-state-manager
// more on query key structure: https://tkdodo.eu/blog/effective-react-query-keys#structure
// more on dependent queries: https://tanstack.com/query/v3/docs/react/guides/dependent-queries

export const useMetadata = (user) => {
  // set to an empty array if enumerated function parameters are not available in array
  const queryKey = [user].every(param => param != null) ? ["tableau", user, "metadata"] : [];

  return useQuery({
    queryKey: queryKey,
    queryFn: () => {
      return getMetadata();
    },
    enabled: !!user,
    retry: 3,
    staleTime: 10 * 60 * 1000, // 10 minutes
    cacheTime: 5 * 60 * 1000, // 5 minutes
  });
}
