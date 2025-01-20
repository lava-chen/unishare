import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
//ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database...");

    await db.delete(schema.institutes);
    await db.delete(schema.majors);
    await db.delete(schema.courses);
    await db.delete(schema.posts);

    await db.insert(schema.institutes).values([
      { id: 1, name: "水文水资源学院" },
      { id: 2, name: "水利水电学院" },
      { id: 3, name: "港口海岸与近海工程学院" },
      { id: 4, name: "土木与交通学院" },
      { id: 5, name: "环境学院" },
      { id: 6, name: "电气与动力工程学院" },
      { id: 7, name: "计算机与软件学院" },
      { id: 8, name: "力学与工程科学学院" },
      { id: 9, name: "地球科学与工程学院" },
      { id: 10, name: "农业科学与工程学院" },
      { id: 11, name: "水土保持学院" },
      { id: 12, name: "机电工程学院" },
      { id: 13, name: "信息科学与工程学院" },
      { id: 14, name: "人工智能与自动化学院" },
      { id: 15, name: "新能源学院" },
      { id: 16, name: "材料科学与工程学院" },
      { id: 17, name: "海洋学院" },
      { id: 18, name: "地理与遥感学院" },
      { id: 19, name: "数学学院" },
      { id: 20, name: "商学院" },
      { id: 21, name: "经济与金融学院" },
      { id: 22, name: "公共管理学院" },
      { id: 23, name: "应急管理与安全工程学院" },
      { id: 24, name: "法学院" },
      { id: 25, name: "马克思主义学院" },
      { id: 26, name: "外国语学院" },
      { id: 27, name: "体育系" },
      { id: 28, name: "大禹学院" },
      { id: 29, name: "未来技术学院" },
      { id: 30, name: "卓越工程师学院" },
      { id: 31, name: "河海里尔学院" },
    ]);
    await db.insert(schema.majors).values([
      { id: 1, name: "自然地理与资源环境", institute_id: 1 },
      { id: 2, name: "地理信息科学", institute_id: 1 },
      { id: 3, name: "水文与水资源工程", institute_id: 1 },
      { id: 4, name: "水务工程", institute_id: 1 },
      { id: 5, name: "水利水电工程", institute_id: 2 },
      { id: 6, name: "智慧水利", institute_id: 2 },
      { id: 7, name: "安全工程", institute_id: 3 },
      { id: 8, name: "港口航道与海岸工程", institute_id: 3 },
      { id: 9, name: "船舶与海洋工程", institute_id: 3 },
      { id: 10, name: "海洋资源开发技术", institute_id: 3 },
      { id: 11, name: "土木工程", institute_id: 4 },
      { id: 12, name: "交通工程", institute_id: 4 },
      { id: 13, name: "智能建造", institute_id: 4 },
      { id: 14, name: "给排水科学与工程", institute_id: 5 },
      { id: 15, name: "环境工程", institute_id: 5 },
    ]);
    await db.insert(schema.courses).values([
      { code: 1, name: "水文学概论", major_id: 3, institute_id: 1 },
      { code: 2, name: "水资源管理", major_id: 3, institute_id: 1 },
      { code: 3, name: "水力学", major_id: 5, institute_id: 2 },
      { code: 4, name: "土木工程基础", major_id: 11, institute_id: 4 },
      { code: 5, name: "水利水电工程原理", major_id: 5, institute_id: 2 },
      { code: 6, name: "环境工程导论", major_id: 15, institute_id: 5 },
      { code: 7, name: "海洋工程基础", major_id: 9, institute_id: 3 },
      { code: 8, name: "水土保持与荒漠化防治", major_id: 4, institute_id: 1 },
      { code: 9, name: "给排水科学与工程", major_id: 14, institute_id: 5 },
      { code: 10, name: "智能建造技术", major_id: 13, institute_id: 4 },
      { code: 11, name: "船舶与海洋工程设计", major_id: 9, institute_id: 3 },
      { code: 12, name: "智慧水利技术", major_id: 6, institute_id: 2 },
      { code: 13, name: "环境监测与污染控制", major_id: 15, institute_id: 5 },
      { code: 14, name: "港口航道与海岸工程学", major_id: 8, institute_id: 3 },
      { code: 15, name: "自然地理学", major_id: 1, institute_id: 1 },
      { code: 16, name: "交通流理论", major_id: 12, institute_id: 4 },
      { code: 17, name: "海洋资源开发与管理", major_id: 10, institute_id: 3 },
      {
        code: 18,
        name: "地理信息系统原理与应用",
        major_id: 2,
        institute_id: 1,
      },
      { code: 19, name: "现代土木工程材料", major_id: 11, institute_id: 4 },
      { code: 20, name: "环境工程项目管理", major_id: 15, institute_id: 5 },
    ]);

    console.log("Seeding finished.");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
