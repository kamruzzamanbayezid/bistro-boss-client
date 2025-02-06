import { RiDeleteBinLine } from 'react-icons/ri'
import useUsers from '../../../../Hooks/apis/useUsers'
import CommonTitle from '../../../../Components/Ui/CommonTitle'
import { HiUserGroup } from 'react-icons/hi2'
import Swal from 'sweetalert2'
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure'
import { FaUserShield } from 'react-icons/fa'

const AllUsers = () => {
  const { users, refetch } = useUsers()
  
  const apiHandler = UseAxiosSecure()

  //   delete user by an admin
  const handleDelete = async id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const response = await apiHandler.delete(`/users/${id}`)

          if (response?.data?.deletedCount === 1) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your cart item has been deleted.',
              icon: 'success'
            })

            // refetch carts after delete
            refetch()
          }
        } catch (error) {
          console.log(error?.message)
        }
      }
    })
  }

  // Change user role as admin
  const handleRoleChange = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: `That you will make ${user?.name} an admin!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, make it!'
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const response = await apiHandler.patch(
            `/users/make-admin/${user?._id}`
          )

          if (response?.data?.modifiedCount === 1) {
            Swal.fire({
              title: 'Make Admin!',
              text: `${user?.name} is now an Admin!`,
              icon: 'success'
            })

            // refetch carts after delete
            refetch()
          }
        } catch (error) {
          console.log(error?.message)
        }
      }
    })
  }

  return (
    <div>
      <CommonTitle subTitle='---How many??---' title='MANAGE ALL USERS' />
      <div className='w-full px-20 bg-white'>
        {/* Header Section */}
        <div className='mb-6 border-b pb-4'>
          <h2 className='text-3xl font-bold font-cinzen'>
            TOTAL Users: <span>{users?.length}</span>
          </h2>
        </div>

        {/* Table Section */}
        <div className='w-full custom-scrollbar h-[55vh] overflow-y-auto'>
          <table className='w-full border-collapse'>
            {/* Table Header */}
            <thead className='overflow-hidden'>
              <tr className='bg-[#D1A054] text-white'>
                <th className='py-5 text-left font-semibold text-base rounded-tl-2xl'></th>
                <th className='py-5 text-left font-semibold text-base'>Name</th>
                <th className='py-5 text-left font-semibold text-base'>
                  Email
                </th>
                <th className='py-5 text-left font-semibold text-base'>Role</th>
                <th className='py-5 text-left font-semibold text-base rounded-tr-lg'>
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {users?.map((user, index) => (
                <tr key={user.id} className='border-b text-lg hover:bg-gray-50'>
                  <td className='p-4 text-xl text-left font-bold'>
                    {index + 1}
                  </td>
                  {/* Item Image */}
                  <td className='py-4'>
                    <div className='w-16 h-16 bg-gray-300'>
                      <img
                        className='w-full h-full object-cover'
                        src={user?.image}
                        alt=''
                      />
                    </div>
                  </td>
                  {/* Item Name */}
                  <td className='py-4 text-left text-[#737373]'>
                    {user?.name}
                  </td>
                  {/* Action (Make admin Button) */}
                  <td className='py-4'>
                    {user?.role === 'admin' ? (
                      <span
                        title='Admin'
                        className='inline-flex items-center justify-center bg-blue-600 text-white rounded-full p-3 shadow-md'
                      >
                        <FaUserShield className='w-5 h-5' />
                      </span>
                    ) : (
                      <button
                        onClick={() => handleRoleChange(user)}
                        className='bg-[#D1A054] text-white rounded-full p-3 hover:bg-[#B58C43] transition duration-300'
                      >
                        <HiUserGroup
                          title='Make an admin'
                          className='w-5 h-5'
                        />
                      </button>
                    )}
                  </td>

                  {/* Action (Delete Button) */}
                  <td className='py-4'>
                    <button
                      onClick={() => handleDelete(user?._id)}
                      className='bg-[#B91C1C] text-white rounded-md p-3 hover:bg-red-700'
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
  )
}

export default AllUsers
