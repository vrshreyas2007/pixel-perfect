import { Search, Bell, MessageSquare, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 h-16 bg-card/80 backdrop-blur-md border-b border-border flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search courses, lessons..."
            className="w-full pl-10 pr-4 py-2.5 bg-secondary rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
        </button>

        {/* Messages */}
        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
          <MessageSquare className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-warning rounded-full" />
        </button>

        {/* User */}
        <button className="flex items-center gap-3 pl-4 border-l border-border hover:bg-secondary rounded-lg p-2 transition-colors">
          <Avatar className="w-9 h-9">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback className="bg-accent text-accent-foreground">JD</AvatarFallback>
          </Avatar>
          <div className="text-left hidden sm:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Engineering Student</p>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground hidden sm:block" />
        </button>
      </div>
    </header>
  );
};
