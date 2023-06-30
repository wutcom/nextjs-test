import React, { useState } from 'react'
import Layout from '@/components/layout'

export async function getServerSideProps() {
 
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
   
    const data = await res.json()
   // console.log(data)
    return { props: { users:data } }
}

export default function index({users}) {
   
  return (
    
    <>
        <Layout>
            {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg"> */}
            
                <div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                UserId
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                password
                            </th>
                        
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit | Delate</span>
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {user.id}
                            </th>
                            <td className="px-6 py-4">
                            {user.username}
                            </td>
                            <td className="px-6 py-4">
                            {user.email}
                            </td>
                            <td className="px-6 py-4 text-right">

                                <a href={`/users/${user.id}`}
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Edit</a>  
                                 <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                  Delete</button>
                            </td>
                        </tr>
                        
                    ))}
                    
                    </tbody>
                </table>
                </div>
            {/* </div> */}
        </Layout>
    </>
  )
}

