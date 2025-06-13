package com.todoList.todoList.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todoList.todoList.model.TodoModel;
import com.todoList.todoList.service.TodoService;



@RestController
@RequestMapping("/todos")
public class TodoController {

    private TodoService todoService;

    public TodoController(TodoService todoService){
        this.todoService = todoService;
    }

    @PostMapping
    public ResponseEntity<List<TodoModel>> create(@RequestBody TodoModel todo) {
        List<TodoModel> todos = todoService.create(todo);
        return ResponseEntity.status(HttpStatus.CREATED).body(todos);
    }

    @GetMapping
    List<TodoModel> list(){
        return todoService.list();
    }

    @PostMapping
    List<TodoModel> update(@RequestBody TodoModel todo){
        return todoService.update(todo);
    }
    
    @DeleteMapping ("{id}")
    List<TodoModel> delete(@PathVariable("id") Long id){
        return todoService.delete(id);
    }
    
    
}