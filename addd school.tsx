import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertSchoolSchema, type InsertSchool } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { Plus, Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FileUpload from "@/components/file-upload";

export default function AddSchool() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [imagePreview, setImagePreview] = useState<string | undefined>();

  const form = useForm<InsertSchool>({
    resolver: zodResolver(insertSchoolSchema),
    defaultValues: {
      name: "",
      address: "",
      city: "",
      email: "",
      phone: "",
      image: "",
    },
  });

  const createSchoolMutation = useMutation({
    mutationFn: async (data: InsertSchool) => {
      const response = await apiRequest("POST", "/api/schools", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/schools"] });
      toast({
        title: "Success!",
        description: "School has been added successfully.",
      });
      form.reset();
      setImagePreview(undefined);
      setTimeout(() => {
        setLocation("/schools");
      }, 1500);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to add school. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        form.setValue("image", result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(undefined);
      form.setValue("image", "");
    }
  };

  const onSubmit = (data: InsertSchool) => {
    createSchoolMutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Add New School
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create a beautiful profile for your educational institution with our modern registration system.
          </p>
        </div>
        
        <Card className="gradient-card shadow-attractive border-0 animate-fade-in-up">
          <CardContent className="p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" data-testid="form-add-school">
                {/* Form fields with validation */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="group">
                      <FormLabel className="text-base font-semibold text-foreground flex items-center gap-2">
                        <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        School Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the official school name"
                          {...field}
                          data-testid="input-school-name"
                          className="w-full px-5 py-4 border-2 border-input rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white text-foreground placeholder:text-muted-foreground text-lg shadow-sm hover:shadow-md group-hover:border-purple-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* More form fields... */}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
