import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  Trophy, 
  Settings, 
  HelpCircle,
  ChevronRight,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
  href?: string;
}

const NavItem = ({ icon, label, active, badge, href }: NavItemProps) => {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => href && navigate(href)}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
        "hover:bg-sidebar-accent group",
        active 
          ? "bg-sidebar-accent text-sidebar-primary" 
          : "text-sidebar-foreground/70 hover:text-sidebar-foreground"
      )}
    >
      <span className={cn(
        "transition-colors",
        active ? "text-sidebar-primary" : "text-sidebar-muted group-hover:text-sidebar-foreground"
      )}>
        {icon}
      </span>
      <span className="flex-1 text-left">{label}</span>
      {badge !== undefined && (
        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
          {badge}
        </span>
      )}
      {active && (
        <ChevronRight className="w-4 h-4 text-sidebar-primary" />
      )}
    </button>
  );
};

export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar flex flex-col z-50">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-sidebar-foreground">TECH READY</h1>
            <p className="text-xs text-sidebar-muted">Learning Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" href="/" active={currentPath === "/"} />
        <NavItem icon={<BookOpen className="w-5 h-5" />} label="My Courses" badge={3} href="/my-courses" active={currentPath === "/my-courses"} />
        <NavItem icon={<GraduationCap className="w-5 h-5" />} label="Certifications" href="/certifications" active={currentPath === "/certifications"} />
        <NavItem icon={<Calendar className="w-5 h-5" />} label="Schedule" badge={2} href="/schedule" active={currentPath === "/schedule"} />
        <NavItem icon={<Trophy className="w-5 h-5" />} label="Achievements" href="/achievements" active={currentPath === "/achievements"} />
        
        <div className="pt-6 pb-2">
          <p className="px-4 text-xs font-semibold text-sidebar-muted uppercase tracking-wider">
            Support
          </p>
        </div>
        
        <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
        <NavItem icon={<HelpCircle className="w-5 h-5" />} label="Help Center" />
      </nav>

      {/* Pro Upgrade Card */}
      <div className="p-4">
        <div className="p-4 rounded-xl bg-gradient-accent text-accent-foreground">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Upgrade to Pro</span>
          </div>
          <p className="text-sm opacity-90 mb-3">
            Get unlimited access to all courses
          </p>
          <button className="w-full py-2 px-4 rounded-lg bg-sidebar font-medium text-sidebar-foreground text-sm hover:bg-sidebar-accent transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};
