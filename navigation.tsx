import { Link, useLocation } from "wouter";
import { GraduationCap, Plus, Grid3X3 } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="glass-effect border-b border-border/20 shadow-attractive sticky top-0 z-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center space-x-4 animate-pulse-hover">
            <div className="gradient-primary p-2 rounded-xl shadow-lg">
              <GraduationCap className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SchoolHub
              </h1>
              <p className="text-xs text-muted-foreground">Education Management System</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link href="/add-school">
              <button className="px-6 py-3 rounded-xl gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Plus className="w-5 h-5" />
                Add School
              </button>
            </Link>
            <Link href="/schools">
              <button className="px-6 py-3 rounded-xl gradient-secondary text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Grid3X3 className="w-5 h-5" />
                View Schools
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
