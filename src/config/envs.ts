import 'dotenv/config';
import { get} from 'env-var';


export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    MYSQL_HOST: get('MYSQL_HOST').required().asString(),
    MYSQL_USER: get('MYSQL_USER').required().asString(),
    MYSQL_DB: get('MYSQL_DB').required().asString(),
    MYSQL_PORT: get('MYSQL_PORT').required().asPortNumber(),
    MYSQL_PASSWORD: get('MYSQL_PASSWORD').required().asString(),
    NODE_ENV: get('NODE_ENV').required().asString(),

}
