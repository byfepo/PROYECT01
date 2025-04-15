import sequelize from "./db/connectionDb.js";
import User from "./models/users.models.js";
import app from "./app.js";

import router from "./routes/user.routes.js";

import dotenv from "dotenv";
dotenv.config();

  
app.use("/api/v1/users", router);

app.get("/", async (req, res) => {
//     try {
//     const users = await User.findAll();
//     res.json(users);
//     } catch (error) {
     res.send("hola soy la api")
//     }
});
   




//Conectar base de datos
const connectDB = async () => {
    try {
        console.log("ingresando connectDB")

        await sequelize.authenticate();
        console.log("await sequelize.authenticate()")
        
        sequelize.sync({ force: true });
        console.log("sequelize.sync")
        console.log("Conexión exitosa a la    BBDD");

        app.listen(3000, console.log("Servidor levantado en el puerto", 3000));
        console.log("app.listen(3000")

    } catch (error) {
        console.log(error);
    }
};
connectDB();



   //Definición de rutas
// app.get("/", async (req, res) => {
//     try {
//     const users = await User.findAll();
//     res.json(users);
//     } catch (error) {
//     res.status(500).json({ message:
//    error.message });
//     }
// });
   