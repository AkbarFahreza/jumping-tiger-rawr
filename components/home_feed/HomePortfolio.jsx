"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./LoadingGuide";

function HomePortfolio() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/pwortidokio");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-4 flex flex-row space-x-4 whitespace-nowrap overflow-x-scroll ">
          {items.map((item) => (
            <Link
              href={item.source_link}
              key={item.id}
              className="flex flex-col shrink-0 min-w-[200px]"
            >
              <Image
                width={200}
                height={200}
                alt={item.name}
                className="w-[200px] h-auto rounded-md"
                src={item.image}
              />
              <div className="mt-2">
                <h1 className="font-bold text-white ">{item.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePortfolio;
