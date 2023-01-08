import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
    return (
        <main className='flex justify-center items-center mt-20'>
            <section>
                <form className='flex  flex-col border-solid border-2 border-indigo-600 ... p-8'>
                    <h1>create account</h1>
                    <div></div>
                    <p>or use your email for regristration</p>

                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <section>
                        <input type="checkbox" />
                        <p>I agree to the <span>terms</span> and <span>privary policy.</span></p>
                    </section>

                    <div>

                        <button className='bg-red-300' onClick={() => { navigate("/") }}>
                            login page</button>

                            <button className='bg-green-300' onClick={() => { navigate("/login") }}>
                            siginup page</button>
                    </div>
                </form>
            </section>

            <section className="w-96"> hello</section>
        </main>
    );
}

export default Login;