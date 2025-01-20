import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, boolean } from "drizzle-orm/pg-core";

export const institutes = pgTable("institutes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const majors = pgTable("majors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  institute_id: integer("institute_id").references(() => institutes.id, {
    onDelete: "cascade",
  }),
});

export const courses = pgTable("courses", {
  code: serial("code").primaryKey(),
  name: text("name").notNull(),
  major_id: integer("major_id").references(() => majors.id, {
    onDelete: "cascade",
  }),
  institute_id: integer("institute_id").references(() => institutes.id, {
    onDelete: "cascade",
  }),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  date: text("date").notNull(),
  content: text("content").notNull(),
  course: text("course").notNull(),
  major: text("major"),
  userId: text("user_id"),
  userName: text("user_name").notNull().default("User"),
  userImageSrc: text("user_img_src").notNull().default("/logo.svg"),
  agrees: integer("agrees").default(0),
  disagrees: integer("disagrees").default(0),
  best_resource: boolean("best_resource").default(false),
});
