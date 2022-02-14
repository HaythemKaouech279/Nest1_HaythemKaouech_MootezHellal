import { Todo } from "./todo.model";
import { v4 as uuidv4 } from 'uuid';
import { NotFoundException } from "@nestjs/common";
import { AddTodoDto } from "./DTO/add-todo.dto";
import { PutTodoDto } from "./DTO/put-todo.dto";
import { PatchTodo } from "./DTO/patch-todo.dto";

export class todoService {

    private todos : Todo[] = [];


    getTodo(id: string) : Todo{
       
        return this.todos[this.checkExist(id)[1]] ; 
    }

    getAll(): Todo[]{
        return this.todos ;
    }

    addTodo(newTodo : AddTodoDto) : Todo {
        let todo = new Todo();
        const id = uuidv4();
        todo.id = id ;
        todo = {...todo,...newTodo};
        this.todos.push(todo);
        return todo ;
    }

    removeTodo(id: string ) : string {
        const todoIndex = this.checkExist(id)[1];
        this.todos.splice(todoIndex ,1);
        return "success" ;
    }

    patchTodo(body : PatchTodo) : Todo {
        let td = new Todo();
        const id = body.id ;
        const todoIndex = this.checkExist(id)[1];
        td = {...this.todos[todoIndex],...body};
        this.todos[todoIndex] = td ;
        return td ; 
    }


    putTodo(body : PutTodoDto): Todo {
        const id = body.id ;
        const todoIndex = this.checkExist(id)[1];
        this.todos[todoIndex].description = body.description ;
        this.todos[todoIndex].name = body.name ;

        return {...this.todos[todoIndex]} ; 
    }


    private checkExist(id:string) : [Todo,number]
    {
        const productIndex = this.todos.findIndex((prod) => prod.id === id);
        const product = this.todos[productIndex];

        if(!product)
        {
           throw new NotFoundException ('Could not find shit');
        }

        return [product,productIndex];
    }
}

