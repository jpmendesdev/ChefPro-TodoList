package com.todoList.todoList.service;

import org.springframework.stereotype.Service;

import com.todoList.todoList.repository.TodoRepository;

@Service
public class TodoService {

    private TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository){
        this.todoRepository = todoRepository;
    }

}
