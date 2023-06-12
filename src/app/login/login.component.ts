import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

message: string = "Vous n'êtes pas connecté. (pikachu / pikachu)"
name: string = ""
password: string = ""
auth! : AuthService

constructor(public authService : AuthService,
            private router : Router
            ) { } 

ngOnInit() {
  this.auth = this.authService;
}

setMessage(){
  if (this.auth.isLoggedIn)
  {
    this.message = "bien connecté"
  }else{
    this.message = "ID ou MDP incorrect."
  }
}
login(){
 this.message = "tentative de connexion.."
 this.auth.login(this.name, this.password)
 .subscribe((isLoggedIn : boolean) =>
 {
  this.setMessage();
  if(isLoggedIn){
  this.router.navigate(['/pokemons'])
}else{
  this.password = "";
  this.router.navigate(['/login'])
}}
)
}

logout(){
  this.auth.logout();
  this.message = "Déconnecté"
}

}
