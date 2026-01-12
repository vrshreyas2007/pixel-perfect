import { Clock, Users, Play } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  title: string;
  instructor: string;
  thumbnail: string;
  progress: number;
  duration: string;
  students: number;
  category: string;
  categoryColor?: "accent" | "success" | "warning" | "primary";
}

export const CourseCard = ({
  title,
  instructor,
  thumbnail,
  progress,
  duration,
  students,
  category,
  categoryColor = "accent"
}: CourseCardProps) => {
  const categoryStyles = {
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    primary: "bg-primary/10 text-primary",
  };

  return (
    <div className="group bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Play Button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
          <Play className="w-5 h-5 text-accent-foreground fill-current ml-0.5" />
        </button>

        {/* Category Badge */}
        <span className={cn(
          "absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold",
          categoryStyles[categoryColor]
        )}>
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{instructor}</p>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold text-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 pt-2 border-t border-border">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
