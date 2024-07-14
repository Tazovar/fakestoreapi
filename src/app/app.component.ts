import { Component, OnInit } from '@angular/core';
import { AuthService } from './views/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{

  constructor(private authService:AuthService,private router:Router,private activatedRoute:ActivatedRoute){}


ngOnInit(): void {
}

 
}

