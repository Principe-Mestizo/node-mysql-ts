import { CreateTodoDto } from "../dto";
import { UpdateTodoDto } from "../dto/todo/update-todo.dto";
import { TodoEntity } from "../entities/todo.entity";

export abstract class TodoRepository {

    abstract create( createTodoDto: CreateTodoDto): Promise<TodoEntity>;
    
    abstract getAll():Promise<TodoEntity[]>;

    abstract findById( id: number): Promise<TodoEntity | undefined>;

    abstract updateById( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity>;

    abstract deleteById( id: number ): Promise<TodoEntity>;


}