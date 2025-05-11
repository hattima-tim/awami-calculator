"use client";

import { useState } from "react";
import ItemCard from "@/components/item-card";
import Receipt from "@/components/receipt";

// Define the item type
export type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description?: string;
};

export default function SpendMoneySimulator() {
  // Initial balance (about 100 billion)
  const initialBalance = 99_704_000_000;
  const [balance, setBalance] = useState(initialBalance);
  const [items, setItems] = useState<Item[]>([
    {
      id: "burger",
      name: "Burger",
      price: 5,
      image: "/burger.jpg?height=200&width=200",
      quantity: 0,
    },
    {
      id: "Cycle",
      name: "Cycle",
      price: 300,
      image: "/cycle.webp?height=200&width=200",
      quantity: 0,
    },
    {
      id: "smartphone",
      name: "Smartphone",
      price: 1000,
      image: "/iphone.jpg?height=400&width=200",
      quantity: 0,
    },

    {
      id: "ferrari",
      name: "Ferrari",
      price: 250_000,
      image: "/ferrari.jpg?height=200&width=200",
      quantity: 0,
    },
    {
      id: "mcdonalds",
      name: "McDonalds Franchise",
      price: 1_500_000,
      image: "/mcdonald.jpeg?height=200&width=200",
      quantity: 0,
    },
    {
      id: "m1",
      name: "M1 Abrams",
      price: 8_000_000,
      image: "/abrams.webp?height=200&width=200",
      quantity: 0,
      description:
        "M1A2 Abrams হলো একটি শক্তিশালী যুদ্ধ ট্যাংক, যা মার্কিন সেনাবাহিনী ব্যবহার করে।",
    },
    {
      id: "apache",
      name: "Apache Helicopter",
      price: 31_000_000,
      image: "/apache-helicopter.jpg?height=200&width=200",
      quantity: 0,
      description:
        "বিশ্বের সবচেয়ে প্রাণঘাতী হেলিকপ্টার হিসেবে পরিচিত অ্যাপাচি একটি সামরিক আক্রমণ হেলিকপ্টার, যা বিভিন্ন মিশনের জন্য ডিজাইন করা হয়েছে। এর মধ্যে রয়েছে আক্রমণাত্মক অভিযান, ISTAR (ইন্টেলিজেন্স, সার্ভেইলেন্স, টার্গেট অ্যাকুইজিশন এবং রিকনেসান্স), এবং কমান্ড ও কন্ট্রোল মিশন।",
    },
    {
      id: "plane",
      name: "F-22 Raptor",
      price: 143_000_000,
      image: "/plane.jpg?height=200&width=200",
      quantity: 0,
      description:
        "এফ-২২ কে সাধারণত এযাবৎকালের সেরা যুদ্ধবিমান হিসেবে গণ্য করা হয়।",
    },
    {
      id: "skyscraper",
      name: "Skyscraper",
      price: 850_000_000,
      image: "/skyscraper.jpg?height=200&width=200",
      quantity: 0,
    },

    {
      id: "submerine",
      name: "Ohio class nuclear powered ballistic missile and guided missiles submarines of US Navy",
      price: 2_000_000_000,
      image: "/ohio.jpg?height=200&width=200",
      quantity: 0,
      description:
        "ওহাইও-শ্রেণীর সাবমেরিনগুলো বিশ্বব্যাপী সবচেয়ে উন্নত এবং শক্তিশালী পারমাণবিক সাবমেরিনগুলোর মধ্যে অন্যতম হিসেবে বিবেচিত হয়। এগুলো মার্কিন নৌবাহিনী দ্বারা নির্মিত সবচেয়ে বড় সাবমেরিন এবং পারমাণবিক ক্ষেপণাস্ত্র উৎক্ষেপণে সক্ষম",
    },
    {
      id: "carrier",
      name: "USS Gerald R. Ford (CVN-78)",
      price: 12_998_000_000,
      image: "/carrier-aricraft.png?height=200&width=200",
      quantity: 0,
    },
  ]);

  // Handle buying an item
  const handleBuy = (itemId: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + 1;
          setBalance((prevBalance) => prevBalance - item.price);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Handle selling an item
  const handleSell = (itemId: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId && item.quantity > 0) {
          const newQuantity = item.quantity - 1;
          setBalance((prevBalance) => prevBalance + item.price);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Handle manual quantity change
  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          // Calculate the difference in quantity
          const quantityDiff = newQuantity - item.quantity;

          // Update the balance based on the quantity difference
          setBalance((prevBalance) => prevBalance - quantityDiff * item.price);

          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Get purchased items for the receipt
  const purchasedItems = items.filter((item) => item.quantity > 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Title card */}
      <div className="bg-gray-800 text-white text-center py-4 text-2xl md:text-3xl font-bold rounded-md mb-4 shadow-md border border-gray-700">
        আওয়ামী লীগের আমলে পাচারকৃত টাকার পরিমাণ
      </div>

      {/* Sticky header with balance */}
      <div className="sticky top-0 z-10">
        <div className="bg-red-800 text-white text-center py-6 text-4xl md:text-5xl font-bold rounded-md mb-6 shadow-lg">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(balance)}
        </div>
      </div>

      {/* Grid of items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onBuy={() => handleBuy(item.id)}
            onSell={() => handleSell(item.id)}
            onQuantityChange={(quantity) =>
              handleQuantityChange(item.id, quantity)
            }
            canBuy={balance >= item.price}
          />
        ))}
      </div>

      {/* Receipt section */}
      {purchasedItems.length > 0 && <Receipt items={purchasedItems} />}
    </div>
  );
}
