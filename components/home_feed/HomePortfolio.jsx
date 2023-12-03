"use client";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Image from "next/image";
import Link from "next/link";

function HomePortfolio() {
  const [items, setItems] = useState([]);
  const [originalDataLength, setOriginalDataLength] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/portfolio");
        const data = await response.json();
        setOriginalDataLength(data[0].data.length);
        const commissionItems = data[0].data.filter(
          (item) => item.category === "YT Chat Commissions"
        );
        const sortedCommissionItems = commissionItems.sort(
          (a, b) => b.id - a.id
        );
        const top4CommissionItems = sortedCommissionItems.slice(0, 4);

        setItems(top4CommissionItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  return (
    <div className="flex flex-col md:mt-6">
      <div className="flex flex-row justify-between align-middle">
        <p className="mobile-heading-b font-bold text-pink md:text-2xl">
          Portfolio
        </p>
        <button href="/portfolio" className="moreBtn">
          More
        </button>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-4  flex flex-row space-x-4 lg:space-x-8 whitespace-nowrap overflow-x-scroll">
          {items.map((item) => (
            <Link
              href={item.sourceLink} // Update to use "sourceLink" instead of "source_link"
              key={item.id}
              className="flex flex-col shrink-0 min-w-[200px] lg:pb-6"
            >
              <Image
                width={200}
                height={200}
                alt={item.name}
                className="w-[200px] h-auto rounded-md lg:w-[250px]"
                src={item.image}
              />
              <div className="mt-2">
                <h1 className="font-bold mobile-title-b text-white lg:text-md">
                  {item.name}
                </h1>
              </div>
            </Link>
          ))}
          <Link
            href="/portfolio"
            className="h-[200px] lg:h-[250px] w-4 p-4 relative  bg-purple/25"
          >
            <p className="mx-auto align-middle  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 font-bold text-white lg:text-2xl">
              {originalDataLength - 4}+ More
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default HomePortfolio;
