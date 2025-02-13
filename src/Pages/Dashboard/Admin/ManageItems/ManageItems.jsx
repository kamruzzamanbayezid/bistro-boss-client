import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";
import CommonTitle from "../../../../Components/Ui/CommonTitle";
import useMenu from "../../../../Hooks/apis/useMenu";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const { menus, refetch } = useMenu();
  const axiosSecure = UseAxiosSecure();

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
          const response = await axiosSecure.delete(`/all-menu/${id}`);

          if (response?.data?.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your menu item has been deleted.",
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
      <CommonTitle subTitle="---Hurry Up!---" title="MANAGE ALL ITEMS" />
      <div className="w-full px-20 bg-white">
        {/* Header Section */}
        <div className="mb-6 border-b pb-4">
          <h2 className="text-3xl font-bold font-cinzen">
            TOTAL ITEMS: <span>{menus?.length}</span>
          </h2>
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
                <th className="py-6 text-left font-semibold text-base">
                  ACTION
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {menus?.map((menu, index) => (
                <tr
                  key={menu?._id}
                  className="border-b text-lg hover:bg-gray-50"
                >
                  <td className="p-4 text-xl text-left font-bold">
                    {index + 1}
                  </td>
                  {/* Item Image */}
                  <td className="py-4">
                    <div className="w-16 h-16 bg-gray-300">
                      <img
                        className="w-full h-full object-cover"
                        src={menu?.image}
                        alt=""
                      />
                    </div>
                  </td>
                  {/* Item Name */}
                  <td className="py-4 text-left text-[#737373]">
                    {menu?.name}
                  </td>
                  {/* Price */}
                  <td className="py-4 text-left text-[#737373]">
                    ${menu?.price}
                  </td>
                  {/* Action (Edit Button) */}
                  <td className="py-4 text-center">
                    <Link to={`/dashboard/update-menu/${menu?._id}`}>
                      <button className="bg-[#D1A054] text-white rounded-md p-2">
                        <RiEditBoxLine />
                      </button>
                    </Link>
                  </td>
                  {/* Action (Delete Button) */}
                  <td className="py-4 text-center">
                    <button
                      onClick={() => handleDelete(menu?._id)}
                      className="bg-[#B91C1C] text-white rounded-md p-2"
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

export default ManageItems;
