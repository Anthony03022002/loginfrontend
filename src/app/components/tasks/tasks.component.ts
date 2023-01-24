import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TasksService } from "../../services/tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: any = [];
  archivos: any = [];
  public previsualizacion: String | undefined;

  constructor(
    private tasksService: TasksService,
    ) { }

  ngOnInit() {
    this.tasksService.getTasks()
      .subscribe(
        res => {
          console.log(res)
          this.tasks = res;
        },
        err => console.log(err)
      )
  }

  /*capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) =>{
      this.previsualizacion = imagen.base;
      console.log(imagen);
    })
    //this.archivos.push(archivoCapturado)
    //console.log(event.target.files);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve): void=> {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
    }
  });*/

}

