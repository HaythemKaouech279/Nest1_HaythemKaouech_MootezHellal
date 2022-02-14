import { PartialType } from "@nestjs/mapped-types";
import { Todo } from "../todo.model";

export class AddTodoDto {
    name: string;
    description:string;
    
}