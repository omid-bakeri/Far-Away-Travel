// import logo from "./logo.svg";
// import "./App.css";

export default function App() {
  return <FarAway />;
}

function FarAway() {
  return (
    <>
      <div className="flex justify-center py-6 bg-[#f4a226]">
        <img
          className="text-xl w-16"
          src="https://img.icons8.com/?size=512&id=IpVaMIwgOHza&format=png"
          alt="tree"
        />
        <div className="font-monoton text-center text-4xl  p-6">Far Away</div>
        <img
          className="text-xl w-16"
          src="https://img.icons8.com/?size=512&id=5i9qZuhkTieo&format=png"
          alt="baggage"
        />
      </div>
      <div className="bg-[#e5771f] py-10 flex flex-col justify-center items-center">
        <p className="font-quicksand text-center p-6 text-xl select-none font-bold">
          what do you need for this trip 😍?
        </p>
        <div className="flex justify-center gap-6">
          {/* <div className="flex"> */}
          <select className="border border-red-400 p-3 outline-none border-none bg-[#ffebb3] rounded-r-full px-6 rounded-l-full ">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
          </select>
          <div className="flex space-x-3">
            <input
              placeholder="Item ..."
              className="border-none outline-none p-3 bg-[#ffebb3] placeholder:text-gray-500 rounded-r-full px-6 rounded-l-full"
            />
            <button className="p-3 border-none outline-none text-center bg-[#76c7ad]  px-6  rounded-r-full rounded-l-full border-red-500 border ">
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
