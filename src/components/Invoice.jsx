import React from "react"

const Invoice = (props) => {
  return (
    <div className="w-full flex flex-col p-6 gap-6 bg-white rounded-xl shadow-lg // max-xl:p-5 max-xl:gap-5 // max-lg:p-4 max-lg:gap-4">
      <div className="flex flex-row justify-between items-center ">
        <h1 className="text-dark-blue font-semibold text-xl // max-lg:text-lg">Quick Invoice</h1>
        <img src="/icon/add.svg" alt="" className="w-12 bg-[#fafafa] p-3 rounded-full // max-lg:w-10 max-lg:p-2" />
      </div>

      <div className="flex flex-col gap-3 // max-lg:gap-2">
        <h3 className="text-base font-medium text-dark-blue // max-lg:text-sm">Latest Transaction</h3>

        <div className="flex flex-row overflow-x-scroll gap-3 pb-2 // max-lg:gap-2 max-lg:pb-1">
          <div className="min-w-fit p-3 flex flex-row items-center justify-between gap-3 rounded-lg bg-[#f0f0f0] // max-lg:p-2 max-lg:gap-2">
            <img src="/icon/default-profile.svg" alt="" className="w-8" />
            <div className="flex flex-col ">
              <h1 className="text-base font-semibold text-[#064061] // max-lg:text-sm">Lekan Okeowo</h1>
              <h2 className="text-[#aaa] text-xs // max-lg:text-[10px]">demo@gmail.com</h2>
            </div>
          </div>
          <div className="min-w-fit p-3 flex flex-row items-center justify-between gap-3 rounded-lg bg-[#f0f0f0] // max-lg:p-2 max-lg:gap-2">
            <img src="/icon/default-profile.svg" alt="" className="w-8" />
            <div className="flex flex-col ">
              <h1 className="text-base font-semibold text-[#064061] // max-lg:text-sm">Lekan Okeowo</h1>
              <h2 className="text-[#aaa] text-xs // max-lg:text-[10px]">demo@gmail.com</h2>
            </div>
          </div>
          <div className="min-w-fit p-3 flex flex-row items-center justify-between gap-3 rounded-lg bg-[#f0f0f0] // max-lg:p-2 max-lg:gap-2">
            <img src="/icon/default-profile.svg" alt="" className="w-8" />
            <div className="flex flex-col ">
              <h1 className="text-base font-semibold text-[#064061] // max-lg:text-sm">Lekan Okeowo</h1>
              <h2 className="text-[#aaa] text-xs // max-lg:text-[10px]">demo@gmail.com</h2>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="grid grid-cols-2 gap-4 // max-xl:gap-3 ">
          <div className="flex flex-col gap-3 // max-lg:gap-2">
            <h5 className="text-base text-dark-blue font-medium // max-lg:text-sm">Customer Name</h5>
            <input type="text" className="bg-[#f0f0f0] p-5 rounded-xl outline-primary-blue // max-xl:p-4" placeholder="Type customer name"/>
          </div>
          <div className="flex flex-col gap-3 // max-lg:gap-2">
            <h5 className="text-base text-dark-blue font-medium // max-lg:text-sm">Customer Email</h5>
            <input type="text" className="bg-[#f0f0f0] p-5 rounded-xl outline-primary-blue // max-xl:p-4" placeholder="Type customer email"/>
          </div>
          <div className="flex flex-col gap-3 // max-lg:gap-2">
            <h5 className="text-base text-dark-blue font-medium // max-lg:text-sm">Item Name</h5>
            <input type="text" className="bg-[#f0f0f0] p-5 rounded-xl outline-primary-blue // max-xl:p-4" placeholder="Type item name"/>
          </div>
          <div className="flex flex-col gap-3 // max-lg:gap-2">
            <h5 className="text-base text-dark-blue font-medium // max-lg:text-sm">Item Mount</h5>
            <select className="bg-[#f0f0f0] p-5 rounded-xl outline-primary-blue select-custom cursor-pointer // max-xl:p-4 ">
              <option value="USD">USD</option>
            </select>
          </div>

          {/* button */}
          <button className="text-lg font-semibold text-primary-blue py-5 // max-lg:text-base">Add More Detail</button>
          <button className="text-lg font-semibold text-white bg-primary-blue py-5 rounded-xl // max-lg:text-base">Add More Detail</button>
        </div>

      </div>
    </div>
  )
};

export default Invoice;
