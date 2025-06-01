"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import { useRouter } from "next/navigation";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const supabase = getSupabaseBrowserClient();
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        supabase.auth.signInWithPassword(
            {
                email: formData.email,
                password: formData.password
            }
        )
            .then((result) => {
                if (result.data?.user) {
                    router.push("/home");
                } else {
                    alert("Could not sign in");
                }
            })
    };

    const handleGoogleLogin = () => {
        console.log("Google login clicked");
    };

    return (
        <div className="min-h-screen bg-gray-900 flex">
            {/* Left side - Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">N</span>
                            </div>
                            <span className="ml-2 text-white text-xl font-semibold">Nobizz</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                        <p className="text-gray-400">
                            Do not have an account?{" "}
                            <Link href="/signup" className="text-red-500 hover:text-red-400 transition-colors">
                                Sign up
                            </Link>
                        </p>
                    </div>

                    {/* Google Login Button */}
                    <Button
                        onClick={handleGoogleLogin}
                        variant="outline"
                        className="w-full bg-transparent border-gray-600 text-white hover:bg-gray-800 py-6 text-base rounded-lg transition-all duration-300"
                    >
                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-900 text-gray-400">Or</span>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-300 text-sm">
                                Email address
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-red-500 focus:ring-red-500 py-6 rounded-lg"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-gray-300 text-sm">
                                Password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-red-500 focus:ring-red-500 py-6 rounded-lg pr-12"
                                    placeholder="Enter your password"
                                    required
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2 text-sm text-gray-400">
                                <input type="checkbox" className="rounded border-gray-600 bg-gray-800 text-red-500 focus:ring-red-500" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-red-500 hover:text-red-400 transition-colors">
                                Forgot password?
                            </a>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 text-white py-6 text-base rounded-lg transition-all duration-300 hover:scale-105"
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>

            {/* Right side - Illustration */}
            <div className="flex-1 hidden lg:flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="relative">
                    {/* Floating elements */}
                    <div className="absolute -top-20 -left-10 w-16 h-16 bg-red-500/20 rounded-full animate-pulse"></div>
                    <div className="absolute -top-10 right-10 w-12 h-12 bg-yellow-500/20 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-20 -right-5 w-8 h-8 bg-green-500/20 rounded-full animate-pulse delay-2000"></div>

                    {/* Computer illustration */}
                    <div className="relative">
                        {/* There was an image element here */}

                        {/* Additional floating elements */}
                        <div className="absolute -bottom-10 left-10 w-20 h-20 bg-red-500/10 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-5 right-20 w-16 h-16 bg-yellow-500/10 rounded-full animate-bounce delay-500"></div>
                        <div className="absolute bottom-5 -left-5 w-12 h-12 bg-green-500/10 rounded-full animate-bounce delay-1000"></div>
                    </div>

                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-green-500/10 blur-3xl -z-10"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;