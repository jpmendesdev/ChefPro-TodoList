# 📋 Todo List API

API RESTful para gerenciamento de tarefas (TODOs), construída com Spring Boot.

## 🌐 Base URL

```
http://localhost:8080
```

---

## 📚 Endpoints

### ✅ GET `/todos`

**Descrição:** Lista todas as tarefas.

**Exemplo de requisição:**

```bash
curl -X GET http://localhost:8080/todos \
  -H 'Accept: application/json'
```

**Resposta de exemplo:**

```json
[
  {
    "id": 1,
    "titulo": "Estudar Spring Boot",
    "descricao": "Estudar como criar APIs REST com Spring Boot",
    "status": "PENDENTE",
    "prioridade": 1
  },
  {
    "id": 2,
    "titulo": "Fazer compras",
    "descricao": "Comprar frutas e legumes",
    "status": "CONCLUIDO",
    "prioridade": 2
  }
]
```

---

### 🆕 POST `/todos`

**Descrição:** Cria uma nova tarefa.

**Corpo da requisição:**

```json
{
  "titulo": "string",
  "descricao": "string",
  "status": "PENDENTE",
  "prioridade": 5
}
```

**Resposta de exemplo (201 Created):**

```json
{
  "id": 3,
  "titulo": "Nova tarefa",
  "descricao": "Descrição da tarefa",
  "status": "EM_ANDAMENTO",
  "prioridade": 1
}
```

---

### 🔄 PUT `/todos`

**Descrição:** Atualiza os dados de uma tarefa existente.

**Corpo da requisição:**

```json
{
  "id": 1,
  "titulo": "string",
  "descricao": "string",
  "status": "CONCLUIDO",
  "prioridade": 1
}
```

**Resposta de exemplo:**

```json
{
  "id": 2,
  "titulo": "Estudar Spring Boot",
  "descricao": "Com foco em APIs REST",
  "status": "PENDENTE",
  "prioridade": 2
}
```

---

### ❌ DELETE `/todos/{id}`

**Descrição:** Remove uma tarefa pelo ID.

**Resposta de sucesso:**

```
204 No Content
```

---

## 🧾 Códigos de Status

| Código | Significado               |
|--------|---------------------------|
| 200    | Requisição bem-sucedida   |
| 201    | Objeto criado com sucesso |
| 204    | Requisição sem conteúdo   |
| 400    | Requisição malformada     |
| 404    | Recurso não encontrado    |
| 500    | Erro interno no servidor  |

---

## 🛠️ Tecnologias Utilizadas

- Java 17  
- Spring Boot 3.5  
- Maven  
- PostgreSQL  
