import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
  doctors = [
    { name: 'Dr Rajeev Varma',  exp: '15 year of experience', specilization: 'Orthopedic Surgeon', qualification: 'Senior Consultant, MBBS', avatar: ''},
    { name: 'Dr Rajeev Varma',  exp: '15 year of experience', specilization: 'Orthopedic Surgeon', qualification: 'Senior Consultant, MBBS', avatar: ''},
    { name: 'Dr Rajeev Varma',  exp: '15 year of experience', specilization: 'Orthopedic Surgeon', qualification: 'Senior Consultant, MBBS', avatar: ''}  
  ];
}
