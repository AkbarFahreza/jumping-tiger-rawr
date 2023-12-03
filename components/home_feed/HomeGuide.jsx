"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}

function HomeGuide() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/write");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched (success or error)
      }
    }

    fetchItems();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-6">
        <p className="mobile-heading-b text-pink  md:text-3xl">
          Might Help You
        </p>
        <button className="moreBtn">More</button>
      </div>
      {loading ? (
        // Render a loading spinner while fetching data
        <Loading />
      ) : (
        <div className="mt-4 flex flex-row space-x-4 whitespace-nowrap overflow-x-scroll pb-20">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col shrink-0 max-w-[250px]">
              <Image
                width={356}
                height={200}
                alt={item.title}
                className="w-[250px] rounded-md h-auto"
                src={item.thumbnail}
              />
              <div className="flex flex-col whitespace-normal mt-3">
                <h1 className="text-white mobile-title-b">{item.title}</h1>
                <p className="text-white text-xs mt-2">
                  {truncateText(item.desc, 100)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeGuide;
