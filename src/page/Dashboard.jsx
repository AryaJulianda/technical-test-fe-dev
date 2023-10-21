import React, { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar";
import AllExpenses from "../components/AllExpenses";
import Invoice from "../components/Invoice";
import MyCard from "../components/MyCard";
import Axios from "axios";
import { makeServer } from "../../mirage-config";

const Dashboard = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    makeServer()

    const fetchData = async () => {
      try {
        const response = await Axios.get('/api/dashboard');
        setData(response.data);
        console.log({'inires':response.data})
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   // Log `data` ketika nilainya diperbarui.
  //   console.log({ 'inidata':data });
  // }, [data]);

  return (
    <div className="flex flex-row w-full min-h-screen py-10 pr-6 bg-[#F7F9FA] gap-8 // max-xl:gap-6 max-xl:py-6 max-xl:pr-4 // max-lg:gap-4 max-lg:py-4 max-lg:pr-3">

      <Sidebar/>

      {/* Center */}
      <div className="w-[40%] flex flex-col gap-5 // max-xl:gap-4 // max-lg:gap-3">
        <AllExpenses data={data.allExpenses} />
        <Invoice />
      </div>

      {/* My Card */}
      <MyCard data={data.myCard}/>

    </div>
  )
};

export default Dashboard;
