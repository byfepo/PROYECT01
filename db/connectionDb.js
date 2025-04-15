import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.DB_NAME);
console.log(process.env.DB_USERNAME);
console.log( process.env.DB_PASSWORD);
console.log( process.env.DB_HOST);
console.log(  process.env.DB_PORT);


// const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//  host: process.env.DB_HOST,port: process.env.DB_PORT, dialect: "postgres",
// });

//, dialect: "postgres", dialectOptions: { ssl: { rejectUnauthorized: false, }, }, logging: false,


const sequelize = new Sequelize({
  
  database: 'corfo24',
    user: 'pgadmin',
    password: 'fPo.-24gres',
    host: 'localhost',
    port: 5432
    //,    ssl: true
    ,dialect: "postgres"    
    //, dialectOptions: { ssl: { rejectUnauthorized: false, }, }
    , logging: false,
  });


export default sequelize;

