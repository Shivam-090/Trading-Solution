import { BoxesIcon, CircleArrowRightIcon, PieChart } from "lucide-react";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const DashboardHome = () => {
  const [Equity] = useState([{ availabe: 0, used: 0, balance: 0 }]);
  const [Commodity] = useState([{ availabe: 0, used: 0, balance: 0 }]);

  const data = [
    { date: "Jan 25", value: 21800 },
    { date: "Feb 25", value: 22200 },
    { date: "Mar 25", value: 21000 },
    { date: "Apr 25", value: 22400 },
    { date: "May 25", value: 23800 },
    { date: "Jun 25", value: 23200 },
    { date: "Jul 25", value: 24000 },
    { date: "Aug 25", value: 24200 },
    { date: "Sep 25", value: 23600 },
    { date: "Oct 25", value: 25000 },
  ];

  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="bg-blue-200 flex items-center border-blue-400 border px-4 py-2">
        <span className="text-gray-800">
          Your account setup is complete and ready to transact. Happy investing!
        </span>
      </div>

      <div className="my-4">
        <p className="text-3xl text-gray-700">Hi, User</p>
      </div>

      <div className="mx-auto border-b border-gray-200"></div>

      <div className="my-4 ">
        <div className="flex jus items-center gap-3">
          <PieChart className="w-4 text-gray-700" />
          <span className=" text-gray-600">Equity</span>
        </div>
        <div className="grid gap-10 sm:flex items-center justify-center sm:gap-40">
          {Equity.map((item, index) => (
            <div key={index} className="flex gap-10 my-4">
              <div className="grid text-center">
                <span className="text-5xl font-light text-gray-600">
                  {item.availabe}
                </span>
                <span className="text-xs text-gray-400">Margin availabe</span>
              </div>
              <div className="grid gap-3 border-l border-gray-300 pl-4">
                <div className="flex items-center gap-7">
                  <span className="text-xs text-gray-400">Margin used: </span>
                  <span>{item.used}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-xs text-gray-400">
                    Opening balance:
                  </span>
                  <span className="text-gray-700">{item.balance}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CircleArrowRightIcon className="w-3 text-blue-500" />
                  <a
                    className="text-xs text-blue-500"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View statement
                  </a>
                </div>
              </div>
            </div>
          ))}
          {Commodity.map((item, index) => (
            <div key={index} className="flex gap-10 my-4">
              <div className="grid text-center">
                <span className="text-5xl font-light text-gray-600">
                  {item.availabe}
                </span>
                <span className="text-xs text-gray-400">Margin availabe</span>
              </div>
              <div className="grid gap-3 border-l border-gray-300 pl-4">
                <div className="flex items-center gap-7">
                  <span className="text-xs text-gray-400">Margin used: </span>
                  <span>{item.used}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-xs text-gray-400">
                    Opening balance:
                  </span>
                  <span className="text-gray-700">{item.balance}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CircleArrowRightIcon className="w-3 text-blue-500" />
                  <a
                    className="text-xs text-blue-500"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View statement
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-gray-200  border-b w-full my-6 "></div>

      <div className="flex items-center mx-auto justify-center">
        <div className="grid w-1/3 items-center justify-center gap-4">
          <BoxesIcon className="w-40 h-40 mx-auto text-gray-400" />
          <span className="text-gray-500 text-lg text-center">
            You don't have any stocks in your Demat yet. Get Started with
            absolutely free equity Investments.
          </span>
          <button
            onClick={handleToggle}
            className="text-white text-md bg-blue-400 w-2/3 mx-auto py-3 rounded-md cursor-pointer  border-blue-600 hover:bg-blue-300"
          >
            Start investing
          </button>
        </div>
      </div>

      <div className="border-gray-200  border-b w-full my-9 "></div>

      <div className="grid gap-10 sm:flex sm:gap-5 border-b border-gray-200 py-4 pb-8">
        <div className="sm:w-1/2">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="sm:w-1/2 grid items-center">
          <BoxesIcon className="w-20 h-20 mx-auto text-gray-400" />
          <span className="text-gray-500 text-lg text-center">
            You don't have any positions yet.
          </span>
          <button
            onClick={handleToggle}
            className="text-white text-md bg-blue-400 w-1/2 mx-auto py-3 rounded-md cursor-pointer  border-blue-600 hover:bg-blue-300"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
