import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const schools = pgTable("schools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  image: text("image"), // base64 encoded image data
});

export const insertSchoolSchema = createInsertSchema(schools).omit({
  id: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "School name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  phone: z.string().optional(),
  image: z.string().optional(),
});

export type InsertSchool = z.infer<typeof insertSchoolSchema>;
export type School = typeof schools.$inferSelect;import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const schools = pgTable("schools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  image: text("image"), // base64 encoded image data
});

export const insertSchoolSchema = createInsertSchema(schools).omit({
  id: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "School name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  phone: z.string().optional(),
  image: z.string().optional(),
});

export type InsertSchool = z.infer<typeof insertSchoolSchema>;
export type School = typeof schools.$inferSelect;import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const schools = pgTable("schools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  image: text("image"), // base64 encoded image data
});

export const insertSchoolSchema = createInsertSchema(schools).omit({
  id: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "School name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  phone: z.string().optional(),
  image: z.string().optional(),
});

export type InsertSchool = z.infer<typeof insertSchoolSchema>;
export type School = typeof schools.$inferSelect;import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const schools = pgTable("schools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  image: text("image"), // base64 encoded image data
});

export const insertSchoolSchema = createInsertSchema(schools).omit({
  id: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "School name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  phone: z.string().optional(),
  image: z.string().optional(),
});

export type InsertSchool = z.infer<typeof insertSchoolSchema>;
export type School = typeof schools.$inferSelect;import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const schools = pgTable("schools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  image: text("image"), // base64 encoded image data
});

export const insertSchoolSchema = createInsertSchema(schools).omit({
  id: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "School name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  phone: z.string().optional(),
  image: z.string().optional(),
});

export type InsertSchool = z.infer<typeof insertSchoolSchema>;
export type School = typeof schools.$inferSelect;import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const schools = pgTable("schools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  image: text("image"), // base64 encoded image data
});

export const insertSchoolSchema = createInsertSchema(schools).omit({
  id: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "School name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  phone: z.string().optional(),
  image: z.string().optional(),
});

export type InsertSchool = z.infer<typeof insertSchoolSchema>;
export type School = typeof schools.$inferSelect;
