import { TrendingUp } from "lucide-react";

const weekData = [
  { day: "Mon", hours: 2.5, target: 3 },
  { day: "Tue", hours: 4, target: 3 },
  { day: "Wed", hours: 3.5, target: 3 },
  { day: "Thu", hours: 1.5, target: 3 },
  { day: "Fri", hours: 5, target: 3 },
  { day: "Sat", hours: 2, target: 2 },
  { day: "Sun", hours: 1, target: 2 },
];

const maxHours = 6;

export const WeeklyProgress = () => {
  const totalHours = weekData.reduce((acc, d) => acc + d.hours, 0);
  const totalTarget = weekData.reduce((acc, d) => acc + d.target, 0);
  const percentage = Math.round((totalHours / totalTarget) * 100);

  return (
    <div className="bg-card rounded-xl shadow-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Weekly Study Time</h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {totalHours.toFixed(1)} hours of {totalTarget} hours goal
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-semibold">{percentage}%</span>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end justify-between gap-2 h-32">
        {weekData.map((data, index) => {
          const heightPercent = (data.hours / maxHours) * 100;
          const targetPercent = (data.target / maxHours) * 100;
          const isAboveTarget = data.hours >= data.target;

          return (
            <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
              <div className="relative w-full h-full flex items-end justify-center">
                {/* Target Line */}
                <div 
                  className="absolute left-0 right-0 border-t-2 border-dashed border-muted-foreground/30"
                  style={{ bottom: `${targetPercent}%` }}
                />
                
                {/* Bar */}
                <div
                  className={`w-full max-w-[32px] rounded-t-md transition-all duration-500 ${
                    isAboveTarget ? "bg-gradient-progress" : "bg-muted-foreground/30"
                  }`}
                  style={{ 
                    height: `${heightPercent}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{data.day}</span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-gradient-progress" />
          <span className="text-xs text-muted-foreground">Study Time</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 border-t-2 border-dashed border-muted-foreground/30" />
          <span className="text-xs text-muted-foreground">Daily Goal</span>
        </div>
      </div>
    </div>
  );
};
