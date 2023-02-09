import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {
  data:any;
  constructor(private router:Router,private route:ActivatedRoute){
    // data from form is collected here
    this.data = this.router.getCurrentNavigation()?.extras.state?.['submittedData'];
  }
  
}
