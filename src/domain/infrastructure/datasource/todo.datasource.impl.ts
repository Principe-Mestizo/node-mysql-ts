import { TodoDatasource } from "../../datasources/todo.datasource";
import { TodoEntity } from "../../entities/todo.entity";
import { CreateTodoDto, UpdateTodoDto } from "../../dto";
import { mysqlDB } from "../../../data/mysql";

export class TodoDataSourceImpl implements TodoDatasource {

    async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        const [rows]: any = await mysqlDB.execute('CALL sp_guardar(?)', [createTodoDto.text]);
        const result = rows[0][0];
        return TodoEntity.fromObject(result);
    }

    async getAll(): Promise<TodoEntity[]> {
        const [rows]: any = await mysqlDB.execute('CALL sp_mostrar()');
        return rows[0].map((todo: any) => TodoEntity.fromObject(todo));
    }

    async findById(id: number): Promise<TodoEntity> {
        const [rows]: any = await mysqlDB.execute('CALL sp_buscar_por_id(?)', [id]);
        if (rows[0].length === 0) throw `Todo with id ${id} not found`;
        return TodoEntity.fromObject(rows[0][0]);
    }

    async updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        const { id, text, completedAt } = updateTodoDto;
        const [rows]: any = await mysqlDB.execute('CALL sp_actualizar(?, ?, ?)', [id, text, completedAt]);
        return TodoEntity.fromObject(rows[0][0]);
    }

    async deleteById(id: number): Promise<TodoEntity> {
        const [rows]: any = await mysqlDB.execute('CALL sp_eliminar(?)', [id]);
        return TodoEntity.fromObject(rows[0][0]);
    }
}