import { getAllCarLines } from "@/queries/car.query";
import { useEffect, useState } from "react";

export const useFetchCarLines = () => {
  const [carLines, setCarLines] = useState<any[]>([]);

  const fetchDataHandler = async () => {
    const carLines: any[] = await getAllCarLines();
    setCarLines(carLines);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return carLines;
};
