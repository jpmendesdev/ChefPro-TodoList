package com.todoList.todoList.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.todoList.todoList.model.TodoModel;



public interface TodoRepository extends JpaRepository<TodoModel, Long> {

}
