import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'; 
import {faTimes} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.less']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = {
    text: '',
    day: '',
    reminder: true
  };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: any){
    this.onDeleteTask.emit(task); 
    
  }
  onToggle(task: any){
    this.onToggleReminder.emit(task); 
  }
}
