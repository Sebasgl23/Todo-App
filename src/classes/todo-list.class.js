import { crearTodoHtml } from "../js/componentes";
import { Todo } from "./todo.class";

export class TodoList {


    constructor() {

        this.cargarLocalStorage();


    }

    nuevoTodo(todo) {

        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();

    }

    marcarCompletado( id ) {

        for(const todo of this.todos) {

            if( todo.id == id){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }

    }


    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem('Todo' , JSON.stringify(this.todos));

    }

    cargarLocalStorage() {

        localStorage.getItem('Todo') ? this.todos = JSON.parse(localStorage.getItem('Todo')) : this.todos = [];

        this.todos = this.todos.map(Todo.fromJson);
    }
}

    