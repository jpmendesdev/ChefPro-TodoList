package com.todoList.todoList.service;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.todoList.todoList.model.TodoModel;
import com.todoList.todoList.repository.TodoRepository;

@Service
public class TodoService {

    private TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository){
        this.todoRepository = todoRepository;
    }

    public List<TodoModel> create(TodoModel todo) {
        todoRepository.save(todo);
        return list();
    }

    public List<TodoModel> list(){
        Sort sort = Sort.by("prioridade").descending().and(Sort.by("titulo").ascending());
        return todoRepository.findAll();
    }

}