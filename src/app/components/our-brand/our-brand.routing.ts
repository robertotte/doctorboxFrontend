import { Routes, RouterModule } from '@angular/router';
import { OurBrandComponent } from './our-brand.component';
import { DoctorboxLandingComponent } from './doctorbox-landing/doctorbox-landing.component';


const OURBRAND_ROUTES: Routes = [
    {
        path: '', component: OurBrandComponent, children: [
            { path: '', component: DoctorboxLandingComponent },
           
        ]
    }
];

export const ourBrandRouting = RouterModule.forChild(OURBRAND_ROUTES);
