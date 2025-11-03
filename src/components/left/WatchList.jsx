import {
  ArrowDown,
  Plus,
  PlusCircle,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import React, { useState } from "react";

const WatchList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [activeList, setActiveList] = useState(1);

  const handleFilter = () => {
    setShowFilter(!showFilter);
    console.log(showFilter);
  };

  const [watchList] = useState([
    { id: 1, name: "Watchlist 1", count: 6, total: 25 },
    { id: 2, name: "Watchlist 2", count: 0, total: 0 },
    { id: 3, name: "Watchlist 3", count: 0, total: 0 },
    { id: 4, name: "Watchlist 4", count: 0, total: 0 },
  ]);
  const [stocks] = useState([
    {
      symbol: "HDFCBANK",
      exchange: "BSE",
      price: 1003.55,
      change: 0.65,
      changePercent: 0.06,
      trend: "up",
    },
    {
      symbol: "INFY",
      exchange: "EVENT",
      price: 1502.2,
      change: -2.3,
      changePercent: -0.15,
      trend: "down",
    },
    {
      symbol: "TCS",
      exchange: "BSE",
      price: 3056.85,
      change: -27.7,
      changePercent: -0.9,
      trend: "down",
    },
    {
      symbol: "ONGC",
      exchange: "",
      price: 250.54,
      change: -2.73,
      changePercent: -1.08,
      trend: "down",
    },
    {
      symbol: "HINDUNILVR",
      exchange: "BSE",
      price: 2499.4,
      change: -12.5,
      changePercent: -0.5,
      trend: "down",
    },
    {
      symbol: "GOLDBEES",
      exchange: "",
      price: 96.84,
      change: -3.3,
      changePercent: -3.3,
      trend: "down",
    },
  ]);

  const [lists] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ]);

  return (
    <div className="bg-white flex flex-col min-h-[96vh] lg:min-h-screen">
      {/* Search Section */}

      <div className=" py-3 px-4 ">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search eg: infy bse, nifty fut,index fund, etc"
              className="w-full pl-10 py-2 border rounded-md text-xs focus:outline-none focus:ring-blue-500"
            />
            <span className="absolute border rounded-md p-1 right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
              Ctrl + K
            </span>
          </div>
          <span className="border-r border-gray-300 h-7"></span>

          {/* Filter Section */}

          <button className="p-2 relative hover:bg-gray-100 rounded-md">
            <SlidersHorizontal
              onClick={handleFilter}
              className="w-5 h-5 cursor-pointer text-gray-600"
            />
            {showFilter == true && (
              <div className="absolute z-10 w-[430px] border border-gray-300 py-3 rounded-xs shadow-2xl bg-white top-10 right-0">
                <div className="flex justify-between items-center px-4">
                  <span className="text-sm text-gray-600 font-semibold">
                    Change Type
                  </span>
                  <div className="grid grid-cols-2  items-start gap-7 px-6">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="changeType" id="closePrice" />
                      <label
                        className="text-xs font-semibold text-gray-500"
                        htmlFor="closePrice"
                      >
                        Close price
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" name="changeType" id="openPrice" />
                      <label
                        className="text-xs font-semibold text-gray-500"
                        htmlFor="openPrice"
                      >
                        Open price
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mx-5 h-1 border-b border-gray-200 py-2"></div>

                <div className="flex justify-between items-center py-3 px-4">
                  <span className="text-sm text-gray-600 font-semibold">
                    Show
                  </span>

                  <div className="grid grid-cols-2  items-center gap-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" name="show" id="priceChange" />

                      <label
                        className="text-xs font-semibold text-gray-500"
                        htmlFor="priceChange"
                      >
                        Price change
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="checkbox" name="show" id="priceChangePer" />
                      <label
                        className="text-xs font-semibold text-gray-500"
                        htmlFor="priceChangePer"
                      >
                        Price change %
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="checkbox" name="show" id="priceDirection" />
                      <label
                        className="text-xs font-semibold text-gray-500"
                        htmlFor="priceDirection"
                      >
                        Price Direction
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="checkbox" name="show" id="holding" />
                      <label
                        className="text-xs font-semibold text-gray-500"
                        htmlFor="holding"
                      >
                        Holding
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="checkbox" name="show" id="notes" />
                      <label
                        className="text-xs font-semibold text-gray-500"
                        htmlFor="notes"
                      >
                        Notes
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="checkbox" name="show" id="groupColors" />
                      <label
                        className="text-xs font-semibold text-gray-500"
                        htmlFor="groupColors"
                      >
                        Group colors
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mx-5 h-1 border-b border-gray-200 mb-3 py-2"></div>

                <div className="flex justify-between items-center px-4">
                  <span className="text-sm text-gray-600 font-semibold">
                    Sort BY
                  </span>

                  <div className="flex items-center gap-2 px-3">
                    <div>
                      <span className="hover:border-blue-400 hover:bg-blue-200 border px-6 py-1 rounded-sm border-gray-500 text-sm ">
                        %
                      </span>
                    </div>
                    <div>
                      <span className="hover:border-blue-400 hover:bg-blue-200 border px-5 py-1 rounded-sm border-gray-500 text-gray-500 font-medium text-sm ">
                        LTP
                      </span>
                    </div>
                    <div>
                      <span className="hover:border-blue-400 hover:bg-blue-200  border px-5 py-1 rounded-sm border-gray-500 text-gray-500 font-medium text-sm ">
                        A-Z
                      </span>
                    </div>
                    <div>
                      <span className="hover:border-blue-400 hover:bg-blue-200  border px-4 py-1 rounded-sm border-gray-500 text-gray-500 font-medium text-sm ">
                        EXCH
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end px-8 py-2">
                  <span className="text-xs text-gray-600 ">
                    Sort items within a group
                  </span>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Watchlist Section */}

      <div className="px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">
            {watchList[0].name} ({watchList[0].count} / {watchList[0].total})
          </span>
        </div>
        <button className="text-blue-600 text-xs flex items-center gap-1 hover:text-blue-700">
          <Plus className="w-4 h-4" />
          New group
        </button>
      </div>

      <div className="m-4">
        <div className="border-gray-300 border ">
          <div className="flex gap-2 px-3 items-center bg-gray-100">
            <span className="font-medium">Default</span>
            <span className="text-sm text-gray-500">
              ({watchList[0].count})
            </span>
          </div>
          {stocks.map((stocks, idx) => (
            <div
              key={idx}
              className="flex  justify-between hover:bg-gray-50 cursor-pointer border border-gray-100"
            >
              <div className="flex px-2  items-end gap-2">
                <span
                  className={`mt-1 mb-1 ${
                    stocks.changePercent < 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stocks.symbol}
                </span>
                {stocks.exchange && (
                  <span className="text-gray-400 text-[10px]">
                    {stocks.exchange}
                  </span>
                )}
              </div>
              <div className="flex items-center text-right justify-between w-60 gap-3 px-2">
                <span className="text-gray-400 w-20 text-sm">
                  {stocks.change.toFixed(2)}
                </span>
                <div className="flex items-center w-18 gap-1">
                  <div>
                    <span className="text-sm text-gray-500">
                      ({stocks.changePercent.toFixed(2)})
                    </span>
                    <span className="text-xs text-gray-500">%</span>
                  </div>
                  {stocks.trend === "up" ? (
                    <ArrowDown className="w-4 h-4 text-red-400" />
                  ) : (
                    <ArrowDown className="w-4 h-4 rotate-180 text-green-400" />
                  )}
                </div>
                <span
                  className={`text-sm w-20 ${
                    stocks.changePercent < 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stocks.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Section */}

      <div className="mt-auto mb-12">
        <div className=" w-full px-4 border-t flex items-center justify-between gap-4 overflow-y-hidden text-gray-400 text-sm">
          {lists.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveList(item.id)}
              className={`
                        px-4 py-2 rounded-md transition
                        ${
                          activeList === item.id
                            ? "bg-blue-500 w-[70px] text-white shadow-md scale-105"
                            : " hover:bg-gray-200 text-gray-600"
                        }`}
            >
              {item.id}
            </button>
          ))}

          <div>
            <PlusCircle className="hover:text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
