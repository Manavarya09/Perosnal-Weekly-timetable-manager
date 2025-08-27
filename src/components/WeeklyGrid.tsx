import { motion } from "framer-motion";
import { format, startOfWeek, addDays, isSameDay, isToday } from "date-fns";
import { Clock, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import TaskCard from "./TaskCard";

const WeeklyGrid = () => {
  const currentDate = new Date();
  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const days = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));
  
  // Sample tasks data - this would come from your state management
  const sampleTasks = [
    {
      id: "1",
      title: "Team Meeting",
      description: "Discuss project updates",
      time: "09:00",
      duration: 60,
      priority: "high" as const,
      date: addDays(startDate, 1),
      category: "work"
    },
    {
      id: "2", 
      title: "Gym Workout",
      description: "Leg day routine",
      time: "18:00",
      duration: 90,
      priority: "medium" as const,
      date: addDays(startDate, 2),
      category: "health"
    },
    {
      id: "3",
      title: "Code Review", 
      description: "Review pull requests",
      time: "14:00",
      duration: 45,
      priority: "high" as const,
      date: addDays(startDate, 0),
      category: "work"
    }
  ];

  const getTasksForDay = (day: Date) => {
    return sampleTasks.filter(task => isSameDay(task.date, day));
  };

  return (
    <div className="flex-1 p-6">
      {/* Week Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex flex-col space-y-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-left">
              {format(startDate, "MMMM dd")} - {format(addDays(startDate, 6), "dd, yyyy")}
            </h2>
            <p className="text-muted-foreground text-left">
              {sampleTasks.length} tasks this week
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Clock className="h-4 w-4 mr-2" />
              Time Blocks
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 h-[calc(100vh-12rem)]">
        {days.map((day, index) => {
          const dayTasks = getTasksForDay(day);
          const isCurrentDay = isToday(day);
          
          return (
            <motion.div
              key={day.toISOString()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <Card className={`
                flex-1 p-4 
                ${isCurrentDay ? 'ring-2 ring-primary/50 bg-gradient-surface' : ''} 
                hover:shadow-md transition-all duration-200
              `}>
                {/* Day Header */}
                <div className="flex items-start justify-start mb-4">
                  <div className="text-left">
                    <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      {format(day, "EEE")}
                    </h3>
                    <div className={`
                      text-lg font-bold 
                      ${isCurrentDay ? 'text-primary' : ''}
                    `}>
                      {format(day, "dd")}
                    </div>
                  </div>
                  {isCurrentDay && (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow ml-2 mt-1" />
                  )}
                </div>

                {/* Tasks */}
                <div className="space-y-2 flex-1">
                  {dayTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                  
                  {/* Add Task Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-muted-foreground hover:text-foreground border-2 border-dashed border-border hover:border-primary/50"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add task
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyGrid;