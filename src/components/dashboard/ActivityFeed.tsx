import { CheckCircle2, Star, BookOpen, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  type: "completed" | "achievement" | "started" | "certificate";
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "completed",
    title: "Lesson Completed",
    description: "React Hooks: Advanced Patterns",
    time: "2 hours ago"
  },
  {
    id: "2",
    type: "achievement",
    title: "New Achievement",
    description: "Completed 10 lessons this week",
    time: "5 hours ago"
  },
  {
    id: "3",
    type: "started",
    title: "Started New Course",
    description: "Machine Learning Fundamentals",
    time: "Yesterday"
  },
  {
    id: "4",
    type: "certificate",
    title: "Certificate Earned",
    description: "Python for Data Science",
    time: "2 days ago"
  },
];

const iconMap = {
  completed: { icon: CheckCircle2, className: "bg-success/10 text-success" },
  achievement: { icon: Star, className: "bg-warning/10 text-warning" },
  started: { icon: BookOpen, className: "bg-accent/10 text-accent" },
  certificate: { icon: Award, className: "bg-primary/10 text-primary" },
};

export const ActivityFeed = () => {
  return (
    <div className="bg-card rounded-xl shadow-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
        <button className="text-sm font-medium text-accent hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const { icon: Icon, className } = iconMap[activity.type];
          
          return (
            <div
              key={activity.id}
              className={cn(
                "flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer animate-slide-up",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn("p-2 rounded-lg shrink-0", className)}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.title}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0">{activity.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
