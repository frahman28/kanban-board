import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/column.model';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  constructor() {}

  columns: Column[] = []; 

  addNewColumn(): void {
    var col = new Column("new column", [], []);
    this.columns.push(col);
  }

  addNewTask(i: number): void {
    var col = this.columns[i];
    col.tasks.push("new task", "new task desc");
    col.tasks_name.push("new task");
    this.columns[i] = col;
  }

  updateColumn(i: number, title: any): void {
    var col = this.columns[i];
    col.name = title.target.value;
    this.columns[i] = col;
  }

  updateTask(i: number, j: number, title: any): void {
    var col = this.columns[i];
    col.tasks_name[j] = title.target.value;
    this.columns[i] = col;
  }

  ngOnInit() {}


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}
