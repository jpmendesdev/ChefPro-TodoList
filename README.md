﻿# 📘 API Todo List

> API RestFul desenvolvida em Java Spring Boot para criação de TodoLists.

---

## 📌 Índice

- [📘 Sobre](#sobre)
- [✅ Funcionalidades](#funcionalidades)
- [🛠 Tecnologias](#tecnologias)
- [⚙️ Pré-requisitos](#pré-requisitos)
- [🧰 Instalação](#instalação)
- [🔧 Documentação da API](#documentação-da-api)

---

## Sobre

📝 API Restful desenvolvida em Java Spring Boot, com a finalidade de servir como uma criadora de tarefas, que pode servir para organizar tarefas de indivíduos ou até de empresas.

---

## Funcionalidades

✅ Funcionalidades disponíveis:

- Listar as ToDos por ordem de prioridade  
- Salvar uma ToDo por título, descrição, status e prioridade  
- Excluir uma ToDo por ID  
- Editar as ToDos  

---

## Tecnologias

🛠 Tecnologias utilizadas:

- **Linguagens**: Java → versão 17  
- **Backend**: Java / Spring Boot  
- **Banco de Dados**: PostgreSQL  

### Dependências Spring Boot

Este projeto utiliza as seguintes bibliotecas e starters do Spring Boot (gerenciadas pelo Maven):

| Dependência | Descrição |
|-------------|-----------|
| `spring-boot-starter-web` | Criação de APIs REST com Spring MVC |
| `spring-boot-starter-data-jpa` | Persistência de dados com Spring Data JPA e Hibernate |
| `spring-boot-starter-validation` | Validação de dados com Jakarta Bean Validation (`@Valid`) |
| `spring-boot-starter-actuator` | Monitoramento e métricas |
| `spring-boot-devtools` (opcional) | Hot reload para desenvolvimento |
| `com.h2database:h2` | Banco de dados em memória para testes |
| `org.postgresql:postgresql` | Driver JDBC para PostgreSQL |
| `spring-boot-starter-test` | Testes com JUnit e Mockito |
| `springdoc-openapi-starter-webmvc-ui:2.1.0` | Swagger UI para documentação |

> ⚙️ Java: 17  
> 🚀 Spring Boot: 3.5.0

---

## Pré-requisitos

⚙️ Antes de rodar o projeto, verifique se você possui:

- [Java 17+](https://adoptopenjdk.net/)  
- [Maven 3.9.9+](https://maven.apache.org/download.cgi)  
- [PostgreSQL](https://www.postgresql.org/download/)

### Orientações do Banco de Dados

1. Edite o arquivo `application.properties` com seu usuário e senha.  
   Caminho: `src/main/resources/application.properties`

2. No PgAdmin:
   - Vá até "Databases"
   - Clique com o botão direito → *Create > Database*
   - Nome: `todolist`
   - Clique em Save

---

## Instalação

🧰 Para executar o projeto:

### 1. Clone o repositório

```bash
git clone https://github.com/jpmendesdev/ChefPro-TodoList.git
cd ChefPro-TodoList/todolist e use o comando 'mvn spring-boot:run'

```

## Documentação da API 

Documentação completa da API: [API](api.md)
