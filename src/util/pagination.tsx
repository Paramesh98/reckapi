import { charter } from "../types/dashboard.types";
import { useState, useEffect } from "react";

/**
 * usePagination
 * @param data offset limit
 * @returns []
 */
export const usePagination = ({
  data,
  offset,
  limit,
}: {
  data: charter[];
  offset: number;
  limit: number;
}) => {
  const [formatedData, setFormatedData] = useState<charter[]>([]);

  useEffect(() => {
    setFormatedData(data);
  }, [data]);
  return formatedData?.slice(offset, offset + limit);
};
