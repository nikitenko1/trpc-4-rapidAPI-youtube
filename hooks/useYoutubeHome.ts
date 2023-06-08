import { useQuery } from "@tanstack/react-query";
import { youtubeHomeData } from "lib/axios";
import { useEffect } from "react";

export default function useYoutubeHome(url: string) {
  const fetchHomePage = async () => {
    const res = await youtubeHomeData(url);
    return res.data;
  };

  const {
    data,
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["homePageQuery"],
    queryFn: fetchHomePage,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [url]);

  return { data, error, loading };
}
