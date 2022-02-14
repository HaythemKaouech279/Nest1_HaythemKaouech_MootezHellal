import { PartialType } from "@nestjs/mapped-types";
import { TodoStatusEnum } from "../enums/todo-status.enum";
import { AddTodoDto } from "./add-todo.dto";

export class PatchTodo extends PartialType(AddTodoDto) {
    status: TodoStatusEnum;
}