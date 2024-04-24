import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  let subtotal = 0;
  cart.forEach((item) => {
    return (subtotal += item.amount * item.price);
  });

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:flex-row justify-center items-start mt-56 md:mt-28">
        <div className="w-full max-w-2xl">
          {cart.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 p-4 border-b-2"
              >
                <div>
                  <img
                    src={item.image}
                    className="w-28 min-h-14 border-solid border-2 border-slate-200 rounded-lg p-4 "
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between w-full sm:w-auto">
                  <p className="text-lg font-semibold min-h-14 w-full sm:w-52">
                    {item.title}
                  </p>
                  <div className="flex flex-row items-center border-2 max-w-52 border-gray-300 p-2 rounded-md shadow-md bg-white">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item))}
                      className="px-4 py-2 text-sm self-start font-bold text-white bg-red-500 rounded hover:bg-red-600 active:scale-90"
                    >
                      -
                    </button>
                    <p className="text-lg mx-2 font-bold">
                      Quantity {item.amount}
                    </p>
                    <button
                      onClick={() => dispatch(increaseQuantity(item))}
                      className="px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-600 active:scale-90"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-lg">
                    ${(item.price * item.amount).toFixed(2)}
                  </p>
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="px-4 py-2 self-start font-bold text-white bg-red-500 rounded hover:bg-red-600 active:scale-90"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg mt-10 w-full max-w-md">
          <h2 className="text-2xl font-bold">Subtotal</h2>
          <p className="text-lg font-semibold">${subtotal.toFixed(2)}</p>
          <button className="mt-3 px-4 py-2 self-start font-bold text-white bg-red-500 rounded hover:bg-red-600 active:scale-90">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
