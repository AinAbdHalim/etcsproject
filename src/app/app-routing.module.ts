import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/Task'},
  // {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent},
   {path: 'task', component: TaskComponent},
  {path: 'calendar', component: CalendarComponent},  
   {path: 'notes', component: NotesComponent},
   {path: 'profile', component: ProfileComponent},
   {path: 'editprofile', component: EditprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
