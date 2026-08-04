import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  url = 'https://dummyjson.com/users';
  updateurl = 'https://fakestoreapi.cm/users'
  users: any = [];
  currentuser: any;
  userForm !: FormGroup;
  editUserForm!: FormGroup;
  edituser: any = {};
  user: any = '';
  filteredUsers: any = []
  IsLoad: boolean = true;
  filterBy: any;
  constructor(private http: HttpClient, private fb: FormBuilder, private shared:SharedService) {

  }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required, Validators.minLength(3)],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required,]
    })
    this.editUserForm = this.fb.group({
      id: [this.edituser.id,],
      firstName: [this.edituser.firstName, Validators.required],
      lastName: [this.edituser.lastName,],
      age: [this.edituser.age,],
      gender: [this.edituser.gender,],
      email: [this.edituser.email,]
    })
    this.getUsers()
    
  }
 

  getUsers() {
    this.http.get(this.url).subscribe((success: any) => {
      this.users = success.users
      this.filteredUsers = [...this.users];
      console.log(this.filteredUsers)
      this.IsLoad = false
    }, (error) => {
      console.log(error)
    })

  }


  remove(index: any) {
    this.filteredUsers.splice(index, 1)
  }


  // addUser(user: any) {
    // console.log(this.userForm.value)
    // this.userForm.value;
    // this.filteredUsers.push(this.userForm.value)
    // this.userForm.reset()
  //   console.log(this.userForm.value)
  //   const createUrl='https://dummyjson.com/users'
  //   const add =''
  //   this.http.post(createUrl, this.userForm.value, { headers: user })
  // }

  addUser(data:any){
  this.shared.saveUser(data) 
 }



  editUser(user: any) {
    this.edituser = user
    console.log(user)
    this.editUserForm.patchValue(this.edituser)
    // this.editUserForm.valueChanges.subscribe(value => {
    //   this.edituser.emit(value)
    // })


  }

  updateUser( ) {
    console.log(this.editUserForm.value)
    const url = 'https://fakestoreapi.com/users/'+ this.editUserForm.value.id;
    this.editUserForm.patchValue(this.edituser)
    this.http.put(url, this.editUserForm.value).subscribe(res =>{
      console.log(res)
    })
    this.getUsers();


  }

  viewUser(user: any) {
    this.currentuser = user;
  }

 
  filter() {
    let x = this.filterBy.toLowerCase();
    console.log(this.filteredUsers)
    this.filteredUsers = [...this.users.filter((user: any) => user && user?.firstName.toLowerCase().includes(x))];
  }
}
