import { FaceSnap } from '../models/face-snap.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 128,
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Un bon repas',
      description: "Mmmh que c'est bon !",
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 256,
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapsById(id: number): FaceSnap {
    const faceSnap = this.faceSnaps.find((item) => item.id === id);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapsById(id: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapsById(id);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
