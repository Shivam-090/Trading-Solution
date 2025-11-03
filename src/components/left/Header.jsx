import React, { useState } from "react";

const Header = () => {
  const data = useState([
    { symbol: "NIFTY 50", value: "25936.20", change: "-29.85 (-0.11%)" },
    { symbol: "SENSEX", value: "84628.26", change: "-150.68 (-0.18%)" },
  ]);

  return (
    <div className="border-b border-gray-300 bg-gray-100 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {data[0].map((data, idx) => (
          <div key={idx} className="flex items-center gap-1">
            <span className="font-semibold text-sm text-gray-700">
              {data.symbol}
            </span>
            <span className="text-red-600 text-sm font-semibold">
              {data.value}
            </span>
            <span className=" text-gray-400 font-medium text-xs">
              {data.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
