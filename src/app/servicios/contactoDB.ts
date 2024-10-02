import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Contacto } from '../modelo/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoDB {
  contactosCollection: AngularFirestoreCollection<Contacto>;

  constructor(private db: AngularFirestore) {
    this.contactosCollection = db.collection("contacto", ref => ref.orderBy("nombre", "asc"));
  }

  agregarCliente(contacto: Contacto): Promise<void> {
    return this.contactosCollection.add(contacto).then(() => {
      console.log('Contacto agregado con éxito');
    }).catch((error) => {
      console.error('Error al agregar contacto: ', error);
    });
  }
}
