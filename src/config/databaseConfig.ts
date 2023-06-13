import { DataSource } from "typeorm";
import path from "path";
import { User } from "../entities/user.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "sujeet",
  password: "12345",
  database: "myproject",
  entities: [User,],
  synchronize: true, // This option creates the database tables automatically (for development only)
});
