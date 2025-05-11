"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import type { Item } from "@/components/spend-money-simulator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ItemCardProps {
  item: Item;
  onBuy: () => void;
  onSell: () => void;
  onQuantityChange: (quantity: number) => void;
  canBuy: boolean;
}

export default function ItemCard({
  item,
  onBuy,
  onSell,
  onQuantityChange,
  canBuy,
}: ItemCardProps) {
  const [inputValue, setInputValue] = useState<string>(
    item.quantity.toString()
  );

  // Keep input value in sync with item quantity
  useEffect(() => {
    setInputValue(item.quantity.toString());
  }, [item.quantity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty string or numbers
    if (value === "" || /^\d+$/.test(value)) {
      setInputValue(value);

      // Only update the actual quantity if the value is a valid number
      if (value !== "") {
        const newQuantity = Number.parseInt(value, 10);
        onQuantityChange(newQuantity);
      }
    }
  };

  const handleInputBlur = () => {
    // If the input is empty, reset to 0
    if (inputValue === "") {
      setInputValue("0");
      onQuantityChange(0);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-700">
      <div className="p-6 flex flex-col items-center">
        <div className="w-32 h-32 relative mb-4">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-xl font-semibold text-center text-white">
            {item.name}
          </h3>

          {item.description && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help text-gray-400 hover:text-gray-200">
                    <InfoIcon size={16} />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900 border-gray-700 text-white max-w-xs">
                  <p>{item.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <p className="text-red-500 font-bold text-xl mb-4">
          {formatCurrency(item.price)}
        </p>

        <div className="flex items-center w-full justify-between gap-2">
          <Button
            onClick={onSell}
            disabled={item.quantity <= 0}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            Sell
          </Button>

          <div className="w-20">
            <Input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className="text-center bg-gray-700 border-gray-600 text-white"
              min="0"
            />
          </div>

          <Button
            onClick={onBuy}
            disabled={!canBuy}
            className="bg-red-800 hover:bg-red-700 text-white"
          >
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
