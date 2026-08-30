import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(userCredential.user, {
                displayName: name
            });

            navigate("/");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("Bu email artıq istifadə olunur.");
            } else if (error.code === "auth/weak-password") {
                setError("Şifrə ən azı 6 simvol olmalıdır.");
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
                <h1 className="text-center text-[28px] font-light mb-8">Qeydiyyat</h1>
                <form onSubmit={handleRegister} className="bg-[#1b2838] p-6">
                    <label className="block text-[13px] text-[#d6d7d8] mb-2">
                        Name
                    </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Adınızı daxil edin" required
                        className="w-full h-[42px] bg-[#32353c] border border-[#000] rounded-[2px] px-3 text-white outline-none focus:border-[#66c0f4] mb-5" />
                    <label className="block text-[13px] text-[#d6d7d8] mb-2">
                        Email
                    </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required
                        className="w-full h-[42px] bg-[#32353c] border border-[#000] rounded-[2px] px-3 text-white outline-none focus:border-[#66c0f4] mb-5" />
                    <label className="block text-[13px] text-[#d6d7d8] mb-2">
                        Password
                    </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifrə" required
                        className="w-full h-[42px] bg-[#32353c] border border-[#000] rounded-[2px] px-3 text-white outline-none focus:border-[#66c0f4] mb-4" />
                    {error && (
                        <p className="text-red-400 text-[13px] mb-4">
                            {error}
                        </p>
                    )}
                    <button type="submit" className="w-full mt-3 h-[45px] bg-gradient-to-r from-[#75bdf4] to-[#4b91c9] text-white font-medium rounded-[2px] hover:brightness-110 transition" >
                        Sign in
                    </button>
                    <p className="text-center text-[13px] text-[#8f98a0] mt-5">
                        Already have an account?{" "}
                        <Link to="/login" className="text-[#66c0f4] hover:text-white">
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register