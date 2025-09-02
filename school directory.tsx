import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type School } from "@shared/schema";
import { Search, MapPin, Building, Mail, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: schools = [], isLoading, error } = useQuery<School[]>({
    queryKey: ["/api/schools"],
  });

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with beautiful styling */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Schools Directory
          </h1>
        </div>

        {/* Enhanced search functionality */}
        <div className="mb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6 z-10" />
              <Input
                type="text"
                placeholder="Search schools by name, city, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 py-5 text-lg border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>

        {/* Ecommerce-style schools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSchools.map((school, index) => (
            <Card 
              key={school.id} 
              className="overflow-hidden gradient-card shadow-attractive border-0 hover:shadow-hover transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-school-${school.id}`}
            >
              <div className="relative overflow-hidden">
                {school.image ? (
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-school-${school.id}`}
                  />
                ) : (
                  <div className="w-full h-56 gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Building className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {school.name}
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-start bg-purple-50 p-3 rounded-xl">
                    <MapPin className="mt-0.5 mr-3 text-purple-500 flex-shrink-0 w-5 h-5" />
                    <span className="line-clamp-2 text-gray-700 font-medium">
                      {school.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center bg-blue-50 p-3 rounded-xl">
                    <Building className="mr-3 text-blue-500 flex-shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      {school.city}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full text-base font-bold py-3 rounded-xl gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Eye className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type School } from "@shared/schema";
import { Search, MapPin, Building, Mail, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: schools = [], isLoading, error } = useQuery<School[]>({
    queryKey: ["/api/schools"],
  });

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with beautiful styling */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Schools Directory
          </h1>
        </div>

        {/* Enhanced search functionality */}
        <div className="mb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6 z-10" />
              <Input
                type="text"
                placeholder="Search schools by name, city, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 py-5 text-lg border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>

        {/* Ecommerce-style schools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSchools.map((school, index) => (
            <Card 
              key={school.id} 
              className="overflow-hidden gradient-card shadow-attractive border-0 hover:shadow-hover transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-school-${school.id}`}
            >
              <div className="relative overflow-hidden">
                {school.image ? (
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-school-${school.id}`}
                  />
                ) : (
                  <div className="w-full h-56 gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Building className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {school.name}
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-start bg-purple-50 p-3 rounded-xl">
                    <MapPin className="mt-0.5 mr-3 text-purple-500 flex-shrink-0 w-5 h-5" />
                    <span className="line-clamp-2 text-gray-700 font-medium">
                      {school.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center bg-blue-50 p-3 rounded-xl">
                    <Building className="mr-3 text-blue-500 flex-shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      {school.city}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full text-base font-bold py-3 rounded-xl gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Eye className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type School } from "@shared/schema";
import { Search, MapPin, Building, Mail, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: schools = [], isLoading, error } = useQuery<School[]>({
    queryKey: ["/api/schools"],
  });

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with beautiful styling */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Schools Directory
          </h1>
        </div>

        {/* Enhanced search functionality */}
        <div className="mb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6 z-10" />
              <Input
                type="text"
                placeholder="Search schools by name, city, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 py-5 text-lg border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>

        {/* Ecommerce-style schools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSchools.map((school, index) => (
            <Card 
              key={school.id} 
              className="overflow-hidden gradient-card shadow-attractive border-0 hover:shadow-hover transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-school-${school.id}`}
            >
              <div className="relative overflow-hidden">
                {school.image ? (
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-school-${school.id}`}
                  />
                ) : (
                  <div className="w-full h-56 gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Building className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {school.name}
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-start bg-purple-50 p-3 rounded-xl">
                    <MapPin className="mt-0.5 mr-3 text-purple-500 flex-shrink-0 w-5 h-5" />
                    <span className="line-clamp-2 text-gray-700 font-medium">
                      {school.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center bg-blue-50 p-3 rounded-xl">
                    <Building className="mr-3 text-blue-500 flex-shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      {school.city}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full text-base font-bold py-3 rounded-xl gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Eye className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type School } from "@shared/schema";
import { Search, MapPin, Building, Mail, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: schools = [], isLoading, error } = useQuery<School[]>({
    queryKey: ["/api/schools"],
  });

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with beautiful styling */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Schools Directory
          </h1>
        </div>

        {/* Enhanced search functionality */}
        <div className="mb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6 z-10" />
              <Input
                type="text"
                placeholder="Search schools by name, city, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 py-5 text-lg border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>

        {/* Ecommerce-style schools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSchools.map((school, index) => (
            <Card 
              key={school.id} 
              className="overflow-hidden gradient-card shadow-attractive border-0 hover:shadow-hover transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-school-${school.id}`}
            >
              <div className="relative overflow-hidden">
                {school.image ? (
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-school-${school.id}`}
                  />
                ) : (
                  <div className="w-full h-56 gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Building className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {school.name}
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-start bg-purple-50 p-3 rounded-xl">
                    <MapPin className="mt-0.5 mr-3 text-purple-500 flex-shrink-0 w-5 h-5" />
                    <span className="line-clamp-2 text-gray-700 font-medium">
                      {school.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center bg-blue-50 p-3 rounded-xl">
                    <Building className="mr-3 text-blue-500 flex-shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      {school.city}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full text-base font-bold py-3 rounded-xl gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Eye className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type School } from "@shared/schema";
import { Search, MapPin, Building, Mail, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: schools = [], isLoading, error } = useQuery<School[]>({
    queryKey: ["/api/schools"],
  });

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with beautiful styling */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Schools Directory
          </h1>
        </div>

        {/* Enhanced search functionality */}
        <div className="mb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6 z-10" />
              <Input
                type="text"
                placeholder="Search schools by name, city, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 py-5 text-lg border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>

        {/* Ecommerce-style schools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSchools.map((school, index) => (
            <Card 
              key={school.id} 
              className="overflow-hidden gradient-card shadow-attractive border-0 hover:shadow-hover transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-school-${school.id}`}
            >
              <div className="relative overflow-hidden">
                {school.image ? (
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-school-${school.id}`}
                  />
                ) : (
                  <div className="w-full h-56 gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Building className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {school.name}
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-start bg-purple-50 p-3 rounded-xl">
                    <MapPin className="mt-0.5 mr-3 text-purple-500 flex-shrink-0 w-5 h-5" />
                    <span className="line-clamp-2 text-gray-700 font-medium">
                      {school.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center bg-blue-50 p-3 rounded-xl">
                    <Building className="mr-3 text-blue-500 flex-shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      {school.city}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full text-base font-bold py-3 rounded-xl gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Eye className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type School } from "@shared/schema";
import { Search, MapPin, Building, Mail, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: schools = [], isLoading, error } = useQuery<School[]>({
    queryKey: ["/api/schools"],
  });

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with beautiful styling */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Schools Directory
          </h1>
        </div>

        {/* Enhanced search functionality */}
        <div className="mb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6 z-10" />
              <Input
                type="text"
                placeholder="Search schools by name, city, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 py-5 text-lg border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>

        {/* Ecommerce-style schools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSchools.map((school, index) => (
            <Card 
              key={school.id} 
              className="overflow-hidden gradient-card shadow-attractive border-0 hover:shadow-hover transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-school-${school.id}`}
            >
              <div className="relative overflow-hidden">
                {school.image ? (
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-school-${school.id}`}
                  />
                ) : (
                  <div className="w-full h-56 gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Building className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {school.name}
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-start bg-purple-50 p-3 rounded-xl">
                    <MapPin className="mt-0.5 mr-3 text-purple-500 flex-shrink-0 w-5 h-5" />
                    <span className="line-clamp-2 text-gray-700 font-medium">
                      {school.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center bg-blue-50 p-3 rounded-xl">
                    <Building className="mr-3 text-blue-500 flex-shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      {school.city}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full text-base font-bold py-3 rounded-xl gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Eye className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type School } from "@shared/schema";
import { Search, MapPin, Building, Mail, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: schools = [], isLoading, error } = useQuery<School[]>({
    queryKey: ["/api/schools"],
  });

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with beautiful styling */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Schools Directory
          </h1>
        </div>

        {/* Enhanced search functionality */}
        <div className="mb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6 z-10" />
              <Input
                type="text"
                placeholder="Search schools by name, city, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 py-5 text-lg border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>

        {/* Ecommerce-style schools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSchools.map((school, index) => (
            <Card 
              key={school.id} 
              className="overflow-hidden gradient-card shadow-attractive border-0 hover:shadow-hover transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-school-${school.id}`}
            >
              <div className="relative overflow-hidden">
                {school.image ? (
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-school-${school.id}`}
                  />
                ) : (
                  <div className="w-full h-56 gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Building className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {school.name}
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-start bg-purple-50 p-3 rounded-xl">
                    <MapPin className="mt-0.5 mr-3 text-purple-500 flex-shrink-0 w-5 h-5" />
                    <span className="line-clamp-2 text-gray-700 font-medium">
                      {school.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center bg-blue-50 p-3 rounded-xl">
                    <Building className="mr-3 text-blue-500 flex-shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      {school.city}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full text-base font-bold py-3 rounded-xl gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Eye className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type School } from "@shared/schema";
import { Search, MapPin, Building, Mail, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: schools = [], isLoading, error } = useQuery<School[]>({
    queryKey: ["/api/schools"],
  });

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with beautiful styling */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Schools Directory
          </h1>
        </div>

        {/* Enhanced search functionality */}
        <div className="mb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6 z-10" />
              <Input
                type="text"
                placeholder="Search schools by name, city, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 py-5 text-lg border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>

        {/* Ecommerce-style schools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSchools.map((school, index) => (
            <Card 
              key={school.id} 
              className="overflow-hidden gradient-card shadow-attractive border-0 hover:shadow-hover transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-school-${school.id}`}
            >
              <div className="relative overflow-hidden">
                {school.image ? (
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-school-${school.id}`}
                  />
                ) : (
                  <div className="w-full h-56 gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Building className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {school.name}
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-start bg-purple-50 p-3 rounded-xl">
                    <MapPin className="mt-0.5 mr-3 text-purple-500 flex-shrink-0 w-5 h-5" />
                    <span className="line-clamp-2 text-gray-700 font-medium">
                      {school.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center bg-blue-50 p-3 rounded-xl">
                    <Building className="mr-3 text-blue-500 flex-shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      {school.city}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full text-base font-bold py-3 rounded-xl gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Eye className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type School } from "@shared/schema";
import { Search, MapPin, Building, Mail, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: schools = [], isLoading, error } = useQuery<School[]>({
    queryKey: ["/api/schools"],
  });

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with beautiful styling */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Schools Directory
          </h1>
        </div>

        {/* Enhanced search functionality */}
        <div className="mb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6 z-10" />
              <Input
                type="text"
                placeholder="Search schools by name, city, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 py-5 text-lg border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>

        {/* Ecommerce-style schools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSchools.map((school, index) => (
            <Card 
              key={school.id} 
              className="overflow-hidden gradient-card shadow-attractive border-0 hover:shadow-hover transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-school-${school.id}`}
            >
              <div className="relative overflow-hidden">
                {school.image ? (
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-school-${school.id}`}
                  />
                ) : (
                  <div className="w-full h-56 gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Building className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {school.name}
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-start bg-purple-50 p-3 rounded-xl">
                    <MapPin className="mt-0.5 mr-3 text-purple-500 flex-shrink-0 w-5 h-5" />
                    <span className="line-clamp-2 text-gray-700 font-medium">
                      {school.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center bg-blue-50 p-3 rounded-xl">
                    <Building className="mr-3 text-blue-500 flex-shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      {school.city}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full text-base font-bold py-3 rounded-xl gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Eye className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type School } from "@shared/schema";
import { Search, MapPin, Building, Mail, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: schools = [], isLoading, error } = useQuery<School[]>({
    queryKey: ["/api/schools"],
  });

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with beautiful styling */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Schools Directory
          </h1>
        </div>

        {/* Enhanced search functionality */}
        <div className="mb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6 z-10" />
              <Input
                type="text"
                placeholder="Search schools by name, city, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 py-5 text-lg border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>

        {/* Ecommerce-style schools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSchools.map((school, index) => (
            <Card 
              key={school.id} 
              className="overflow-hidden gradient-card shadow-attractive border-0 hover:shadow-hover transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-school-${school.id}`}
            >
              <div className="relative overflow-hidden">
                {school.image ? (
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-school-${school.id}`}
                  />
                ) : (
                  <div className="w-full h-56 gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Building className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {school.name}
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-start bg-purple-50 p-3 rounded-xl">
                    <MapPin className="mt-0.5 mr-3 text-purple-500 flex-shrink-0 w-5 h-5" />
                    <span className="line-clamp-2 text-gray-700 font-medium">
                      {school.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center bg-blue-50 p-3 rounded-xl">
                    <Building className="mr-3 text-blue-500 flex-shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      {school.city}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full text-base font-bold py-3 rounded-xl gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Eye className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
