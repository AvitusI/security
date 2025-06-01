"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white">
            Welcome to <span className="text-red-500">Nobbiz</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create amazing experiences with our modern platform
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105">
              Sign In
            </Button>
          </Link>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-green-500/20 blur-3xl"></div>
          <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-4">Ready to begin?</h2>
            <p className="text-gray-300">Join thousands of users creating amazing experiences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;