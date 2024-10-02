import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../../environments/environment';

import { provideFirebaseApp } from '@angular/fire/app';
import {  initializeApp } from 'firebase/app';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig, "control-clientes")),
    provideFirestore(() => getFirestore()),

    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },


  ],
};
