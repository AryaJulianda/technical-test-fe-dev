import React from "react"
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-row w-full min-h-screen bg-[#F7F9FA] gap-8">

      <Sidebar/>

      {/* Center */}
      <div className="w-[40%]">

        {/* Expenses */}
        <div className="w-full flex flex-col bg-white my-10 p-5 gap-4">
          {/* header */}
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl font-semibold text-dark-blue">All Expenses</h1>
            <div className="flex flex-row p-3 gap-4 rounded-xl border-2 border-[#f1f1f1]" >
              <p>Monthly</p>
              <img src="/icon/arrow.svg" alt="" />
            </div>
          </div>
          {/* cards */}
          <div className="flex flex-row gap-3">

            <div className="flex flex-col w-full p-5 gap-8 bg-primary-blue rounded-xl">
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

            <div className="flex flex-col w-full p-5 gap-8 bg-white rounded-xl border-2 border-[#f1f1f1]">
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

            <div className="flex flex-col w-full p-5 gap-8 bg-white rounded-xl border-2 border-[#f1f1f1]">
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
        <div className="w-full flex flex-col p-6 gap-6 bg-white rounded-xl">
          <div className="flex flex-row justify-between items-center ">
            <h1 className="text-dark-blue font-semibold text-xl">Quick Invoice</h1>
            <img src="/icon/add.svg" alt="" className="w-12 bg-[#fafafa] p-3 rounded-full" />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-base font-medium text-dark-blue">Latest Transaction</h3>
            <div className="flex flex-row overflow-x-scroll scrollbar-">
              <div className="min-w-fit p-3 flex flex-row gap-3">
                <img src="/icon/default-profile.svg" alt="" className="w-8" />
                <div className="flex flex-col">
                  <h1 className="text-base font-semibold text-[#064061]">Lekan Okeowo</h1>
                  <h2 className="text-[#aaa] text-xs">demo@gmail.com</h2>
                </div>
              </div>
              <div className="min-w-fit p-3 flex flex-row gap-3">
                <img src="/icon/default-profile.svg" alt="" className="w-8" />
                <div className="flex flex-col">
                  <h1 className="text-base font-semibold text-[#064061]">Lekan Okeowo</h1>
                  <h2 className="text-[#aaa] text-xs">demo@gmail.com</h2>
                </div>
              </div>
              <div className="min-w-fit p-3 flex flex-row gap-3">
                <img src="/icon/default-profile.svg" alt="" className="w-8" />
                <div className="flex flex-col">
                  <h1 className="text-base font-semibold text-[#064061]">Lekan Okeowo</h1>
                  <h2 className="text-[#aaa] text-xs">demo@gmail.com</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Dashboard;
