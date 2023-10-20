import React from "react"
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-row w-full min-h-screen py-10 pr-6 bg-[#F7F9FA] gap-8 // max-xl:gap-6 max-xl:py-6 max-xl:pr-4">

      <Sidebar/>

      {/* Center */}
      <div className="w-[40%] flex flex-col gap-5 // max-xl:gap-4">

        {/* Expenses */}
        <div className="w-full flex flex-col bg-white p-5 gap-4 rounded-xl shadow-lg">
          {/* header */}
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl font-semibold text-dark-blue">All Expenses</h1>
            <select className="flex flex-row p-3 gap-4 rounded-xl border-2 border-[#f1f1f1] pr-10 select-custom cursor-pointer outline-primary-blue" >
              <option value="monthly">Monthly</option>
              <option value="monthly">Yearly</option>
            </select>
          </div>
          {/* cards */}
          <div className="flex flex-row gap-3">

            <div className="flex flex-col w-full p-5 gap-8 bg-primary-blue rounded-xl cursor-pointer">
              <div className="flex flex-row justify-between">
                <img src="/icon/money.svg" alt="" className="min-w-8 p-3 rounded-full bg-[#ffffff20]" />
                <img src="/icon/arrow-white.svg" alt="" className="w-6"/>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-base font-semibold text-white">Balance</h3>
                <h4 className="text-sm text-[#fafafa]">April 2022</h4>
                <h1 className="text-2xl font-semibold text-white mt-2">$20,129</h1>
              </div>
            </div>

            <div className="flex flex-col w-full p-5 gap-8 bg-white rounded-xl border-2 border-[#f1f1f1] cursor-pointer">
              <div className="flex flex-row justify-between">
                <img src="/icon/card-receive.svg" alt="" className="min-w-8 p-3 rounded-full bg-[#f7f7f7]" />
                <img src="/icon/arrow.svg" alt="" className="w-6 -rotate-90"/>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-base font-semibold text-dark-blue">Income</h3>
                <h4 className="text-sm text-[#aaa]">April 2022</h4>
                <h1 className="text-2xl font-semibold text-primary-blue mt-2">$20,129</h1>
              </div>
            </div>

            <div className="flex flex-col w-full p-5 gap-8 bg-white rounded-xl border-2 border-[#f1f1f1] cursor-pointer">
              <div className="flex flex-row justify-between">
                <img src="/icon/card-receive.svg" alt="" className="min-w-8 p-3 rounded-full bg-[#f7f7f7]" />
                <img src="/icon/arrow.svg" alt="" className="w-6 -rotate-90"/>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-base font-semibold text-dark-blue">Expenses</h3>
                <h4 className="text-sm text-[#aaa]">April 2022</h4>
                <h1 className="text-2xl font-semibold text-primary-blue mt-2">$20,129</h1>
              </div>
            </div>


          </div>
        </div>

        {/* Invoice */}
        <div className="w-full flex flex-col p-6 gap-6 bg-white rounded-xl shadow-lg">
          <div className="flex flex-row justify-between items-center ">
            <h1 className="text-dark-blue font-semibold text-xl">Quick Invoice</h1>
            <img src="/icon/add.svg" alt="" className="w-12 bg-[#fafafa] p-3 rounded-full" />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-base font-medium text-dark-blue">Latest Transaction</h3>
            <div className="flex flex-row overflow-x-scroll gap-3 pb-2">
              <div className="min-w-fit p-3 flex flex-row gap-3 rounded-lg bg-[#f0f0f0]">
                <img src="/icon/default-profile.svg" alt="" className="w-8" />
                <div className="flex flex-col ">
                  <h1 className="text-base font-semibold text-[#064061]">Lekan Okeowo</h1>
                  <h2 className="text-[#aaa] text-xs">demo@gmail.com</h2>
                </div>
              </div>
              <div className="min-w-fit p-3 flex flex-row gap-3 rounded-lg bg-[#f0f0f0]">
                <img src="/icon/default-profile.svg" alt="" className="w-8" />
                <div className="flex flex-col">
                  <h1 className="text-base font-semibold text-[#064061]">Lekan Okeowo</h1>
                  <h2 className="text-[#aaa] text-xs">demo@gmail.com</h2>
                </div>
              </div>
              <div className="min-w-fit p-3 flex flex-row gap-3 rounded-lg bg-[#f0f0f0]">
                <img src="/icon/default-profile.svg" alt="" className="w-8" />
                <div className="flex flex-col">
                  <h1 className="text-base font-semibold text-[#064061]">Lekan Okeowo</h1>
                  <h2 className="text-[#aaa] text-xs">demo@gmail.com</h2>
                </div>
              </div>
            </div>

            {/* form */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <h5 className="text-base text-dark-blue font-medium">Customer Name</h5>
                <input type="text" className="bg-[#f0f0f0] p-5 rounded-xl outline-primary-blue" placeholder="Type customer name"/>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-base text-dark-blue font-medium">Customer Email</h5>
                <input type="text" className="bg-[#f0f0f0] p-5 rounded-xl outline-primary-blue" placeholder="Type customer email"/>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-base text-dark-blue font-medium">Item Name</h5>
                <input type="text" className="bg-[#f0f0f0] p-5 rounded-xl outline-primary-blue" placeholder="Type item name"/>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-base text-dark-blue font-medium">Item Mount</h5>
                <select className="bg-[#f0f0f0] p-5 rounded-xl outline-primary-blue select-custom cursor-pointer">
                  <option value="USD">USD</option>
                </select>
              </div>

              {/* button */}
              <button className="text-lg font-semibold text-primary-blue py-5">Add More Detail</button>
              <button className="text-lg font-semibold text-white bg-primary-blue py-5 rounded-xl">Add More Detail</button>
            </div>

          </div>
        </div>

      </div>

      {/* My Card */}
      <div className="bg-white w-max flex-1 flex flex-col gap-5 p-6 rounded-xl shadow-lg">
        <h1 className="text-xl font-semibold text-dark-blue">My Card</h1>

        {/* card */}
        <div className=" border-b-2">

          <div className="w-full rounded-xl px-7 py-5 flex flex-col gap-12 bg-cover bg-center" style={{backgroundImage:'url(/icon/blob.svg)'}}>
            <div className="flex flex-row justify-between items-center">
              <div>
                <h2 className="text-base text-white">Name Card</h2>
                <h1 className="text-xl font-medium text-white">Syah Bandi</h1>
              </div>
              <img src="/icon/gallery.svg" alt="" className="w-6" />
            </div>
            <div className="flex flex-col items-end">
              <p className="text-2xl font-semibold text-white">0918 8124 0042 8129</p>
              <p className="text-base text-white">12/20 - 124</p>
            </div>
          </div>

          {/* nav */}

          <ul className="flex flex-row gap-2 my-5">
            <li className="w-12 h-4 bg-primary-blue rounded-2xl cursor-pointer"></li>
            <li className="w-4 h-4 bg-slate-300 hover:bg-slate-400 rounded-full cursor-pointer"></li>
            <li className="w-4 h-4 bg-slate-300 hover:bg-slate-400 rounded-full cursor-pointer"></li>
          </ul>

        </div>

        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-xl font-semibold text-dark-blue">Transaction History</h1>
            <p className="text-base font-medium text-[#aaa]">13 April 2022</p>
          </div>
          <button className="text-base font-medium text-primary-blue">See All</button>
        </div>

        <div className="flex flex-col gap-3">

          <div className="flex flex-row justify-between p-4 rounded-xl bg-[#f0f0f0] items-center">
            <div>
              <h2 className="text-base font-semibold text-dark-blue">Cash Withdrawal</h2>
              <p className="text-base text-[#aaa]">13 April 2022</p>
            </div>
            <div>
              <h1 className="text-xl text-[#F3735E] font-semibold">$30,129</h1>
            </div>
          </div>
          <div className="flex flex-row justify-between p-4 rounded-xl bg-[#f0f0f0] items-center">
            <div>
              <h2 className="text-base font-semibold text-dark-blue">Cash Withdrawal</h2>
              <p className="text-base text-[#aaa]">13 April 2022</p>
            </div>
            <div>
              <h1 className="text-xl text-[#7DD97B] font-semibold">$30,129</h1>
            </div>
          </div>

        </div>
  
      </div>

    </div>
  )
};

export default Dashboard;
