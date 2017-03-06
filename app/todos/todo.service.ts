import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Todo} from './todo';

@Injectable()
export class TodoService {
    constructor(private http:Http) {
    }

    getData():Observable<Todo[]> {

        return this.http.get('http://jsonplaceholder.typicode.com/todos/')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        // let len = body.lenght;
        return body || [];
    }

    private handleError(error:any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    toggleTodo(todo: Todo){
        todo.completed = !todo.completed

  }
}