import { TodoDatasource } from "../../datasources/todo.datasource";
import { CreateTodoDto, UpdateTodoDto } from "../../dto";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export class TodoRepositoryImpl implements TodoRepository {

    constructor(
        private readonly datasource : TodoDatasource
    )
     {}
    
    create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {

        return this.datasource.create(createTodoDto);
    }
    getAll(): Promise<TodoEntity[]> {

        return this.datasource.getAll();
    }
    findById(id: number): Promise<TodoEntity | undefined> {

        return this.datasource.findById(id);
    }
    updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {

        return this.datasource.updateById(updateTodoDto);
    }
    deleteById(id: number): Promise<TodoEntity> {

        return this.datasource.deleteById(id);
    }

}