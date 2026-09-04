import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        const nameRegex = /^[A-Za-zƏəĞğÇçŞşİıÖöÜü]{3,}\s+[A-Za-zƏəĞğÇçŞşİıÖöÜü]{3,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

        if (!nameRegex.test(name.trim())) {
            setError("First name and last name must be separate, and each must contain at least 3 letters.");
            return;
        }
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters long and contain both letters and numbers.");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(userCredential.user, { displayName: name.trim() });

            navigate("/");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("Bu email artıq istifadə olunur.");
            } else if (error.code === "auth/invalid-email") {
                setError("Email düzgün deyil.");
            } else {
                setError("Qeydiyyat zamanı xəta baş verdi.");
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#171d25] text-white flex items-center justify-center px-4">
            <div className="w-full max-w-[400px]">
                <h1 className="text-center text-[28px] font-medium mb-8">Sign in</h1>
                <form onSubmit={handleRegister} className="bg-[#1b2838] p-6">
                    <label className="block text-[13px] text-[#d6d7d8] mb-2">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ad Soyad" required className="w-full h-[42px] bg-[#32353c] border border-[#000] rounded-[2px] px-3 text-white outline-none focus:border-[#66c0f4] mb-5" />

                    <label className="block text-[13px] text-[#d6d7d8] mb-2">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full h-[42px] bg-[#32353c] border border-[#000] rounded-[2px] px-3 text-white outline-none focus:border-[#66c0f4] mb-5" />

                    <label className="block text-[13px] text-[#d6d7d8] mb-2">Password</label>
                    <div className="relative mb-4">
                        <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifrə" required className="w-full h-[42px] bg-[#32353c] border border-[#000] rounded-[2px] px-3 pr-10 text-white outline-none focus:border-[#66c0f4]" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8f98a0] hover:text-white">
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    {error && <p className="text-red-400 text-[13px] mb-4">{error}</p>}
                    <button type="submit" className="w-full mt-3 h-[45px] bg-gradient-to-r from-[#75bdf4] to-[#4b91c9] text-white font-medium rounded-[2px] hover:brightness-110 transition">Sign in</button>
                    <p className="text-center text-[13px] text-[#8f98a0] mt-5">Already have an account?{" "}<Link to="/login" className="text-[#66c0f4] hover:text-white">Log in</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Register;