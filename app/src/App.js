import { useState } from "react";

const Data = [
  { id: 1, name: "baggage", packed: true, count: 2 },
  { id: 2, name: "passport", packed: true, count: 1 },
  { id: 3, name: "socks", packed: false, count: 3 },
];
export default function App() {
  return (
    <div>
      <Menu />
      <Form />
      <Result />
      <Footer />
    </div>
  );
}

function Menu() {
  return (
    <div className="flex justify-center py-6 bg-[#f4a226]">
      <img
        className="text-xl w-16 md:w-20 lg:w-24 2xl:w-28 "
        src="https://img.icons8.com/?size=512&id=IpVaMIwgOHza&format=png"
        alt="tree"
      />
      <div className="font-monoton text-center 2xl:text-8xl lg:text-6xl text-4xl md:text-5xl select-none  p-6">
        Far Away
      </div>
      <img
        className="text-xl w-16 md:w-20 lg:w-24 2xl:w-28 "
        src="https://img.icons8.com/?size=512&id=5i9qZuhkTieo&format=png"
        alt="baggage"
      />
    </div>
  );
}

function Form() {
  const [des, setDes] = useState("");
  const [count, setCount] = useState();

  function newItem(e) {
    e.preventDefault();
    if (!des) return;
    const newItems = { id: Date.now(), count, des, packed: false };
    console.log(newItems);
    setDes("");
    setCount(1);
  }
  return (
    <div className="bg-[#e5771f] 2xl:py-8 2xl:flex-row 2xl:space-x-10 py-10 flex flex-col justify-center items-center">
      <p className="font-quicksand text-center xl:text-2xl p-6 text-xl select-none font-bold">
        what do you need for this trip 😍?
      </p>
      <div className="flex justify-center gap-6">
        {/* <div className="flex"> */}
        <select
          onChange={(e) => {
            setCount(Number(e.target.value));
            // console.log(Number(e.target.value));
          }}
          value={count}
          className="border border-red-400 p-3 outline-none border-none bg-[#ffebb3] rounded-r-full px-6 rounded-l-full "
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <div className="flex space-x-3">
          <input
            value={des}
            onChange={(e) => {
              setDes(e.target.value);
              console.log(e.target.value);
            }}
            placeholder="Item ..."
            className="border-none outline-none p-3 bg-[#ffebb3] placeholder:text-gray-500 rounded-r-full px-6 rounded-l-full"
          />
          <button
            onClick={newItem}
            className="p-3 border-none outline-none text-center bg-[#76c7ad]  px-6  rounded-r-full rounded-l-full border-red-500 border "
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

function Result() {
  return (
    <div className=" flex-col pb-4 py-10 bg-[#5a3e2b] select-none flex gap-12">
      <div className="text-[#ffebb3]  grid   xl:grid-cols-4 2xl:grid-cols-6 grid-cols-2 lg:grid-cols-3  mx-auto gap-6 p-1 text-xl font-quicksand font-bold ">
        {Data.map((item) => (
          <div
            className={`flex space-x-3 ${item.packed ? "line-through" : {}}`}
          >
            <input
              className="checkbox font-quciksand text-red-500  text-red-500 "
              type="checkbox"
            />
            <div className="">
              {item.count} {item.name}
            </div>
            <button className="text-red-500 w-4 h-4">x</button>
          </div>
        ))}
      </div>
      <div className="p-16"></div>
      <div className="flex lg:flex-row lg:space-x-8 lg:space-y-0 flex-col  mx-auto space-y-1 ">
        <select className="border-none outline-none p-2 bg-[#ffebb3] placeholder:text-gray-500 rounded-r-full px-6 rounded-l-full">
          <option>SORT BY INPUT ORDER</option>
          <option>SORT BY DESCRIPTION</option>
          <option>SORT BY PACKED STATUS</option>
        </select>
        <button className="border-none outline-none p-2 bg-[#ffebb3] placeholder:text-gray-500 rounded-r-full px-6 rounded-l-full">
          CLEAR ALL
        </button>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="bg-[#76c7ad] py-[1rem]">
      <div>
        <div className="flex pt-4 pl-4 space-x-2 justify-start items-start">
          <img
            className="text-xl w-8 h-8"
            src="https://img.icons8.com/?size=512&id=IpVaMIwgOHza&format=png"
            alt="tree"
          />
          <div className="font-monoton text-center text-lg ">Far Away</div>
          <img
            className="text-xl w-8 h-8"
            src="https://img.icons8.com/?size=512&id=5i9qZuhkTieo&format=png"
            alt="baggage"
          />
        </div>
        <div
          className="text-center text-green-900 py-10
            font-bold font-quicksand flex justify-center
            items-center place-items-center
            pt-16 text-xl w-[90%] lg:text-2xl xl:text-3xl mx-auto leading-[2rem]"
        >
          you have 0 items on your list, and you already packed 0 (0%)
        </div>
      </div>
    </div>
  );
}
