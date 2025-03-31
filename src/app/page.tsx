export default function Home() {
  return (
    <div className="flex bg-black/60 h-screen w-full justify-center items-center ">
      <div className="flex flex-col space-x-10 w-[970px] h-[700px] bg-white rounded-[64px] rounded-br-[270px] shadow-2xs p-[50px]">
        <div className="flex flex-row border-2">

          <div className="flex flex-col border-2 ">
            <span className="text-3xl">DAY</span>
            <input
              type="text"
              title="Day"
              className="border border-[#854DFF] p-2 rounded-[12px] w-[180px] h-[90px] outline-none text-5xl font-bold" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl">MONTH</span>
            <input
              type="text"
              title="Month"
              className="border border-[#854DFF] p-2 rounded-[12px] w-[180px] h-[90px] outline-none text-5xl font-bold" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl">YEAR</span>
            <input
              type="text"
              title="Year"
              className="border border-[#854DFF] p-2 rounded-[12px] w-[180px] h-[90px] outline-none text-5xl font-bold" />
          </div>
        </div>
        <div className="w-full h-1 bg-[#854DFF]">
          เส้นแบ่ง
        </div>
      </div>

    </div>
  )
}

