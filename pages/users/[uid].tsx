import React, { useState } from 'react'
import { useRouter } from 'next/router'
import  type {GetStaticPropsContext,GetStaticPropsResult} from 'next'
import Layout from '@/components/layout' 

type Props = {}
type PageParams={
    id:number;
}
type ContentPageProps={
    userEdit:User;
}
type User={
    id:number;
    username:String;
    email:String;
}
type ResponseFromServer ={
    id:number;
    username:String;
    email:String;

}

 export async function getStaticPaths(){
     let users = await fetch("https://jsonplaceholder.typicode.com/users");
     let userFromServer:[User]=await users.json();
     return{
        paths: userFromServer.map((user) => {
            return {
                params:{
                    uid:user.id.toString()
                }
            }
        }),
        fallback: false
     }

 }
 export async function getStaticProps({params}
    : GetStaticPropsContext<PageParams> ): Promise<GetStaticPropsResult<ContentPageProps>> {

 
 
     let res = await fetch("https://jsonplaceholder.typicode.com/users/"+params?.uid)
     let resFromServer:ResponseFromServer =await res.json();
   
   //  const data = await res.json()
    // console.log(resFromServer)
     return {
         props: {
            userEdit : {
                id:resFromServer.id,
                username:resFromServer.username,
                email:resFromServer.email,
            }
             
        }
    }
 }



export default function editUser({
    userEdit: { id,username,email} 
}:ContentPageProps) {
    const [username2, setusername] = useState(username);
    const [password, setpassword] = useState(email);
    const [statusdetail, setstatus] = useState('');
  
    const router = useRouter()
    function handleSubmit()
    {
        
    }

    return (
    
    // <p>Post: {router.query.uid}</p>
    <>
    <Layout>
    <div>
      <h2>Edit User</h2><p>uid: {router.query.id}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="username"
           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >username:</label><br/>
         
          <input 
            type="text" 
            id="username" 
            value={username2? username:"" } 
            onChange={(e) => setusername(e.target.value)}
            onClick={ ()=> setusername("")}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        </div>
        <div className="mb-6">
          <label htmlFor="password"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
           >password:</label><br/>
          <input
            type="password"
            id="password"
            value={password? password:"" }
            onChange={(e) => setpassword(e.target.value)}
            onClick={() => setpassword("")}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        </div><br/>
        <button type="submit" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
        <svg className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
         Update
      </button>
      </form>
      <br/><label htmlFor="status">status:</label>
      <br/><label htmlFor="statusdetail" id="statusdetail" bg-color='yellow'>{ statusdetail }</label>
    </div>
    </Layout>
    </>
    )
}

