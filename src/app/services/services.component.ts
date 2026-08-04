import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SharedService } from '../shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {

  userForm!: FormGroup;
  editUserForm!: FormGroup;
  url = 'https://dummyjson.com/users?limit=208';
  users: any = {};
  filteredUsers: any = [];
  filterBy: any;
  IsLoad: boolean = true;
  formedit: any = {};
  user: any;
  countries: any;

  constructor(private fb: FormBuilder, private shared: SharedService, private http: HttpClient, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required,],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required,],
      id: [null]
    })
    this.editUserForm = this.fb.group({
      id: [this.formedit.id,],
      firstName: [this.formedit.firstName, Validators.required],
      lastName: [this.formedit.lastName,],
      age: [this.formedit.age,],
      gender: [this.formedit.gender,],
      email: [this.formedit.email,]
    })
    this.getUsers()
    // localStorage.setItem('session', JSON.stringify(this.url))
    console.log(this.getUsers)
  }

  getUsers() {
    this.http.get(this.url).subscribe((success: any) => {
      this.users = success.users;
      this.filteredUsers = this.users;
      this.IsLoad = false;
      console.log(this.filteredUsers);
      localStorage.setItem('mydata', JSON.stringify(this.filteredUsers));
    }, (error) => {
      console.log(error)
    })

    this.http.get('https://restcountries.com/v2/all?fields=name,callingCodes,flags,alpha2Code').subscribe(success => {
      this.countries = success
      console.log(this.countries)
    }, (error) => {
      console.log(error)
    }
    )
  }


  addUser() {
    if (this.userForm.valid) {
      const newId = this.users.length > 0 ? Math.max(...this.users.map((user: { id: any; }) => user.id)) + 1 : 1;
      this.userForm.patchValue({ id: newId });
      console.log(this.userForm.value);
      this.users.push(this.userForm.value)
      this.shared.saveUser(this.userForm.value).subscribe((res) => {
        console.log(res);
        this.toastr.success('User Added successfully!', 'success');
        this.userForm.reset()
      })
    }
  }


  editUser(user: any) {
    this.formedit = user;
    this.editUserForm.patchValue(this.formedit)
  }

  updateUser(user: any) {
    console.log(this.editUserForm.value)
    const url = 'https://fakestoreapi.com/users/' + this.editUserForm.value.id;
    this.http.put(url, this.editUserForm.value).subscribe(res => {
      this.toastr.success('User Upadetd Successfully!', 'Success!',);
    })
    this.getUsers();
  }


  deleteUser(id: number) {
    this.shared.deleteUser(id).subscribe({
      next: () => {
        this.filteredUsers = this.filteredUsers.filter((user: { id: number; }) => user.id !== id);
        // console.log('Item deleted successfully!');
        this.toastr.success('User deleted successfully!', 'success');
        console.log(this.toastr)


      },
      error: (err) => {
        console.error('Error deleting item:', err);
      }
    })
  }

  filter() {
    let x = this.filterBy.toLowerCase();
    console.log(this.filteredUsers)
    this.filteredUsers = [...this.users.filter((user: any) => user && user?.title.toLowerCase().includes(x))];
  }

  showsuccess(): void {
    this.toastr.success('User deleted successfully!', 'success');

  }
}
