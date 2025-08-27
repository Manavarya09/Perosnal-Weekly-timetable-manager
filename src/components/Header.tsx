import { motion } from "framer-motion";
import { Calendar, Plus, Settings, User, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur-lg"
    >
      <div className="container flex h-16 items-center justify-start px-6 space-x-6">
        {/* Logo & Brand */}
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-xl blur opacity-70" />
            <div className="relative bg-gradient-primary p-2 rounded-xl">
              <Calendar className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="text-left">
            <h1 className="gradient-text text-xl font-bold tracking-tight">
              Weekly Planner
            </h1>
            <p className="text-xs text-muted-foreground">Stay productive</p>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Week View
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Month View
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Agenda
          </Button>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 ml-auto">
          <Button
            size="sm"
            className="bg-gradient-primary text-white border-0 hover:opacity-90"
          >
            <Plus className="h-4 w-4 mr-1" />
            New Task
          </Button>
          
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
          
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-gradient-accent text-accent-foreground font-medium">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;