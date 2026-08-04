import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { FormsComponent } from './forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { UsersComponent } from './users/users.component';
import { UserschildComponent } from './users/userschild/userschild.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'about', component:AboutComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'forms', component:FormsComponent},
  { path: 'parent', component:ParentComponent},
  { path: 'child', component:ChildComponent},
  { path: 'users', component:UsersComponent},
  { path: 'userschild', component:UserschildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
