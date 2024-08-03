import { DataSource } from "typeorm";



const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "my-db",
    synchronize: true,
    logging: false,
    entities: []
})

export default dataSource;