import { Body, Controller, Get, Post, Param, Delete, Patch, Put } from '@nestjs/common';
import { AddTodoDto } from './DTO/add-todo.dto';
import { PutTodoDto } from './DTO/put-todo.dto';
import { Todo } from './todo.model';
import { todoService } from './todo.service';



@Controller('todo')
export class TodoController {

    constructor(private todoService : todoService){}

    @Get()
    getAll() : Todo[]{
        return this.todoService.getAll();
    }

    @Post()
    addTodo(@Body() newTodo : AddTodoDto): Todo {
        return this.todoService.addTodo(newTodo);
    }
    

    @Get(':id')
    getTodo(@Param('id')todoId ) : Todo {
      return this.todoService.getTodo(todoId);
    }

    @Delete(":id")
    deleteTodo(@Param('id')todoId ) : string{
        return this.todoService.removeTodo(todoId);
    }

    @Patch()
    patchTodo(@Body() body) {
        return this.todoService.patchTodo(body);
    }

    @Put()
    putTodo(@Body() body : PutTodoDto) {
        return this.todoService.putTodo(body);
    }

}