import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { todoService } from './todo.service';

@Module({
    
    controllers : [TodoController],
    providers : [todoService]
})
export class TodoModule {}
