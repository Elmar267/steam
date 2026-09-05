import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth, googleProvider } from "../../firebase"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                setError("Email və ya şifrə yanlışdır.");
            } else if (error.code === "auth/user-not-found") {
                setError("Bu email ilə istifadəçi tapılmadı.");
            } else {
                setError("Login zamanı xəta baş verdi.");
            }
        }
    };

    const handleGoogleLogin = async () => {
        setError("");

        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (error) {
            setError("Google ilə giriş zamanı xəta baş verdi.");
        }
    };

    return (
        <div className="min-h-screen bg-[#171d25] text-white flex items-center justify-center px-4">
            <div className="w-full max-w-[400px]">
                <h2 className="text-center text-[28px] font-medium mb-8"> Log in </h2>
                <div className="bg-[#1b2838] p-6">
                    <form onSubmit={handleLogin}>
                        <label className="block text-[13px] text-[#d6d7d8] mb-2">
                            Email
                        </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required
                            className="w-full h-[42px] bg-[#32353c] border border-[#000] rounded-[2px] px-3 rounded-xs text-white outline-none focus:border-[#66c0f4] mb-5" />
                        <label className="block text-[13px] text-[#d6d7d8] mb-2">
                            Password
                        </label>
                        <div className="relative mb-4">
                            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="w-full h-[42px] bg-[#32353c] border border-[#000] rounded-[2px] px-3 pr-16 rounded-xs text-white outline-none focus:border-[#66c0f4]" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#8f98a0] hover:text-white cursor-pointer">
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        {error && (
                            <p className="text-red-400 text-[13px] mb-4">
                                {error}
                            </p>
                        )}
                        <button type="submit" className="w-full mt-3 cursor-pointer h-[45px] bg-gradient-to-r from-[#75bdf4] to-[#4b91c9] text-white font-medium rounded-[2px] hover:brightness-110 transition" >
                            Log in
                        </button>
                    </form>
                    <div className="flex items-center gap-3 my-5">
                        <div className="h-[1px] bg-[#3b4652] flex-1"></div>
                        <span className="text-[12px] text-[#8f98a0]">və ya</span>
                        <div className="h-[1px] bg-[#3b4652] flex-1"></div>
                    </div>
                    <button onClick={handleGoogleLogin} className="w-full h-[45px] cursor-pointer bg-white text-[#333] rounded-[2px] font-medium hover:bg-gray-200 transition" >
                        Log in with Google
                    </button>
                    <p className="text-center text-[13px] text-[#8f98a0] mt-5"> Don't have an account?{" "}
                        <Link to="/register" className="text-[#66c0f4] hover:text-white">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login