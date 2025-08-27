import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Calendar,
  CheckSquare,
  Target,
  TrendingUp,
  Timer,
  Settings,
  User,
  Plus,
  BarChart3,
  Heart
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Calendar, label: "Weekly View", path: "/", count: null, streak: null },
    { icon: CheckSquare, label: "All Tasks", path: "/tasks", count: 12, streak: null },
    { icon: Target, label: "Goals", path: "/goals", count: 3, streak: null },
    { icon: Timer, label: "Pomodoro", path: "/pomodoro", count: null, streak: null },
    { icon: Heart, label: "Habits", path: "/habits", count: null, streak: 5 },
    { icon: BarChart3, label: "Analytics", path: "/analytics", count: null, streak: null },
    { icon: Settings, label: "Settings", path: "/settings", count: null, streak: null }
  ];

  const weekStats = {
    completed: 8,
    total: 12,
    focusTime: 240, // minutes
    streak: 5
  };

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="w-80 h-full bg-background-secondary border-r border-border/50 flex flex-col"
    >
      {/* User Profile */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background-secondary" />
          </div>
          <div>
            <h3 className="font-medium">Alex Johnson</h3>
            <p className="text-xs text-muted-foreground">Level 8 Planner</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Button
                asChild
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className={`
                  w-full justify-start h-10 px-3
                  ${location.pathname === item.path ? "bg-primary/10 text-primary border-primary/20" : ""}
                `}
              >
                <Link to={item.path}>
                  <item.icon className="h-4 w-4 mr-3" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.count && (
                    <Badge variant="secondary" className="text-xs">
                      {item.count}
                    </Badge>
                  )}
                  {item.streak && (
                    <Badge className="text-xs bg-gradient-accent">
                      🔥 {item.streak}
                    </Badge>
                  )}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-6 space-y-2">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide px-3">
            Quick Actions
          </h4>
          <Button
            variant="outline"
            className="w-full justify-start bg-gradient-primary/5 border-primary/20 hover:bg-gradient-primary/10"
          >
            <Plus className="h-4 w-4 mr-3" />
            New Task
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Timer className="h-4 w-4 mr-3" />
            Start Pomodoro
          </Button>
        </div>
      </nav>

      {/* Week Progress */}
      <div className="p-4 border-t border-border/50">
        <Card className="p-4 bg-gradient-surface">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-sm">This Week</h4>
            <Badge className="bg-primary/10 text-primary text-xs">
              {Math.round((weekStats.completed / weekStats.total) * 100)}%
            </Badge>
          </div>
          
          <Progress 
            value={(weekStats.completed / weekStats.total) * 100} 
            className="h-2 mb-3"
          />
          
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <p className="text-muted-foreground">Tasks</p>
              <p className="font-medium">{weekStats.completed}/{weekStats.total}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Focus Time</p>
              <p className="font-medium">{Math.floor(weekStats.focusTime / 60)}h {weekStats.focusTime % 60}m</p>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-border/50">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Streak</span>
              <span className="font-medium text-success">🔥 {weekStats.streak} days</span>
            </div>
          </div>
        </Card>
      </div>
    </motion.aside>
  );
};

export default Sidebar;