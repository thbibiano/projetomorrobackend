const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  dialect: "postgres",
  host: process.env.DATABASE_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  //ssl: true,
  // dialectOptions: {
  //     ssl: {
  //         required: true,
  //         rejectUnauthorized: false
  //     }
  // },
  define: {
    timestamps: true,
    underscored: true,
  },
};

//yarn sequelize db:create - cria                      banco de dados
//yarn sequelize migration:create --name=create-users  cria uma migration q informa a criaçao da tabela
//yarn sequelize                           roda os migrates criados gerando tabelas no banco de dados

// sequelize db:migrate                        Run pending migrations
// sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
// sequelize db:migrate:status                 List the status of all migrations
// sequelize db:migrate:undo                   Reverts a migration
// sequelize db:migrate:undo:all               Revert all migrations ran
// sequelize db:seed                           Run specified seeder
// sequelize db:seed:undo                      Deletes data from the database
// sequelize db:seed:all                       Run every seeder
// sequelize db:seed:undo:all                  Deletes data from the database
// sequelize db:create                         Create database specified by configuration
// sequelize db:drop                           Drop database specified by configuration
// sequelize init                              Initializes project
// sequelize init:config                       Initializes configuration
// sequelize init:migrations                   Initializes migrations
// sequelize init:models                       Initializes models
// sequelize init:seeders                      Initializes seeders
// sequelize migration:generate                Generates a new migration file
