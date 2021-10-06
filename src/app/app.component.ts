import { Component, ViewChild } from '@angular/core';
import { DxDiagramComponent } from 'devextreme-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(DxDiagramComponent)
  public diagramComponent: DxDiagramComponent;
  public selectedElement: any;
  showSidebar: boolean;
  diagramConfig: any[] = [];

  public configFormGroup: FormGroup;

  /** shapeConfig
   * {id: 'shapeId', ...properties, type}
   */

  constructor(private formBuilder: FormBuilder) {
    this.configFormGroup = this.formBuilder.group({
      id: [],
      name: [],
    });
  }

  change(ev): void {
    if (ev.items.length) {
      this.showSidebar = true;
      this.selectedElement = ev.items[ev.items.length - 1];

      console.log(this.selectedElement);
    }
  }

  save(): void {
    console.log(JSON.parse(this.diagramComponent.instance.export()));
  }

  public submit(): void {
    this.diagramConfig.push({
      name: this.configFormGroup.value.name,
      id: this.selectedElement.id,
      type: this.selectedElement.type,
    });

    this.showSidebar = false;
  }
}
