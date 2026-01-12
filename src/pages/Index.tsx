import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { UpcomingDeadlines } from "@/components/dashboard/UpcomingDeadlines";
import { WeeklyProgress } from "@/components/dashboard/WeeklyProgress";
import { BookOpen, Clock, Trophy, Target } from "lucide-react";

const courses = [
  {
    title: "Advanced React Development",
    instructor: "Dr. Sarah Chen",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    progress: 75,
    duration: "12h 30m",
    students: 2341,
    category: "Web Development",
    categoryColor: "accent" as const,
  },
  {
    title: "Machine Learning Fundamentals",
    instructor: "Prof. James Wilson",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    progress: 45,
    duration: "18h 45m",
    students: 5678,
    category: "AI & ML",
    categoryColor: "success" as const,
  },
  {
    title: "Computer Science Fundamentals",
    instructor: "Dr. Emily Parker",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    progress: 90,
    duration: "8h 15m",
    students: 8923,
    category: "Computer Science",
    categoryColor: "warning" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64">
        <Header />

        <div className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="animate-fade-in">
            <h1 className="text-2xl font-bold text-foreground">
              Welcome back, <span className="text-gradient-accent">John!</span>
            </h1>
            <p className="text-muted-foreground mt-1">
              Ready to continue your learning journey? You're making great progress!
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Courses in Progress"
              value={3}
              subtitle="2 near completion"
              icon={BookOpen}
              variant="accent"
            />
            <StatsCard
              title="Hours Studied"
              value="47.5"
              subtitle="This month"
              icon={Clock}
              trend={{ value: 12, positive: true }}
              variant="success"
            />
            <StatsCard
              title="Achievements"
              value={12}
              subtitle="3 this week"
              icon={Trophy}
              variant="warning"
            />
            <StatsCard
              title="Streak"
              value="15"
              subtitle="Days in a row"
              icon={Target}
              trend={{ value: 5, positive: true }}
              variant="default"
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Courses */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Continue Learning</h2>
                <button className="text-sm font-medium text-accent hover:underline">
                  View All Courses
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                  <div 
                    key={index} 
                    className="animate-slide-up" 
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CourseCard {...course} />
                  </div>
                ))}
              </div>

              {/* Weekly Progress */}
              <WeeklyProgress />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <UpcomingDeadlines />
              <ActivityFeed />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
