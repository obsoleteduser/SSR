import Link from "next/link"
import { useEffect, useState } from "react"
import A from "../../components/A"



const Users = ({data})=>{


    const [users, setUsers] = useState([
        {id:1, name: "Tahir"},
        {id:2, name: "ISA"},
        {id:3, name: "ANAR"},
    ])




    return(
        <div className="index user">
            <h1>Hello Users!</h1>
            {
                data.map(link =>(
                  <A key={link.id} href={`/users/${link.id}`} text={link.name}></A>
                ))
            }


        


        </div>
    )
}

export default Users


export const getStaticProps = async ()=>{

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data  = await response.json()
    return {
        props: {data}
    }
}