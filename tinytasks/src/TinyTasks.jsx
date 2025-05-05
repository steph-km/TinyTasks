// TaskManager.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>

        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between bg-white p-3 rounded-2xl shadow"
            >
              <span>{task.text}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTask(task.id)}
              >
                <Trash2 className="w-5 h-5 text-red-500" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
