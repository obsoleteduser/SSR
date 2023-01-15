

const User = ({user})=>{

   

    return(
        <div className="user">
            <h1>Hello user, {user.name}!</h1>
            <p>Your email is: {user.email}</p>
        </div>
    )
}


// export const getServerSideProps = async (context)=>{
//     console.log(context)
//     const response =  await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
//     const data = await response.json()
//     return{
//         props:{data}
//     }
// }


export const getServerSideProps = async({params})=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user  = await response.json()
    return {
        props:{user}
    }
}


export default User


