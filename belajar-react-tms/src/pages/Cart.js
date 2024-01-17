import Navbar from "../components/Navbar";
import { useCart } from "../components/CartContext";

export default function Cart() {
  const {cart, setCart} = useCart();
  let subtotal = 0;
  cart.forEach((item) => {
    return (subtotal += item.amount * item.price);
  });

  function removeItem(p) {
    let arr = cart.filter((item) => item.id !== p.id);
    setCart(arr);
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <div className="mr-5">
          {cart.map((item) => {
            return (
              <div key={item.id} className="flex flex-row gap-4 p-4 border-b-2">
                <div>
                  <img
                    src={item.image}
                    className="w-28 min-h-14 border-solid border-2 border-slate-200 rounded-lg p-4 "
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-lg font-semibold min-h-14 w-52">
                    {item.title}
                  </p>
                  <p className="text-lg">Quantity {item.amount}</p>
                  <p className="text-lg">${item.price * item.amount}</p>
                  <button
                    onClick={() => removeItem(item)}
                    className="px-4 py-2 self-start font-bold text-white bg-red-500 rounded hover:bg-red-600 active:scale-90"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h2 className="text-2xl font-bold">Subtotal</h2>
          <p className="text-lg font-semibold">${subtotal}</p>
        </div>
      </div>
    </>
  );
}
