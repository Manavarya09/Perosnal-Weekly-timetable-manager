import { motion } from "framer-motion";
import { Settings as SettingsIcon, User, Bell, Palette, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const Settings = () => {
  const settingsSections = [
    {
      title: "Profile",
      icon: User,
      items: [
        { label: "Display Name", type: "input", value: "Alex Johnson" },
        { label: "Email", type: "input", value: "alex.johnson@example.com" },
        { label: "Profile Level", type: "display", value: "Level 8 Planner" }
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        { label: "Task Reminders", type: "toggle", value: true },
        { label: "Daily Summary", type: "toggle", value: true },
        { label: "Habit Notifications", type: "toggle", value: false },
        { label: "Pomodoro Alerts", type: "toggle", value: true }
      ]
    },
    {
      title: "Appearance",
      icon: Palette,
      items: [
        { label: "Dark Mode", type: "toggle", value: true },
        { label: "Animations", type: "toggle", value: true },
        { label: "Compact View", type: "toggle", value: false }
      ]
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      items: [
        { label: "Two-Factor Auth", type: "toggle", value: false },
        { label: "Activity Tracking", type: "toggle", value: true },
        { label: "Data Export", type: "button", value: "Export Data" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col overflow-hidden"
        >
          <div className="flex-1 p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="text-left">
                <h2 className="text-2xl font-bold">Settings</h2>
                <p className="text-muted-foreground">Manage your preferences and account</p>
              </div>
            </motion.div>

            <div className="max-w-4xl space-y-6">
              {settingsSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <section.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">{section.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={item.label} className="flex items-center justify-between py-2">
                          <div className="text-left">
                            <Label className="text-sm font-medium">{item.label}</Label>
                          </div>
                          
                          <div className="flex items-center">
                            {item.type === "input" && (
                              <Input
                                defaultValue={item.value as string}
                                className="w-64"
                              />
                            )}
                            
                            {item.type === "toggle" && (
                              <Switch defaultChecked={item.value as boolean} />
                            )}
                            
                            {item.type === "display" && (
                              <Badge className="bg-primary/10 text-primary">
                                {item.value}
                              </Badge>
                            )}
                            
                            {item.type === "button" && (
                              <Button variant="outline" size="sm">
                                {item.value}
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Save Changes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-end space-x-4"
              >
                <Button variant="outline">
                  Reset to Default
                </Button>
                <Button className="bg-gradient-primary">
                  Save Changes
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Settings;