import { TodoStatusEnum } from "../enums/todo-status.enum";
import { AddTodoDto } from "./add-todo.dto";

    export class PutTodoDto extends (AddTodoDto) {
        status: TodoStatusEnum;
    }