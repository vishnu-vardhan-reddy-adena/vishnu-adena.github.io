import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/features/CartSlice";
import { Link } from "react-router-dom";
const CartPage = () => {
  const automobiles = useSelector((store) => store.cart.items);
  //console.log(automobiles);
  const quantity = automobiles.length;
  const dispatch = useDispatch();
  const handleClearCart = (automobile) => {
    dispatch(clearCart(automobile));
  };
  return automobiles?.length === 0 ? (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-100 text-black p-8 rounded shadow-xl">
        <p className="text-2xl font-bold m-10">
          You have not added any Automobiles to Book
        </p>
        <p className="text-2xl  m-10">
          Now you can{" "}
          <Link
            to="/"
            className="text-2xl p-2 rounded-xl bg-blue-500 text-white "
          >
            Home
          </Link>{" "}
          to Book
        </p>
      </div>
    </div>
  ) : (
    <>
      <div>
        <button
          type="button"
          className="p-4 bg-red-600 m-1 rounded-lg text-white text-xl font-bold "
          onClick={() => {
            handleClearCart(automobiles);
          }}
        >
          Clear Cart
        </button>
      </div>

      <div className="flex">
        {automobiles.map((automobile) => {
          return <CartItem {...automobile} key={automobile.CarId} />;
        })}
      </div>
      <div>
        <table>
          <th>
            <td></td>
          </th>
        </table>
      </div>
    </>
  );
};
export default CartPage;
