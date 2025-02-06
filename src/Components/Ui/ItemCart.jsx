import useMyCartsData from "../../Hooks/apis/useMyCartsData";

const ItemCart = () => {
  const { carts } = useMyCartsData();

  return (
    <div>
      <button
        type="button"
        className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-[#118B50] rounded-full focus:ring-4 focus:outline-none focus:ring-indigo-300"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 4h14l-1.68 10.74A4 4 0 0115.36 18H8.64a4 4 0 01-3.96-3.26L3 4h4Z" />
          <circle cx="9" cy="20" r="2" />
          <circle cx="17" cy="20" r="2" />
        </svg>
        <span className="sr-only">Cart</span>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-red-500 rounded-full -top-2 -right-2">
          {carts?.length} {/* Automatically updates */}
        </div>
      </button>
    </div>
  );
};

export default ItemCart;
