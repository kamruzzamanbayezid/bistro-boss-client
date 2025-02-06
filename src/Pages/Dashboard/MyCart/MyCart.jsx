import CommonTitle from "../../../Components/Ui/CommonTitle";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useMyCartsData from "../../../Hooks/apis/useMyCartsData";
// import UseAdmin from "../../../Hooks/UseAdmin";

const MyCart = () => {
  const { carts, refetch } = useMyCartsData();
  // const { data } = UseAdmin();
  // console.log(data);

  const apiHandler = UseAxiosSecure();

  // calculate total carts price
  const totalCartsPrice = carts?.reduce((prev, curr) => {
    return prev + curr?.price;
  }, 0);

  //   delete cart items
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d333",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await apiHandler.delete(`/carts/${id}`);

          if (response?.data?.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your cart item has been deleted.",
              icon: "success",
            });

            // refetch carts after delete
            refetch();
          }
        } catch (error) {
          console.log(error?.message);
        }
      }
    });
  };

  return (
    <div>
      <CommonTitle subTitle="---My Cart---" title="WANNA ADD MORE?" />
      <div className="w-full px-20 bg-white">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-3xl font-bold font-cinzen">
            TOTAL ORDERS: <span>{carts?.length}</span>
          </h2>
          <h2 className="text-3xl font-bold font-cinzen">
            TOTAL PRICE: <span>${totalCartsPrice}</span>
          </h2>
          <button className="bg-[#D1A054] text-white px-6 py-2 rounded-md text-lg hover:bg-yellow-700">
            PAY
          </button>
        </div>

        {/* Table Section */}
        <div className="w-full custom-scrollbar h-[55vh] overflow-y-auto">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#D1A054] rounded-xl text-white">
                <th className="py-6 text-left font-semibold text-base"></th>
                <th className="py-6 text-left font-semibold text-base">
                  ITEM IMAGE
                </th>
                <th className="py-6 text-left font-semibold text-base">
                  ITEM NAME
                </th>
                <th className="py-6 text-left font-semibold text-base">
                  PRICE
                </th>
                <th className="py-6 text-left font-semibold text-base">
                  ACTION
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {carts?.map((cart, index) => (
                <tr key={cart.id} className="border-b text-lg hover:bg-gray-50">
                  <td className="p-4 text-xl text-left font-bold">
                    {index + 1}
                  </td>
                  {/* Item Image */}
                  <td className="py-4">
                    <div className="w-16 h-16 bg-gray-300">
                      <img
                        className="w-full h-full object-cover"
                        src={cart?.image}
                        alt=""
                      />
                    </div>
                  </td>
                  {/* Item Name */}
                  <td className="py-4 text-left text-[#737373]">{cart.name}</td>
                  {/* Price */}
                  <td className="py-4 text-left text-[#737373]">
                    ${cart.price}
                  </td>
                  {/* Action (Delete Button) */}
                  <td className="py-4 text-center">
                    <button
                      onClick={() => handleDelete(cart?._id)}
                      className="bg-[#B91C1C] text-white rounded-md p-2 hover:bg-red-700"
                    >
                      <RiDeleteBinLine />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
