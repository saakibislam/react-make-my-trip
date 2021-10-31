import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth"

/* This example requires Tailwind CSS v2.0+ */


export default function OrderTable() {
    const { user } = useAuth();
    const userEmail = user.email;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${userEmail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [userEmail, orders])
    // console.log(orders);

    const handleConfirmation = orderId => {

        fetch(`http://localhost:5000/confirm/${orderId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    }



    return (
        <div className="flex flex-col my-3">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-center px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    > Approve
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {orders.map((order) => (
                                    <tr key={order?._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={user?.photoURL} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{user.displayName}</div>
                                                    <div className="text-sm text-gray-500">{user?.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-purple-900 text-lg font-bold">{order?.destinationName}</div>
                                            <div className="text-sm text-gray-500">Leaving at: {order?.departure}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {order?.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {
                                                order.status == 'Pending' ?
                                                    <button
                                                        onClick={() => handleConfirmation(order._id)}
                                                        className="bg-gray-200 rounded-full py-3 px-6 text-indigo-600 hover:text-indigo-900 font-semibold">
                                                        Confirm
                                                    </button>
                                                    :
                                                    <></>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
