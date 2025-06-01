"use client";

import { useState, useEffect } from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Settings, User, Bell, BarChart3, Calendar, FileText, Plus } from "lucide-react";
import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient"

const Dashboard = () => {
    const [user] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: null
    });

    const router = useRouter()
    const supabase = getSupabaseBrowserClient();

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event) => {  // removed session in callback because it was not used
            if (event === "SIGNED_OUT") {
                router.push("/")
            }
        });
        return () => subscription.unsubscribe();
    }, [router, supabase.auth]);

    const stats = [
        { title: "Total Projects", value: "12", icon: FileText, color: "text-blue-400" },
        { title: "Active Tasks", value: "28", icon: Calendar, color: "text-green-400" },
        { title: "Completed", value: "156", icon: BarChart3, color: "text-purple-400" },
        { title: "Team Members", value: "8", icon: User, color: "text-yellow-400" }
    ];

    const recentProjects = [
        { name: "Website Redesign", status: "In Progress", progress: 75, dueDate: "Dec 15" },
        { name: "Mobile App", status: "Planning", progress: 25, dueDate: "Jan 20" },
        { name: "Marketing Campaign", status: "Review", progress: 90, dueDate: "Dec 10" }
    ];

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">N</span>
                            </div>
                            <span className="ml-2 text-white text-xl font-semibold">Nobizz</span>
                        </div>

                        {/* User Menu */}
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <Settings className="h-5 w-5" />
                            </Button>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                                    <User className="h-4 w-4 text-gray-300" />
                                </div>
                                <div className="hidden md:block">
                                    <p className="text-sm font-medium text-white">{user.name}</p>
                                    <p className="text-xs text-gray-400">{user.email}</p>
                                </div>
                            </div>
                            <Button
                                onClick={(event) => {
                                    event.preventDefault()
                                    supabase.auth.signOut()
                                }}
                                variant="outline"
                                size="sm"
                                className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Welcome back, {user.name.split(' ')[0]}!
                    </h1>
                    <p className="text-gray-400">Here is what&apos;s happening with your projects today.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <Card key={index} className="bg-gray-800 border-gray-700">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                                    </div>
                                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Recent Projects and Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Projects */}
                    <div className="lg:col-span-2">
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-white">Recent Projects</CardTitle>
                                <CardDescription className="text-gray-400">
                                    Your most recent project activity
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentProjects.map((project, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                                            <div className="flex-1">
                                                <h3 className="text-white font-medium">{project.name}</h3>
                                                <p className="text-sm text-gray-400">{project.status} • Due {project.dueDate}</p>
                                                <div className="mt-2 w-full bg-gray-600 rounded-full h-2">
                                                    <div
                                                        className="bg-red-500 h-2 rounded-full transition-all duration-300"
                                                        style={{ width: `${project.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                            <span className="text-sm text-gray-400 ml-4">{project.progress}%</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Actions */}
                    <div>
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-white">Quick Actions</CardTitle>
                                <CardDescription className="text-gray-400">
                                    Common tasks and shortcuts
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Button className="w-full bg-red-500 hover:bg-red-600 text-white justify-start">
                                    <Plus className="h-4 w-4 mr-2" />
                                    New Project
                                </Button>
                                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white justify-start">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Schedule Meeting
                                </Button>
                                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white justify-start">
                                    <FileText className="h-4 w-4 mr-2" />
                                    Create Report
                                </Button>
                                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white justify-start">
                                    <User className="h-4 w-4 mr-2" />
                                    Invite Team
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Activity Feed */}
                        <Card className="bg-gray-800 border-gray-700 mt-6">
                            <CardHeader>
                                <CardTitle className="text-white">Recent Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-sm text-white">Project updated</p>
                                            <p className="text-xs text-gray-400">2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-sm text-white">New team member joined</p>
                                            <p className="text-xs text-gray-400">5 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-sm text-white">Task completed</p>
                                            <p className="text-xs text-gray-400">1 day ago</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;