import { Sequelize } from "sequelize-typescript";
import config from "@/config";
import { SequelizeStorage, Umzug } from "umzug";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: config.postgres.host,
  port: config.postgres.port,
  username: config.postgres.user,
  password: config.postgres.password,
  database: config.postgres.db,
  logging: config.postgres.logging,
  timezone: config.postgres.timezone,
  models: [__dirname + "/models/**.model.**"],
});

export const migrations = new Umzug({
  migrations: {
    glob: ["migrations/*", { cwd: __dirname }],
  },
  context: sequelize,
  storage: new SequelizeStorage({
    sequelize,
    modelName: "MigrationsMeta",
  }),
  logger: console,
});

export const seeders = new Umzug({
  migrations: {
    glob: ["seeders/*", { cwd: __dirname }],
  },
  context: sequelize,
  storage: new SequelizeStorage({
    sequelize,
    tableName: "SeedersMeta",
  }),
  logger: console,
});

export const connect = async () => {
  sequelize
    .authenticate()
    .then(async () => {
      console.log("connect db success", sequelize.config.database);
      

      await sequelize.sync();
      
      await seeders.runAsCLI(["up"]);
      
      await migrations.runAsCLI([process.env.MIGRATE_OPTION || "up"]);
    })
    .catch(async(error) => {
      console.log("error connect db:", error.message);
    });
};
