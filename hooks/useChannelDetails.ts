import { useQuery } from "@tanstack/react-query";
import { youtubeChannelDetails } from "lib/axios";
import { useEffect } from "react";

export default function useChannelDetails(url: string) {
  const fetchChannelDetails = async () => {
    const res = await youtubeChannelDetails(url);
    return res.data;
  };

  const {
    data,
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["channelDetailsQuery"],
    queryFn: fetchChannelDetails,
  });

  useEffect(() => {
    refetch();
  }, [url]);

  return { data, error, loading };
}
