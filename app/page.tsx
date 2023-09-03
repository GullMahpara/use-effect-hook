'use client'
/* eslint-disable @next/next/no-async-client-component */
import React, { useState, useEffect } from "react";

import { user } from "@/type";

export async function getdata() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

export default   function Home() {
 const [data, setData] = useState<user[]>([]);
 const [count, setCount] = useState(0);



 useEffect(()=>{
      document.title = `You clicked ${count} times`;
    console.log(getdata());
 },[count])

 
return (
  <>
    <div>
      <p> Gull You clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>Click me</button>
    
      {data?.map((item) => (
        <div className="bg-red-300 m-5  " key={item.id}>
          <h3>Name:{item.name}</h3>
          <h3>ID:{item.id}</h3>
          <h3>Email:{item.email}</h3>
          <h3>Phone number:{item.phone}</h3>
          <h3>Website: {item.website}</h3>
        </div>
      ))}
    </div>
  </>
);
};

// function Example() {
//   const [count, setCount] = useState(0);
//   const [one, setone] = useState(0);
//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count}, ${one} times`;
//   },[count]);

//   return (
//     <div>
//       <p> Gull You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <p> Gull You clicked {one} times</p>
//       <button onClick={() => setone(one +2)}>Click me too</button>
//     </div>
//   );
// }
// export default Example;