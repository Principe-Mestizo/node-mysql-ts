import { envs } from "./config/envs";
import { checkDatabaseConnection } from "./data/mysql";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";


( () => {
    main();
})();

async function main(){
    await checkDatabaseConnection();

    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    });
    server.start();
    
}