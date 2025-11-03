import { CircleAlert, CircleCheck, Droplet, PieChart } from "lucide-react";
import React from "react";

const FundsHome = () => {
  const data = [
    { label: "Available margin", value: "0.00" },
    { label: "Used margin", value: "0.00" },
    { label: "Available cash", value: "0.00" },
  ];

  const otherData = [
    { label: "Opening balance", value: "0.00" },
    { label: "Payin", value: "0.00" },
    { label: "Payout", value: "0.00" },
    { label: "SPAN", value: "0.00" },
    { label: "Delivery margin", value: "0.00" },
    { label: "Exposure", value: "0.00" },
    { label: "Options premium", value: "0.00" },
    
  ];

  const otherData2 =[
    { label: "Collateral (Liquid funds)", value: "0.00" },
    { label: "Collateral (Equity)", value: "0.00" },
    { label: "Total collateral", value: "0.00" },
  ]


  return (
    <>
      <div className="flex gap-2 items-center justify-between">
        <div className="w-40 px-2 sm:w-60">
          <p className="text-xs text-gray-400">
            instant, zero-cost fund transfers with{" "}
            <span className="font-bold">UPI</span>{" "}
          </p>
        </div>
        <div className="flex gap-2">
          <button className="text-white bg-green-500 rounded-sm px-4 py-2 font-semibold text-sm">
            Add funds
          </button>
          <button className="text-white bg-blue-500 rounded-sm px-6 py-2 font-semibold text-sm">
            Withraw
          </button>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center px-2 justify-between py-3">
            <div className="flex items-center gap-2">
              <PieChart className="w-5 text-gray-700" />
              <span className="text-gray-700 text-lg">Equity</span>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 items-center flex gap-1">
                <CircleCheck className="w-3" />
                <a className="text-xs" href="#">
                  View statements
                </a>
              </div>
              <div className="text-blue-600 items-center flex gap-1">
                <CircleAlert className="w-3" />
                <a className="text-xs" href="#">
                  Help
                </a>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 p-6">
            <div className="border-b border-gray-300">
              {data.map((data, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{data.label}</span>
                  <span className="text-2xl py-2 text-gray-700">
                    {data.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-b border-gray-300 py-2">
              {otherData.map((data,idx)=>(
                <div key={idx} className="flex items-center justify-between py-2">
                  <span className="text-xs text-gray-500" >{data.label}</span>
                  <span className="text-sm text-gray-700">{data.value}</span>
                </div>
              ))}
            </div>

            <div className=" py-2">
              {otherData2.map((data,idx)=>(
                <div key={idx} className="flex items-center justify-between py-2">
                  <span className="text-xs text-gray-500" >{data.label}</span>
                  <span className="text-sm text-gray-700">{data.value}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        <div>
          <div className="flex items-center px-2 justify-between py-3">
            <div className="flex items-center gap-2">
              <Droplet className="w-5 text-gray-700" />
              <span className="text-gray-700 text-lg">Commodity</span>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 items-center flex gap-1">
                <CircleCheck className="w-3" />
                <a className="text-xs" href="#">
                  View statements
                </a>
              </div>
              <div className="text-blue-600 items-center flex gap-1">
                <CircleAlert className="w-3" />
                <a className="text-xs" href="#">
                  Help
                </a>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 p-6">
            <div className="border-b border-gray-300">
              {data.map((data, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{data.label}</span>
                  <span className="text-2xl py-2 text-gray-700">
                    {data.value}
                  </span>
                </div>
              ))}
            </div>
            <div className=" py-2">
              {otherData.map((data,idx)=>(
                <div key={idx} className="flex items-center justify-between py-2">
                  <span className="text-xs text-gray-500" >{data.label}</span>
                  <span className="text-sm text-gray-700">{data.value}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        
      </div>
    </>
  );
};

export default FundsHome;
