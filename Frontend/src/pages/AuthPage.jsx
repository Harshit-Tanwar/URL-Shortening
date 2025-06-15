import React, { useState } from 'react'
import Login from '../component/Login'
import RegisterForm from '../component/RegisterForm'
const AuthPage = () => {
    const [login, setLogin] = useState(true);

    return (
        <div className="min-h-screen  bg-gray-100 flex flex-col items-center justify-center p-4">
            {login ? <Login state={setLogin}/> :
                <RegisterForm state={setLogin} />}
        </div>
    )
}

export default AuthPage