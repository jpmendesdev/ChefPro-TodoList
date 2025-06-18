const iformulario = document.querySelector("#formulario");
const ititulo = document.querySelector(".titulo");
const idescricao = document.querySelector(".descricao");
const istatus = document.querySelector(".status");
const iprioridade = document.querySelector(".prioridade");
const btnCadastrar = document.querySelector("#formulario button[type= 'submit']");

let modoEdicao = false;
let idTarefaEditando = null;


function salvarTarefa(event){
    event.preventDefault();

    const statusRealizado = istatus.value.toUpperCase() === 'CONCLUIDO';
    const prioridadeValue = parseInt(iprioridade.value);

    const dadosTarefa = {
        titulo: ititulo.value,
        descricao: idescricao.value,
        status: istatus.value,
        prioridade: iprioridade.value
    };

    let url = "http://localhost:8080/todos";
    let method = "POST"

    if (modoEdicao) {
        url = `http://localhost:8080/todos`;
        method = "PUT";
        dadosTarefa.id = idTarefaEditando;
    }


    fetch(url, {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosTarefa)
    })
     .then(res => {
        if (!res.ok) {
            return res.json().then(errorData => {
                throw new Error(`HTTP error! status: ${res.status}, Message: ${errorData.message || JSON.stringify(errorData)}`);
            }).catch(() => {
                throw new Error(`HTTP error! status: ${res.status}`);
            });
        }
        return res.json();
    })
    .then(data => {
        console.log("Sucesso:", data);
        formulario.reset(); 
        listarTarefas();
    })
    .catch(err => console.error(`Erro ao ${modoEdicao ? 'atualizar' : 'cadastrar'} tarefa:`, err));
}


function listarTarefas() {
    fetch("http://localhost:8080/todos")
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(`HTTP error! status: ${response.status}, Message: ${errorData.message || JSON.stringify(errorData)}`);
                }).catch(() => {
                    throw new Error(`HTTP error! status: ${response.status}`);
                });
            }
            return response.json();
        })
        .then(tarefas => {
            const lista = document.querySelector(".lista");
            lista.innerHTML = ""; 

            if (tarefas.length === 0) {
                lista.innerHTML = "<p>Nenhuma tarefa cadastrada.</p>";
                return;
            }

            tarefas.forEach(tarefa => {
                const item = document.createElement("li");
                const statusTexto = tarefa.status ? 'CONCLUÍDO' : 'PENDENTE/EM ANDAMENTO';

                item.innerHTML = `
                    <div class="info-tarefa">
                        <strong>${tarefa.titulo || 'Título não definido'}</strong>
                        <span>Descrição: ${tarefa.descricao || 'Descrição não definida'}</span>
                        <span>Status: ${statusTexto}</span>
                        <span>Prioridade: ${tarefa.prioridade !== undefined ? tarefa.prioridade : 'Prioridade não definida'}</span>
                    </div>
                    <div class="botoes-acao">
                        <button class="btn-editar" data-id="${tarefa.id}">Editar</button>
                        <button class="btn-excluir" data-id="${tarefa.id}">Excluir</button>
                    </div>
                `;
                lista.appendChild(item);

                item.querySelector('.btn-editar').addEventListener('click', () => {
                    editarTarefa(tarefa);
                });
            });

            document.querySelectorAll('.btn-excluir').forEach(button => {
                button.addEventListener('click', (event) => {
                    const id = event.target.dataset.id;
                    excluirTarefa(id);
                });
            });
        })
        .catch(error => console.error("Erro ao buscar tarefas:", error));
}

formulario.addEventListener("submit", salvarTarefa);
document.addEventListener("DOMContentLoaded", listarTarefas);




 


