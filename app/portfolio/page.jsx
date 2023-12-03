"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function HomePortfolio() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [originalDataLength, setOriginalDataLength] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending order

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/portfolio");
        const data = await response.json();
        setOriginalDataLength(data[0].data);
        setItems(data[0].data);

        // Extract unique categories from the data
        const uniqueCategories = Array.from(
          new Set(data[0].data.map((item) => item.category))
        );
        setCategories(uniqueCategories);

        // Set the default active category (you can modify this logic as per your requirements)
        setActiveCategory(
          uniqueCategories.length > 0 ? uniqueCategories[0] : null
        );
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    fetchItems();
  }, []);

  const handleTabClick = (category) => {
    setActiveCategory(category);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  // Group items first by category and then by Datecreated
  const groupedItems = items.reduce((grouped, item) => {
    const category = item.category;
    const date = item.Datecreated;

    if (!grouped[category]) {
      grouped[category] = {};
    }

    if (!grouped[category][date]) {
      grouped[category][date] = [];
    }

    grouped[category][date].push(item);
    return grouped;
  }, {});

  const sortDates = (dates) => {
    return dates.sort((a, b) => {
      const dateA = new Date(a);
      const dateB = new Date(b);

      if (sortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  };

  return (
    <div className="flex flex-col mobile-container pb-20">
      <div className="mt-2 flex  flex-row space-x-4 ">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleTabClick(category)}
            className={` ${activeCategory === category ? "active-tab" : "tab"}`}
          >
            {category}
          </button>
        ))}
        {/* <button onClick={toggleSortOrder}>
          {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
        </button> */}
      </div>

      <div className="mt-4">
        {/* Render content for the active category */}
        {groupedItems[activeCategory] &&
          Object.entries(groupedItems[activeCategory])
            .sort(([dateA], [dateB]) => {
              const dateArray = sortDates([dateA, dateB]);
              return dateArray[0] === dateA ? -1 : 1;
            })
            .map(([date, itemsForDate]) => (
              <div key={date} className="mb-4">
                <h2 className="font-bold text-pink text-xl md:text-2xl mb-4">
                  {date}
                </h2>
                <div className="flex flex-row  gap-4  whitespace-nowrap overflow-x-scroll">
                  {/* Render items for the current date */}
                  {itemsForDate.map((item) => (
                    <Link
                      href={item.sourceLink}
                      key={item.id}
                      className="flex flex-col shrink-0 min-w-[100px] scale-95 hover:scale-100 transition-all duration-200"
                    >
                      <Image
                        width={200}
                        height={200}
                        alt={item.name}
                        className="w-[200px] h-auto rounded-md"
                        src={item.image}
                      />
                      <div className="mt-2">
                        <h1 className="font-bold mobile-subtitle-b text-center text-white">
                          {item.name}
                        </h1>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default HomePortfolio;
