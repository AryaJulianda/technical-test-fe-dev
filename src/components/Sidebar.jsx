import React from "react"

const Sidebar = () => {
  return (
    <div className="w-[20%]">
      <div className="w-[20%] fixed top-0 bottom-0 py-12 px-7 flex flex-col bg-white items-center gap-4 shadow-lg">

        {/* logo */}
        <div className="flex bg-[#C4C4C4] py-4 px-[84px] justify-center">
          <img src="/icon/gallery.svg" alt="gallery" className="w-6 h-6" />
        </div>

        {/* profile */}
        <div className="bg-[#f0f0f0] w-full p-3 rounded-xl flex flex-row gap-3">
          <img src="/icon/default-profile.svg" alt="" className="w-8" />
          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-[#064061]">Lekan Okeowo</h1>
            <h2 className="text-[#aaa] text-xs">demo@gmail.com</h2>
          </div>
        </div>

        {/* sidebar link */}
        <div className="flex flex-row w-full py-3 gap-4 border-e-4 border-primary-blue cursor-pointer">
          <img src="/icon/dashboard.svg" alt="" className="w-6"/>
          <h1 className="">Dashboard</h1>
        </div>
      
      </div>
    </div>
  )
};

export default Sidebar;
