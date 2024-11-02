import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewServiceService } from '../new-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [FormsModule , CommonModule ],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
  constructor(private dataService: NewServiceService , private router : Router){}
  title = 'tpExam';
  wilaya!: string ;
  nom!: String  ;
  commune! : String  ;

  addMedecin(){
    let medecin={nom: this.nom , wilaya: this.wilaya, commune: this.commune};
    console.log(medecin)
    this.dataService.postData(medecin)
      .subscribe(data => {
        console.log(data)
        this.nom = '';
        this.wilaya='';
        this.commune = '';
        this.router.navigate(['/'])
        
      })    
  }
}
