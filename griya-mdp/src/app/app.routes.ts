import { Routes } from '@angular/router';
// di sini bisa kasih alias dengan as
import { Home as HomeComponent} from './home/home';
// cara membuat import ini dia ctrl spasi auto import
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Register } from './register/register';
import { Contact } from './contact/contact';

export const routes: Routes = [
  // mengatur halaman utama aplikasi
  {
    path: '',
    component: HomeComponent,
    // ini dibagian atas kepala tab
    title: 'Home page',
  },
  {
    path: 'profile',
    component: Profile,
    // ini dibagian atas kepala tab
    // title: 'Profile Page',
  },
  {
    path: 'login',
    component: Login,
    // ini dibagian atas kepala tab
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'contact',
    component: Contact,
  },
];
