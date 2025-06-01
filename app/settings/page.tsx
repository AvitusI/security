"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LogOut, Settings, User, Bell, Shield, Eye, Mail, Globe } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

const SettingsPage = () => {
    const [user] = useState({
        name: "User",
        email: "mail@email.com",
        avatar: null
    });

    const [mfaEnabled, setMfaEnabled] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [publicProfile, setPublicProfile] = useState(true);
    const [darkMode, setDarkMode] = useState(true);
    const [showMfaDialog, setShowMfaDialog] = useState(false);

    // const { toast } = useToast();

    const handleMfaToggle = () => {
        if (!mfaEnabled) {
            setShowMfaDialog(true);
        } else {
            setMfaEnabled(false);
            /*
            toast({
              title: "MFA Disabled",
              description: "Multi-factor authentication has been turned off.",
            });
            */
        }
    };

    const confirmMfaEnable = () => {
        setMfaEnabled(true);
        setShowMfaDialog(false);
        /*
        toast({
          title: "MFA Enabled",
          description: "Multi-factor authentication is now active. You'll need to complete an extra verification step when logging in.",
        });
        */
    };

    const handleLogout = () => {
        console.log("Logout clicked");
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
                        </div>

                        {/* User Menu */}
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <Link href="/home">
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                    <User className="h-5 w-5" />
                                </Button>
                            </Link>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                                    <User className="h-4 w-4 text-white" />
                                </div>
                                <div className="hidden md:block">
                                    <p className="text-sm font-medium text-white">{user.name}</p>
                                    <p className="text-xs text-gray-400">{user.email}</p>
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
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
                    <p className="text-gray-400">Manage your account preferences and security settings.</p>
                </div>

                <div className="space-y-6">
                    {/* Account Settings */}
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <User className="h-5 w-5 mr-2" />
                                Account Information
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Update your personal information
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                                    <Input
                                        id="name"
                                        defaultValue={user.name}
                                        className="bg-gray-700 border-gray-600 text-white"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        defaultValue={user.email}
                                        className="bg-gray-700 border-gray-600 text-white"
                                    />
                                </div>
                            </div>
                            <Button className="bg-red-500 hover:bg-red-600 text-white">
                                Save Changes
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Security Settings */}
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Shield className="h-5 w-5 mr-2" />
                                Security
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Manage your account security and authentication
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-white">Multi-Factor Authentication (MFA)</Label>
                                    <p className="text-sm text-gray-400">
                                        Add an extra layer of security to your account
                                    </p>
                                </div>
                                <Switch
                                    checked={mfaEnabled}
                                    onCheckedChange={handleMfaToggle}
                                />
                            </div>
                            <div className="pt-4 border-t border-gray-700">
                                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                                    Change Password
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Notification Settings */}
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Bell className="h-5 w-5 mr-2" />
                                Notifications
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Choose how you want to be notified
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-white flex items-center">
                                        <Mail className="h-4 w-4 mr-2" />
                                        Email Notifications
                                    </Label>
                                    <p className="text-sm text-gray-400">
                                        Receive updates via email
                                    </p>
                                </div>
                                <Switch
                                    checked={emailNotifications}
                                    onCheckedChange={setEmailNotifications}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-white">Push Notifications</Label>
                                    <p className="text-sm text-gray-400">
                                        Receive push notifications in your browser
                                    </p>
                                </div>
                                <Switch
                                    checked={pushNotifications}
                                    onCheckedChange={setPushNotifications}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Privacy Settings */}
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Eye className="h-5 w-5 mr-2" />
                                Privacy
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Control your privacy and data sharing preferences
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-white flex items-center">
                                        <Globe className="h-4 w-4 mr-2" />
                                        Public Profile
                                    </Label>
                                    <p className="text-sm text-gray-400">
                                        Make your profile visible to other users
                                    </p>
                                </div>
                                <Switch
                                    checked={publicProfile}
                                    onCheckedChange={setPublicProfile}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Appearance Settings */}
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Settings className="h-5 w-5 mr-2" />
                                Appearance
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Customize the look and feel of your interface
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-white">Dark Mode</Label>
                                    <p className="text-sm text-gray-400">
                                        Use dark theme for better visibility in low light
                                    </p>
                                </div>
                                <Switch
                                    checked={darkMode}
                                    onCheckedChange={setDarkMode}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>

            {/* MFA Confirmation Dialog */}
            <Dialog open={showMfaDialog} onOpenChange={setShowMfaDialog}>
                <DialogContent className="bg-gray-800 border-gray-700">
                    <DialogHeader>
                        <DialogTitle className="text-white flex items-center">
                            <Shield className="h-5 w-5 mr-2" />
                            Enable Multi-Factor Authentication
                        </DialogTitle>
                        <DialogDescription className="text-gray-400">
                            Turning on MFA will add an extra security step to your login process. After entering your password, you will need to complete an additional verification step using an authenticator app or SMS.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <p className="text-blue-400 text-sm">
                                <strong>What this means:</strong> Every time you log in, you will be prompted to enter a verification code in addition to your password. This significantly improves your account security.
                            </p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setShowMfaDialog(false)}
                            className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={confirmMfaEnable}
                            className="bg-red-500 hover:bg-red-600 text-white"
                        >
                            Enable MFA
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default SettingsPage;