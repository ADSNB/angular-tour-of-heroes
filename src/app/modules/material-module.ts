import { NgModule } from '@angular/core';

// Classes Angular Material
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
} from '@angular/material';

// Browser Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BROWSER_ANIMATIONS_PROVIDERS } from '@angular/platform-browser/animations/src/providers';

// Telas Angular Material
/*
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { OldMasterPageComponent } from './old-master-page/old-master-page.component';
import { NavigationExampleComponent } from './navigation-example/navigation-example.component';
 */

@NgModule({
    imports: [ ],
    exports: [ BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatToolbarModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
    ],
    providers: [ ],
})

export class MaterialModule { }
