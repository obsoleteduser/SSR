import Link from "next/link"
import A from "../components/A"

const Index = () => {
    return (
        <>
         <div className="index">
            <h1>Hello Next!</h1>
          <A href='/posts' text={'Posts'}></A>
          <A href="/users" text={'Users'}></A>


        <style>
            {`
            
         
            .link {
                color: black;
                text-decoration: none;
                margin: 1rem;
            }
            
            `}
        </style>


        </div>
        </>
       
    )
}


export default Index