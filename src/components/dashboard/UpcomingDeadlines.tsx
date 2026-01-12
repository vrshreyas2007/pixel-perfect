import { Calendar, AlertCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Deadline {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  daysLeft: number;
  type: "assignment" | "quiz" | "project";
}

const deadlines: Deadline[] = [
  {
    id: "1",
    title: "React Components Assignment",
    course: "Advanced React Development",
    dueDate: "Jan 15, 2026",
    daysLeft: 3,
    type: "assignment"
  },
  {
    id: "2",
    title: "Data Structures Quiz",
    course: "Computer Science Fundamentals",
    dueDate: "Jan 18, 2026",
    daysLeft: 6,
    type: "quiz"
  },
  {
    id: "3",
    title: "Capstone Project Milestone",
    course: "Full Stack Engineering",
    dueDate: "Jan 22, 2026",
    daysLeft: 10,
    type: "project"
  },
];

const typeStyles = {
  assignment: "bg-accent/10 text-accent border-accent/20",
  quiz: "bg-warning/10 text-warning border-warning/20",
  project: "bg-success/10 text-success border-success/20",
};

export const UpcomingDeadlines = () => {
  return (
    <div className="bg-card rounded-xl shadow-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-accent" />
          <h2 className="text-lg font-semibold text-foreground">Upcoming Deadlines</h2>
        </div>
        <button className="text-sm font-medium text-accent hover:underline">
          View Calendar
        </button>
      </div>

      <div className="space-y-3">
        {deadlines.map((deadline, index) => (
          <div
            key={deadline.id}
            className={cn(
              "p-4 rounded-lg border transition-all hover:shadow-md cursor-pointer animate-slide-up",
              typeStyles[deadline.type]
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground">{deadline.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{deadline.course}</p>
              </div>
              {deadline.daysLeft <= 3 && (
                <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
              )}
            </div>
            
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{deadline.dueDate}</span>
              </div>
              <span className={cn(
                "px-2 py-0.5 rounded-full text-xs font-semibold",
                deadline.daysLeft <= 3 
                  ? "bg-destructive/10 text-destructive" 
                  : "bg-muted text-muted-foreground"
              )}>
                {deadline.daysLeft} days left
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
