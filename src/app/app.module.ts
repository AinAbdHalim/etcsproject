import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NzLayoutModule} from 'ng-zorro-antd/layout';

import {NzFormModule} from 'ng-zorro-antd/form'
import { HeaderComponent } from './header/header.component';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CalendarComponent } from './calendar/calendar.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { LoginComponent } from './login/login.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import { RegisterComponent } from './register/register.component';
//import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import {NzSelectModule} from 'ng-zorro-antd/select'
import { ProfileComponent } from './profile/profile.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { TaskComponent } from './task/task.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import { NotesComponent } from './notes/notes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NzModalModule } from 'ng-zorro-antd/modal';
import dateTime from 'date-time';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditprofileComponent } from './editprofile/editprofile.component';
//import { Module } from '@nestjs/common';


registerLocaleData(en);

// @Module({
//     imports: [
//       TypeOrmModule.forRoot({
//         type: 'mysql',
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: '',
//         database: 'etcs',
//         entities: [],
//         synchronize: true,
//       }),
//     ],
//   })

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    TaskComponent,
    NotesComponent,
    EditprofileComponent,
    
    
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NzLayoutModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzBadgeModule,
    NzCalendarModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzSelectModule,
    NzAvatarModule,
    NzCardModule,
    MatDialogModule,
    NzModalModule,
    NzIconModule,
    
    
    
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
