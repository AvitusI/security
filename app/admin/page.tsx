"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LogOut, Settings, Bell, BarChart3, Calendar, Plus, Users, Shield, Database, Activity } from "lucide-react";

const AdminDashboard = () => {
    const [admin] = useState({
        name: "Admin User",
        email: "admin@example.com",
        avatar: null
    });

    const router = useRouter();

    const handleLogout = () => {
        console.log("Admin logout clicked");
        // Navigate to home page or login page
        router.push("/login");
    };

    const adminStats = [
        { title: "Total Users", value: "1,234", icon: Users, color: "text-blue-400" },
        { title: "Active Projects", value: "89", icon: Calendar, color: "text-green-400" },
        { title: "System Health", value: "98%", icon: Activity, color: "text-purple-400" },
        { title: "Data Storage", value: "2.1TB", icon: Database, color: "text-yellow-400" }
    ];

    const recentUsers = [
        { name: "John Doe", email: "john@example.com", role: "User", status: "Active", joinDate: "Dec 15" },
        { name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active", joinDate: "Dec 14" },
        { name: "Mike Johnson", email: "mike@example.com", role: "User", status: "Inactive", joinDate: "Dec 13" },
        { name: "Sarah Wilson", email: "sarah@example.com", role: "User", status: "Active", joinDate: "Dec 12" },
        { name: "Tom Brown", email: "tom@example.com", role: "Editor", status: "Pending", joinDate: "Dec 11" }
    ];

    const systemLogs = [
        { action: "User Registration", user: "john@example.com", time: "2 hours ago", status: "success" },
        { action: "Database Backup", user: "System", time: "4 hours ago", status: "success" },
        { action: "Failed Login", user: "unknown@example.com", time: "6 hours ago", status: "warning" },
        { action: "Server Restart", user: "Admin", time: "1 day ago", status: "info" }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active": return "text-green-400";
            case "Inactive": return "text-red-400";
            case "Pending": return "text-yellow-400";
            default: return "text-gray-400";
        }
    };

    const getLogStatusColor = (status: string) => {
        switch (status) {
            case "success": return "text-green-400";
            case "warning": return "text-yellow-400";
            case "error": return "text-red-400";
            case "info": return "text-blue-400";
            default: return "text-gray-400";
        }
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <span className="ml-2 text-white text-xl font-semibold">anima</span>
                            <div className="ml-4 px-2 py-1 bg-red-500/20 rounded-md">
                                <span className="text-red-400 text-xs font-medium flex items-center">
                                    <Shield className="h-3 w-3 mr-1" />
                                    ADMIN
                                </span>
                            </div>
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
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                                    <Shield className="h-4 w-4 text-white" />
                                </div>
                                <div className="hidden md:block">
                                    <p className="text-sm font-medium text-white">{admin.name}</p>
                                    <p className="text-xs text-gray-400">{admin.email}</p>
                                </div>
                            </div>
                            <Button
                                onClick={handleLogout}
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
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-400">System overview and user management controls.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {adminStats.map((stat, index) => (
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

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* User Management Table */}
                    <div className="lg:col-span-2">
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-white">User Management</CardTitle>
                                <CardDescription className="text-gray-400">
                                    Manage user accounts and permissions
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-gray-700">
                                            <TableHead className="text-gray-300">Name</TableHead>
                                            <TableHead className="text-gray-300">Role</TableHead>
                                            <TableHead className="text-gray-300">Status</TableHead>
                                            <TableHead className="text-gray-300">Joined</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {recentUsers.map((user, index) => (
                                            <TableRow key={index} className="border-gray-700">
                                                <TableCell>
                                                    <div>
                                                        <p className="text-white font-medium">{user.name}</p>
                                                        <p className="text-sm text-gray-400">{user.email}</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-gray-300">{user.role}</TableCell>
                                                <TableCell className={getStatusColor(user.status)}>{user.status}</TableCell>
                                                <TableCell className="text-gray-400">{user.joinDate}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Admin Actions */}
                    <div className="space-y-6">
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-white">Admin Actions</CardTitle>
                                <CardDescription className="text-gray-400">
                                    Quick administrative tasks
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Button className="w-full bg-red-500 hover:bg-red-600 text-white justify-start">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add New User
                                </Button>
                                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white justify-start">
                                    <Users className="h-4 w-4 mr-2" />
                                    Manage Roles
                                </Button>
                                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white justify-start">
                                    <Database className="h-4 w-4 mr-2" />
                                    Database Backup
                                </Button>
                                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white justify-start">
                                    <BarChart3 className="h-4 w-4 mr-2" />
                                    View Analytics
                                </Button>
                            </CardContent>
                        </Card>

                        {/* System Logs */}
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-white">System Logs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {systemLogs.map((log, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className={`w-2 h-2 rounded-full mt-2 ${getLogStatusColor(log.status).replace('text-', 'bg-')}`}></div>
                                            <div className="flex-1">
                                                <p className="text-sm text-white">{log.action}</p>
                                                <p className="text-xs text-gray-400">{log.user} • {log.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;