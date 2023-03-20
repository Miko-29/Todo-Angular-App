import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;
  @Input() i:number=0;
  @Output() todoDelete : EventEmitter<any> = new EventEmitter();
  @Output() todoDone : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered.")
  }
  onDone(todo:Todo){
    this.todoDone.emit(todo);
  }
}
