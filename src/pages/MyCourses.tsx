import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { CourseCard } from "@/components/dashboard/CourseCard";

const courses = [
  {
    id: 1,
    title: "Complete Coding Bootcamp",
    instructor: "Sarah Johnson",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    progress: 45,
    duration: "40 hours",
    students: 2450,
    category: "Coding"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms in C++",
    instructor: "Michael Chen",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop",
    progress: 30,
    duration: "35 hours",
    students: 1890,
    category: "DSA C++"
  },
  {
    id: 3,
    title: "Professional Communication Skills",
    instructor: "Emily Roberts",
    thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=250&fit=crop",
    progress: 60,
    duration: "20 hours",
    students: 3200,
    category: "Communication"
  }
];

const MyCourses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">My Courses</h1>
            <p className="text-muted-foreground">Continue learning from where you left off</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                instructor={course.instructor}
                thumbnail={course.thumbnail}
                progress={course.progress}
                duration={course.duration}
                students={course.students}
                category={course.category}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyCourses;
