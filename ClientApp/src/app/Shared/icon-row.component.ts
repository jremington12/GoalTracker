import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'icon-row',
  styleUrls: ['icon-row.component.css'],
  template: `
    <div class="icon-container" style="display: flex">
      <mat-icon *ngIf="showAddIcon" class="icon add"  svgIcon="icon-circle-with-plus" (click)="addClicked.emit()" aria-describedby="'hi'"></mat-icon>
      <mat-icon *ngIf="showEditIcon" class="icon edit" svgIcon="icon-brush" (click)="editClicked.emit()"></mat-icon>
      <mat-icon *ngIf="showRemoveIcon" class="icon remove" svgIcon="icon-squared-cross" (click)="removeClicked.emit()"></mat-icon>
    </div>     
            `
})
export class IconRowComponent {
  @Input() showAddIcon = false;
  @Input() showEditIcon = false;
  @Input() showRemoveIcon = false;

  @Output() addClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Output() removeClicked = new EventEmitter<any>();
}



