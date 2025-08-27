import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import WeeklyGrid from "@/components/WeeklyGrid";
import TaskForm from "@/components/TaskForm";

const Index = () => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  const handleCreateTask = (taskData: any) => {
    // This would integrate with your state management / backend
    console.log("Creating task:", taskData);
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
          <WeeklyGrid />
        </motion.main>
      </div>

      <TaskForm
        isOpen={isTaskFormOpen}
        onClose={() => setIsTaskFormOpen(false)}
        onSubmit={handleCreateTask}
      />
    </div>
  );
};

export default Index;
