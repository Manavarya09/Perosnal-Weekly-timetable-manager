import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "shortBreak" | "longBreak">("work");
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  const modes = {
    work: { duration: 25, label: "Focus Time", color: "primary" },
    shortBreak: { duration: 5, label: "Short Break", color: "success" },
    longBreak: { duration: 15, label: "Long Break", color: "accent" }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }, 1000);
    } else if (minutes === 0 && seconds === 0 && isRunning) {
      setIsRunning(false);
      if (mode === "work") {
        setCompletedPomodoros(prev => prev + 1);
      }
    }
    
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, mode]);

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(modes[mode].duration);
    setSeconds(0);
  };

  const switchMode = (newMode: typeof mode) => {
    setMode(newMode);
    setMinutes(modes[newMode].duration);
    setSeconds(0);
    setIsRunning(false);
  };

  const formatTime = (mins: number, secs: number) => {
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
          <div className="flex-1 p-6 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-2xl"
            >
              <Card className="p-8 text-center bg-gradient-surface">
                <div className="mb-8">
                  <div className="flex justify-center space-x-2 mb-6">
                    {(Object.keys(modes) as Array<keyof typeof modes>).map((modeKey) => (
                      <Button
                        key={modeKey}
                        variant={mode === modeKey ? "default" : "outline"}
                        size="sm"
                        onClick={() => switchMode(modeKey)}
                        className={mode === modeKey ? "bg-gradient-primary" : ""}
                      >
                        {modes[modeKey].label}
                      </Button>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h2 className="text-6xl font-bold gradient-text mb-4">
                      {formatTime(minutes, seconds)}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      {modes[mode].label}
                    </p>
                  </div>

                  <div className="flex justify-center space-x-4 mb-6">
                    <Button
                      size="lg"
                      onClick={() => setIsRunning(!isRunning)}
                      className="bg-gradient-primary px-8"
                    >
                      {isRunning ? (
                        <>
                          <Pause className="h-5 w-5 mr-2" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="h-5 w-5 mr-2" />
                          Start
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={resetTimer}
                    >
                      <RotateCcw className="h-5 w-5 mr-2" />
                      Reset
                    </Button>
                  </div>

                  <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <span>Completed today:</span>
                      <Badge className="bg-primary/10 text-primary">
                        🍅 {completedPomodoros}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{completedPomodoros}</div>
                    <div className="text-sm text-muted-foreground">Today</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">12</div>
                    <div className="text-sm text-muted-foreground">This Week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">48</div>
                    <div className="text-sm text-muted-foreground">This Month</div>
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

export default Pomodoro;