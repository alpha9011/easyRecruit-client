import { Table} from 'flowbite-react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdDelete } from "react-icons/md";
import { FaUsers  } from "react-icons/fa";
import Swal from 'sweetalert2';
import { FaUser } from 'react-icons/fa6';

const AllUsers = () => {
    
    const axiosSecure = useAxiosSecure()

const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await axiosSecure.get('/users')
        return res.data
    }
})
  console.log(users);
  const handleMakeAdmin= (user) => {
    console.log('click', user);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make Admin"
    }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.patch(`/users/admin/${user._id}`)

            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${user.name} admin successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })

        }
    });
}

  const handleDelete = (id) => {
    console.log('click', id);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/users/${id}`)
            .then(res => {
                
                console.log(res);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch()
                
            })

        }
    });
}
    return (
        <div>
            <h1 className='mb-5 text-white text-center font-bold text-3xl'>All Users: {users.length}</h1>
           <div className="overflow-x-auto">
    

<Table  className="bg-opacity-10  text-center">
          <Table.Head className="bg-opacity-10 ">
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Membership</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>

          </Table.Head>

          <Table.Body className="divide-y ">

            {
                users.map( user =>  <Table.Row
                    className=" dark:border-gray-700 dark:bg-gray-800 text-center  bg-white"
                    key={user._id}
                  >
                    <Table.Cell className="whitespace-nowrap font-medium  dark:text-white ">
                    {user?.name}
                    </Table.Cell>
    
                    <Table.Cell>{user?.email}</Table.Cell>
                    <Table.Cell>dfd</Table.Cell>
                    <Table.Cell>{user?.userRole}</Table.Cell>

                    <Table.Cell className=' cursor-pointer flex justify-center' onClick={()=> handleMakeAdmin(user)}> { user?.role ? 
                    <div className='flex items-center gap-1'>admin <FaUser></FaUser> </div>
                     :
                     <div className='flex items-center gap-1'>User <FaUsers></FaUsers></div>} </Table.Cell>

                    <Table.Cell className=' text-2xl text-red-700 cursor-pointer' onClick={()=> handleDelete(user?._id)}><MdDelete/></Table.Cell>
             
                  </Table.Row>)
            }
             
             
            
          </Table.Body>
        </Table>
    </div>
        </div>
    );
};

export default AllUsers;