import type React from "react";

interface MoneyBagIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const MoneyBagIcon: React.FC<MoneyBagIconProps> = ({
  className = "",
  width = 40,
  height = 40,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bag string/tie */}
      <path
        d="M40 20C40 20 45 10 50 10C55 10 60 20 60 20"
        stroke="#D1D5DB"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Money bag */}
      <path
        d="M30 25C30 25 25 15 40 15H60C75 15 70 25 70 25L85 50C85 50 95 80 75 95L65 105C65 105 55 115 35 105L25 95C25 95 5 80 15 50L30 25Z"
        fill="#FFD700"
        stroke="#B7791F"
        strokeWidth="2"
      />

      {/* Dollar sign on bag */}
      <path
        d="M50 35C45 35 42 38 42 42C42 46 45 48 50 49C55 50 58 52 58 56C58 60 55 63 50 63C45 63 42 60 42 56"
        stroke="#B7791F"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="30"
        x2="50"
        y2="35"
        stroke="#B7791F"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="63"
        x2="50"
        y2="68"
        stroke="#B7791F"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Crack in the bag */}
      <path
        d="M60 75C60 75 70 85 75 90C80 95 85 90 85 90"
        stroke="#B7791F"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Coins falling out */}
      <circle cx="75" cy="95" r="5" fill="#FFD700" stroke="#B7791F" />
      <circle cx="85" cy="105" r="4" fill="#FFD700" stroke="#B7791F" />
      <circle cx="90" cy="115" r="3" fill="#FFD700" stroke="#B7791F" />

      {/* Bill falling out */}
      <rect
        x="65"
        y="100"
        width="12"
        height="6"
        rx="1"
        fill="#4CAF50"
        stroke="#2E7D32"
        strokeWidth="1"
        transform="rotate(30 65 100)"
      />
    </svg>
  );
};

export default MoneyBagIcon;
