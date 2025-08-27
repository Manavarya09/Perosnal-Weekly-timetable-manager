import { motion } from "framer-motion";
import { Search, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TaskCard from "@/components/TaskCard";
import { addDays } from "date-fns";

const AllTasks = () => {
  const allTasks = [
    {
      id: "1",
      title: "Team Meeting",
      description: "Discuss project updates and quarterly goals",
      time: "09:00",
      duration: 60,
      priority: "high" as const,
      date: new Date(),
      category: "work"
    },
    {
      id: "2", 
      title: "Gym Workout",
      description: "Leg day routine with cardio",
      time: "18:00",
      duration: 90,
      priority: "medium" as const,
      date: addDays(new Date(), 1),
      category: "health"
    },
    {
      id: "3",
      title: "Code Review", 
      description: "Review pull requests from the team",
      time: "14:00",
      duration: 45,
      priority: "high" as const,
      date: addDays(new Date(), -1),
      category: "work"
    },
    {
      id: "4",
      title: "Grocery Shopping",
      description: "Weekly grocery run",
      time: "16:00", 
      duration: 30,
      priority: "low" as const,
      date: addDays(new Date(), 2),
      category: "personal"
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
              <div className="flex flex-col space-y-4 mb-6">
                <div className="text-left">
                  <h2 className="text-2xl font-bold">All Tasks</h2>
                  <p className="text-muted-foreground">{allTasks.length} tasks total</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search tasks..." 
                      className="pl-10 bg-background-secondary border-border/50"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm" className="bg-gradient-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    New Task
                  </Button>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {allTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TaskCard task={task} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default AllTasks;