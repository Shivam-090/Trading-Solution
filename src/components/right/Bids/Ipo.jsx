import { ArrowBigRight, ArrowRight, BoxesIcon, Search } from 'lucide-react'
import React from 'react'

const Ipo = () => {
    const ipoNo = [
        {no: 2},]

    const ipoData = [
    {
      name: "TRADEUNO",
      tag: "SME",
      company: "Game Changers Texfab",
      date: "28th — 30th Oct",
      price: "96 - 102",
      minAmount: "244800",
      quantity: "2400",
      status: "CLOSED",
    },
    {
      name: "STUDDS",
      company: "Studds Accessories",
      date: "30th Oct — 3rd Nov",
      price: "557 - 585",
      minAmount: "14625",
      quantity: "25",
      status: "Apply",
    },
    {
      name: "SAFECURE",
      tag: "SME",
      company: "Safecure Services",
      date: "29th — 31st Oct",
      price: "102",
      minAmount: "244800",
      quantity: "2400",
      status: "CLOSED",
    },
    {
      name: "ORKLAINDIA",
      company: "Orkla India",
      date: "29th — 31st Oct",
      price: "695 - 730",
      minAmount: "14600",
      quantity: "20",
      status: "CLOSED",
    },
    {
      name: "MIDWESTLTD",
      company: "Midwest",
      date: "15th — 17th Oct",
      price: "1014 - 1065",
      minAmount: "14910",
      quantity: "14",
      status: "CLOSED",
    },
    {
      name: "LENSKART",
      company: "Lenskart Solutions",
      date: "31st Oct — 4th Nov",
      price: "382 - 402",
      minAmount: "14874",
      quantity: "37",
      status: "Apply",
    },
    {
      name: "JAYESH",
      tag: "SME",
      company: "Jayesh Logistics",
      date: "27th — 29th Oct",
      price: "116 - 122",
      minAmount: "244000",
      quantity: "2000",
      status: "CLOSED",
    },
  ];

  return (
    <div >
      <div className='flex items-center justify-between border-b border-gray-300 px-3 pb-2'>

      <div className='flex gap-2 '>
        <span className='text-xl text-gray-700'>IPOs</span>
        <span className='text-xl text-gray-700'>({ipoNo[0].no})</span>
      </div>
      <div className='flex border px-2 border-gray-300'>
        <span>
            <Search className='text-gray-600 w-3' />
        </span>
        <input type="text" placeholder='Search' className="w-full pl-1 rounded-md text-xs focus:outline-none focus:ring-blue-500"  />
      </div>
        </div>
         <div className="overflow-x-auto w-full my-2">
      <table className="w-full border-collapse text-sm text-left">
        <thead className="border-b bg-gray-100 text-gray-600">
          <tr>
            <th className="py-3 px-4 font-semibold">Instrument</th>
            <th className="py-3 px-4 font-semibold">Date</th>
            <th className="py-3 px-4 font-semibold">Price (₹)</th>
            <th className="py-3 px-4 font-semibold">Min. amount (₹)</th>
          </tr>
        </thead>

        <tbody>
          {ipoData.map((ipo, index) => (
            <tr
              key={index}
              className="border-b border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <td className="py-3 sm:px-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-800">
                      {ipo.name}
                    </span>
                    {ipo.tag && (
                      <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">
                        {ipo.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs">{ipo.company}</p>
                </div>
              </td>

              <td className="py-3 sm:px-4 text-gray-600">{ipo.date}</td>

              <td className="py-3 sm:px-4 text-gray-700">{ipo.price}</td>

              <td className="py-3 sm:px-4 text-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <p>{ipo.minAmount}</p>
                  <p className="text-xs text-gray-500">{ipo.quantity} Qty.</p>
                </div>

                {ipo.status === "Apply" ? (
                  <button className="bg-blue-500 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-600 transition">
                    Apply
                  </button>
                ) : (
                  <button className="bg-gray-200 text-gray-600 px-3 py-1.5 rounded text-xs font-medium cursor-not-allowed">
                    CLOSED
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className='text-blue-500 flex gap-1 items-center justify-center text-xs'>
      <a href="">Didn't see an IPO her? view upcoming</a>
      <ArrowRight className='w-3' />
    </div>
     <div className="w-1/2  gap-4 grid mx-auto border-t border-gray-300 py-7 my-9 justify-center items-center">
          <BoxesIcon className="w-20 h-20 mx-auto text-gray-400" />
          
          

          <span className="text-gray-500 text-lg text-center">
            There are no active IPO applications
          </span>
         
          
          
          </div>
    </div>
  )
}

export default Ipo
