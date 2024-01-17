import Navbar from "../components/Navbar";

export default function Cart({ cart }) {
  return (
    <>
      <Navbar />
      {cart.map((item) => {
        return (
          <div key={item.id} className="flex flex-row gap-4 p-4">
            <div>
              <img
                src={item.image}
                className="w-52 h-52 border-solid border-2 border-slate-200 rounded-lg p-4 "
                alt=""
              />
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-lg font-semibold min-h-14 w-52">
                {item.title}
              </p>
              <p className="text-lg font-semibold min-h-14 w-52">
                ${item.price}
              </p>
              <button className="px-4 py-2 self-start font-bold text-white bg-red-500 rounded hover:bg-red-600 active:scale-90">
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
