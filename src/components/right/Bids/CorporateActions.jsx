import { Search } from 'lucide-react';
import React from 'react'

const CorporateActions = () => {

    const bidsCount = [{
        no: "2",
    }]

    const bidsData = [
  {
    type: "TAKEOVER",
    symbol: "SBECSUG",
    startsAt: "Tue, 28 Oct 2025, 09:45",
    endsOn: "Wed, 12 Nov 2025, 13:00",
    offerPrice: 21.19,
  },
  {
    type: "TAKEOVER",
    symbol: "SHAMROIN",
    startsAt: "Thu, 30 Oct 2025, 08:30",
    endsOn: "Thu, 13 Nov 2025, 13:00",
    offerPrice: 16.40,
  },];


  return (
    <div>
        <div className='flex items-center justify-between border-b border-gray-300 px-3 pb-2'>

      <div className='flex gap-2 '>
        <span className='text-xl text-gray-700'>Corporate Actions</span>
        <span className='text-xl text-gray-700'>({bidsCount[0].no})</span>
      </div>
      <div className='flex border px-2 border-gray-300'>
        <span>
            <Search className='text-gray-600 w-3' />
        </span>
        <input type="text" placeholder='Search' className="w-full pl-1 rounded-md text-xs focus:outline-none focus:ring-blue-500"  />
      </div>
        </div>

         <div className="overflow-x-auto my-2 w-full">
      <table className="min-w-full border-collapse text-sm text-left">
        <thead className="border-b text-gray-600">
          <tr>
            <th className="py-3 px-4 font-semibold">Type</th>
            <th className="py-3 px-4 font-semibold">Symbol</th>
            <th className="py-3 px-4 font-semibold">Starts at</th>
            <th className="py-3 px-4 font-semibold">Ends on</th>
            <th className="py-3 px-4 font-semibold">Offer price</th>
          </tr>
        </thead>

        <tbody>
          {bidsData.map((bid, index) => (
            <tr
              key={index}
              className="border-b border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <td className="py-3 px-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                  {bid.type}
                </span>
              </td>

              <td className="py-3 px-4 font-medium text-gray-800">
                {bid.symbol}
              </td>

              <td className="py-3 px-4 text-gray-600 border-r border-gray-300">{bid.startsAt}</td>
              <td className="py-3 px-4 text-gray-600 border-r border-gray-300">{bid.endsOn}</td>

              <td className="py-3 px-4 flex items-center justify-between gap-2">
                <span className="text-gray-800">{bid.offerPrice}</span>
                <button className="bg-blue-500 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-blue-600 transition">
                  Place bid
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default CorporateActions
