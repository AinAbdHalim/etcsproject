import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    url='http://localhost:3000/users'

    constructor(private http:HttpClient) { }

    getAllUsers(){
        return this.http.get( this.url );
    }

    saveUserData(data: any){
        console.log(data);
        return this.http.post(this.url, data);
    }

    getUserById(id: any){
        return this.http.get(`${this.url}/${id}`)
    }
}
