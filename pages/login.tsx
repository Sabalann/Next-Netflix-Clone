export function login() {
    return (
        <>
            <div className="login bg-zinc-900 h-screen flex items-center justify-center">
                <div className="login__container flex flex-col items-center text-white">
                    <h1 className="">Sign In</h1>
                    <form className="flex flex-col">
                        <h5>Email</h5>
                        <input type="email" className="mb-2 p-2 text-black" />
                        <h5>Password</h5>
                        <input type="password" className="mb-2 p-2 text-black" />
                        <button className="bg-red-600 text-white p-2 mt-2">Sign In</button>
                    </form>
                    <p className="text-center mt-4 text-sm">
                        By signing-in you agree to the NETFLIX CLONE Conditions of Use & Sale. Which means you have given us access to your data and your soul
                    </p>
                    <button className="bg-blue-600 text-white p-2 mt-4">Create your Netflix Account</button>
                </div>
            </div>
        </>
    )
}

export default login;