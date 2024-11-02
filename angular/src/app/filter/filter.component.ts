import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewServiceService } from '../new-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  constructor (private dataService: NewServiceService){}

  wilaya!: string;
  nom = '';

  data!: any[];

  search(){
    this.dataService.getByNom(this.nom).subscribe(
      (data) => {
        this.data = data;
        console.log(data);
      },
      (error) => {
        console.log('Error fetching data:', error);
      }
    );
}
  

}
