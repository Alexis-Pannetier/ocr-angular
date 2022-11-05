import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButton!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.snapButton = 'Oh snap !';
    const faceSnapId = +this.route.snapshot.params['id']; // + : transform into number
    this.faceSnap = this.faceSnapsService.getFaceSnapsById(faceSnapId);
  }

  toggleSnap() {
    const snapButtonOups = 'Oups unsnap !';
    const snapButton = 'Oh snap !';
    if (this.snapButton === snapButton) {
      this.onAddSnap(snapButtonOups);
    } else if (this.snapButton === snapButtonOups) {
      this.onRemoveSnap(snapButton);
    }
  }

  onAddSnap(text: string) {
    this.snapButton = text;
    this.faceSnapsService.snapFaceSnapsById(this.faceSnap.id, 'snap');
  }

  onRemoveSnap(text: string) {
    this.snapButton = text;
    this.faceSnapsService.snapFaceSnapsById(this.faceSnap.id, 'unsnap');
  }
}
