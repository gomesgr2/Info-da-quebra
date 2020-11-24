import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public FormPost : FormGroup;

  constructor(
    private fb : FormBuilder, private rest : AppService,
    public dialogRef: MatDialogRef<FormComponent>
    ) { }

  ngOnInit(): void {
    this.FormPost = this.fb.group({
      name: ['', [Validators.required]],
      url: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      descricao: ['', [Validators.required]]


    });
  }
  cancel() : void {
    this.dialogRef.close();
    this.FormPost.reset()

  }
  postForm() {
    this.rest.PostForm(this.FormPost.value).subscribe(dados => {} );
    this.dialogRef.close();
    this.FormPost.reset()
  }

}
