import { useEffect, useState } from "react";
import CuisineCard, { ICuisine } from "../CuisineCard";
import { v4 as uuidv4 } from "uuid";

export default function CuisinesCard({ cuisines, tag }: any) {
  const [items, setItems] = useState<any>();

  const getCuisines = async () => {
    try {
      const response = await cuisines.cuisines();
      response.forEach((item: ICuisine) => {
        item.tags = tag;
        item.id = uuidv4();
      });
      setItems(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCuisines();
  }, []);

  return (
    <>
      {items?.map((item: any) => {
        return <CuisineCard key={item.id} cuisine={item} />;
      })}
    </>
  );
}
