import axios from "axios";

const Register = () => {
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        
        // Obtén los valores de cada campo
        const id_usuario = formData.get("id_usuario");
        const name = formData.get("name");
        const lastname = formData.get("lastname");
        const age = formData.get("age");
        const email = formData.get("email");
        const password = formData.get("password");
        
        const user = {id_usuario:parseInt(id_usuario), name, lastname, age, email, password}
        console.log(user)

        // const res = await fetch("http://127.0.0.1:8000/api/insert", {
        //     method:"POST", body:user

        // }) 
        // const respuesta = await res.json()
        // console.log(respuesta)
        const res = await axios.post("http://127.0.0.1:8000/api/insert", user)
        console.log(res)
    }
    return (
    <main>
       <form onSubmit={handleSubmit} className="[&>input]:border flex flex-col gap-4 container">
            <input type="text" name="id_usuario"/>
            <input type="text" name="name" />
            <input type="text" name="lastname"/>
            <input type="text" name="age"/>
            <input type="text" name="email"/>
            <input type="password" name="password"/>
            <button type="submit">Enviar</button>
        </form> 
    </main>    
    )
}

export default Register