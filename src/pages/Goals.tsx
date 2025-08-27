import { motion } from "framer-motion";
import { Target, Plus, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const Goals = () => {
  const goals = [
    {
      id: "1",
      title: "Complete React Course",
      description: "Finish the advanced React course by end of month",
      progress: 75,
      target: 100,
      deadline: "2024-01-31",
      category: "Learning",
      priority: "high"
    },
    {
      id: "2", 
      title: "Exercise 5 times a week",
      description: "Maintain consistent workout routine",
      progress: 60,
      target: 100,
      deadline: "2024-02-28",
      category: "Health",
      priority: "medium"
    },
    {
      id: "3",
      title: "Read 12 books this year",
      description: "One book per month goal",
      progress: 25,
      target: 100,
      deadline: "2024-12-31", 
      category: "Personal",
      priority: "low"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Learning":
        return "bg-primary/10 text-primary";
      case "Health":
        return "bg-success/10 text-success";
      case "Personal":
        return "bg-accent/10 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
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
                  <h2 className="text-2xl font-bold">Goals & Objectives</h2>
                  <p className="text-muted-foreground">{goals.length} active goals</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button size="sm" className="bg-gradient-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    New Goal
                  </Button>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {goals.map((goal, index) => (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-lg mb-2 text-left">{goal.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 text-left">
                          {goal.description}
                        </p>
                      </div>
                      <Target className="h-5 w-5 text-primary mt-1" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge className={`text-xs ${getCategoryColor(goal.category)}`}>
                          {goal.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Due: {new Date(goal.deadline).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Goals;