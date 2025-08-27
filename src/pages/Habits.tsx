import { motion } from "framer-motion";
import { Heart, Plus, Flame, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const Habits = () => {
  const habits = [
    {
      id: "1",
      name: "Morning Exercise",
      description: "30 minutes of cardio or strength training",
      streak: 12,
      frequency: "Daily",
      completedToday: true,
      category: "Health",
      color: "success"
    },
    {
      id: "2",
      name: "Read for 30min",
      description: "Read books or educational articles",
      streak: 8,
      frequency: "Daily", 
      completedToday: false,
      category: "Learning",
      color: "primary"
    },
    {
      id: "3",
      name: "Drink 8 glasses of water",
      description: "Stay hydrated throughout the day",
      streak: 5,
      frequency: "Daily",
      completedToday: true,
      category: "Health", 
      color: "accent"
    },
    {
      id: "4",
      name: "Meditate",
      description: "10 minutes of mindfulness meditation",
      streak: 3,
      frequency: "Daily",
      completedToday: false,
      category: "Wellness",
      color: "secondary"
    }
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  const getStreakColor = (streak: number) => {
    if (streak >= 10) return "text-orange-500";
    if (streak >= 5) return "text-yellow-500"; 
    return "text-gray-500";
  };

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
              <div className="flex flex-col space-y-4 mb-6">
                <div className="text-left">
                  <h2 className="text-2xl font-bold">Habit Tracker</h2>
                  <p className="text-muted-foreground">{habits.length} active habits</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button size="sm" className="bg-gradient-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    New Habit
                  </Button>
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              {habits.map((habit, index) => (
                <motion.div
                  key={habit.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <Button
                          size="sm"
                          variant={habit.completedToday ? "default" : "outline"}
                          className={`
                            h-10 w-10 rounded-full p-0
                            ${habit.completedToday ? "bg-gradient-primary" : "border-2 border-dashed"}
                          `}
                          onClick={() => {/* Handle completion toggle */}}
                        >
                          {habit.completedToday && <Check className="h-4 w-4" />}
                        </Button>
                        
                        <div className="flex-1 text-left">
                          <h3 className="font-semibold text-lg text-left">{habit.name}</h3>
                          <p className="text-sm text-muted-foreground text-left">
                            {habit.description}
                          </p>
                          <div className="flex items-center space-x-3 mt-2">
                            <Badge variant="secondary" className="text-xs">
                              {habit.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {habit.frequency}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <Flame className={`h-4 w-4 ${getStreakColor(habit.streak)}`} />
                          <span className={`font-bold ${getStreakColor(habit.streak)}`}>
                            {habit.streak}
                          </span>
                        </div>

                        <div className="flex space-x-1">
                          {daysOfWeek.map((day, dayIndex) => (
                            <div
                              key={day}
                              className={`
                                w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium
                                ${dayIndex < 5 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}
                              `}
                            >
                              {day.charAt(0)}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Card className="p-6 bg-gradient-surface">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">3/4</div>
                    <div className="text-sm text-muted-foreground">Completed Today</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success mb-1">85%</div>
                    <div className="text-sm text-muted-foreground">Week Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">12</div>
                    <div className="text-sm text-muted-foreground">Longest Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">28</div>
                    <div className="text-sm text-muted-foreground">Total Days</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Habits;