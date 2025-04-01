"use client";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
export default function Home() {
  // กำหนด type ให้กับ state
  const [day, setDay] = useState<number | "">("");
  const [month, setMonth] = useState<number | "">("");
  const [year, setYear] = useState<number | "">("");
  const [ageYears, setAgeYears] = useState<number | "--">("--");
  const [ageMonths, setAgeMonths] = useState<number | "--">("--");
  const [ageDays, setAgeDays] = useState<number | "--">("--");
  const [required, setRequired] = useState<number | 0>(0);
  const [isLoading, setIsLoading] = useState(true);
  // ฟังก์ชันคำนวณอายุ พร้อมกำหนด Type
  const calculateAge = (): void => {
    if (!day || !month || !year) {
      setRequired(1)
      return;
    } else {
      setRequired(0)
    }

    const birthDate = new Date(`${year}-${month}-${day}`);
    if (isNaN(birthDate.getTime())) {
      alert("กรุณากรอกวันที่ถูกต้อง");
      return;
    }

    const today = new Date();
    let years: number = today.getFullYear() - birthDate.getFullYear();
    let months: number = today.getMonth() - birthDate.getMonth();
    let days: number = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAgeYears(years);
    setAgeMonths(months);
    setAgeDays(days);
  };

  return (
    <div className="flex bg-black/60 h-full w-full justify-center items-center p-4" >
      {/* แสดง Loading ถ้ายังโหลดไม่เสร็จ */}
      {isLoading && (
        <div className="absolute flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500"></div>
          <p className="text-white mt-4">Loading...</p>
        </div>
      )}
      <Spline
        className={`absolute h-screen top-0 left-0 size-[120%] ${isLoading ? "hidden" : ""}`}
        scene="https://prod.spline.design/6rH0bxqyOIeNmP6I/scene.splinecode"
        onLoad={() => setIsLoading(false)} // เมื่อโหลดเสร็จให้ซ่อน Loading
      />

      {!isLoading && (
        <div className="relative flex flex-col space-x-10 md:w-[970px] md:h-[700px] w-full border-2 drop-shadow-lg border-[#854DFF] bg-black/40 backdrop-blur-xl md:rounded-[64px] md:rounded-br-[270px] rounded-[24px] rounded-br-[170px] shadow-2xs md:p-[50px] p-[20px]">

          <div className="flex flex-row gap-x-2 md:space-x-5  w-full p-2 text-white">
            <div className="flex flex-col w-auto ">
              <span className={`md:text-3xl ${required === 1 ? "text-red-500" : "text-white"}`}>
                DAY
              </span>
              <input
                type="number"
                placeholder="DD"
                title="Day"
                value={day}
                onChange={(e) => setDay(e.target.value ? parseInt(e.target.value) : "")}
                className={`p-2 rounded-[12px] md:w-[180px] md:h-[90px] w-full  outline-none md:text-5xl font-bold border 
                ${required === 1 ? "border-red-500" : "border-[#854DFF]"}`}
              />
              {required == 1 && (<span className="md:text-[18px]  text-[12px] text-red-500">this flied is required</span>)}
            </div>
            <div className="flex flex-col">
              <span className={`md:text-3xl ${required === 1 ? "text-red-500" : "text-white"}`}>MONTH</span>
              <input
                type="number"
                placeholder="MM"
                title="Month"
                value={month}
                onChange={(e) => setMonth(e.target.value ? parseInt(e.target.value) : "")}
                className={`p-2 rounded-[12px] md:w-[180px] md:h-[90px] outline-none md:text-5xl w-full font-bold border 
                ${required === 1 ? "border-red-500" : "border-[#854DFF]"}`}
              />
              {required == 1 && (<span className="md:text-[18px]  text-[12px] text-red-500">this flied is required</span>)}
            </div>
            <div className="flex flex-col">
              <span className={`md:text-3xl ${required === 1 ? "text-red-500" : "text-white"}`}>YEAR</span>
              <input
                type="number"
                title="Year"
                placeholder="YYYY"
                value={year}
                onChange={(e) => setYear(e.target.value ? parseInt(e.target.value) : "")}
                className={`p-2 rounded-[12px] md:w-[180px] md:h-[90px] outline-none md:text-5xl w-full font-bold border 
                ${required === 1 ? "border-red-500" : "border-[#854DFF]"}`}
              />
              {required == 1 && (<span className="md:text-[18px] text-[12px] text-red-500">this flied is required</span>)}
            </div>
          </div>
          <div className="relative flex items-center w-full lg:my-5 my-7 justify-center  ">
            <div className="w-full h-[2px] my-10 bg-[#854DFF]"></div>
            <button
              title="go"
              onClick={calculateAge}
              className="flex absolute lg:right-0 rounded-full focus:bg-black bg-[#854DFF] md:p-8 p-4"
            >
              <img src="assets/images/icon-arrow.svg" alt="" />
            </button>
          </div>

          {/* แสดงผลลัพธ์ที่คำนวณได้ */}
          <div className="md:text-8xl font-bold text-5xl mb-6 text-white ">
            <h1>
              <span className="text-[#854DFF]">{ageYears}</span> years
            </h1>
            <h1>
              <span className="text-[#854DFF]">{ageMonths}</span> months
            </h1>
            <h1>
              <span className="text-[#854DFF]">{ageDays}</span> days
            </h1>
          </div>

        </div>
      )}

    </div>
  );
}
