import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Clock, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const Analytics = () => {
  const stats = {
    tasksCompleted: 45,
    totalTasks: 60,
    focusTime: 1240, // minutes
    weekStreak: 5,
    avgCompletionTime: 85 // percentage
  };

  const weeklyData = [
    { day: "Mon", completed: 8, total: 10 },
    { day: "Tue", completed: 6, total: 8 },
    { day: "Wed", completed: 9, total: 12 },
    { day: "Thu", completed: 7, total: 9 },
    { day: "Fri", completed: 5, total: 7 },
    { day: "Sat", completed: 4, total: 6 },
    { day: "Sun", completed: 6, total: 8 }
  ];

  const categories = [
    { name: "Work", completed: 18, total: 25, color: "primary" },
    { name: "Health", completed: 12, total: 15, color: "success" },
    { name: "Personal", completed: 8, total: 12, color: "accent" },
    { name: "Learning", completed: 7, total: 8, color: "secondary" }
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
                <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
                <p className="text-muted-foreground">Your productivity insights</p>
              </div>
            </motion.div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold">{stats.tasksCompleted}</p>
                      <p className="text-sm text-muted-foreground">Tasks Completed</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-accent rounded-lg">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold">{Math.floor(stats.focusTime / 60)}h</p>
                      <p className="text-sm text-muted-foreground">Focus Time</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-surface rounded-lg">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold">{stats.avgCompletionTime}%</p>
                      <p className="text-sm text-muted-foreground">Completion Rate</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold">{stats.weekStreak}</p>
                      <p className="text-sm text-muted-foreground">Day Streak</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Progress Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-left">Weekly Progress</h3>
                  <div className="space-y-4">
                    {weeklyData.map((day, index) => (
                      <div key={day.day} className="flex items-center space-x-4">
                        <div className="w-8 text-sm font-medium">{day.day}</div>
                        <div className="flex-1">
                          <Progress 
                            value={(day.completed / day.total) * 100} 
                            className="h-2"
                          />
                        </div>
                        <div className="text-sm text-muted-foreground w-12 text-right">
                          {day.completed}/{day.total}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Category Breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-left">Category Breakdown</h3>
                  <div className="space-y-4">
                    {categories.map((category, index) => (
                      <div key={category.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge 
                            className={`
                              ${category.color === 'primary' ? 'bg-primary/10 text-primary' : ''}
                              ${category.color === 'success' ? 'bg-success/10 text-success' : ''}
                              ${category.color === 'accent' ? 'bg-accent/10 text-accent' : ''}
                              ${category.color === 'secondary' ? 'bg-secondary/10 text-secondary' : ''}
                            `}
                          >
                            {category.name}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-20">
                            <Progress 
                              value={(category.completed / category.total) * 100} 
                              className="h-2"
                            />
                          </div>
                          <div className="text-sm text-muted-foreground w-12 text-right">
                            {category.completed}/{category.total}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Analytics;