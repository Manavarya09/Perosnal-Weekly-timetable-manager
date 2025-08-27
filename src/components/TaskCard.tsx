import { motion } from "framer-motion";
import { Clock, Flag, MoreVertical } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Task {
  id: string;
  title: string;
  description?: string;
  time: string;
  duration: number;
  priority: "low" | "medium" | "high" | "urgent";
  date: Date;
  category: string;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "low":
        return "bg-muted text-muted-foreground";
      case "medium":
        return "bg-warning/10 text-warning border-warning/20";
      case "high":
        return "bg-error/10 text-error border-error/20";
      case "urgent":
        return "bg-secondary/10 text-secondary border-secondary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "work":
        return "bg-primary/10 text-primary";
      case "health":
        return "bg-success/10 text-success";
      case "personal":
        return "bg-accent/10 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Card className="p-3 cursor-pointer hover:shadow-md transition-all duration-200 border-l-4 border-l-primary/50">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0 text-left">
            <h4 className="font-medium text-sm leading-tight mb-1 truncate text-left">
              {task.title}
            </h4>
            {task.description && (
              <p className="text-xs text-muted-foreground line-clamp-2 text-left">
                {task.description}
              </p>
            )}
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100">
                <MoreVertical className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem className="text-error">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {task.time}
            </div>
            <Badge variant="outline" className={`text-xs px-1.5 py-0.5 ${getPriorityColor(task.priority)}`}>
              <Flag className="h-2.5 w-2.5 mr-1" />
              {task.priority}
            </Badge>
          </div>
          
          <Badge variant="secondary" className={`text-xs px-1.5 py-0.5 ${getCategoryColor(task.category)}`}>
            {task.category}
          </Badge>
        </div>

        {task.duration && (
          <div className="mt-2 text-xs text-muted-foreground">
            Duration: {task.duration}min
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default TaskCard;