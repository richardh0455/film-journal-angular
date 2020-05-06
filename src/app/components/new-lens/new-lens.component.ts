import { Component, OnInit } from '@angular/core';
import {LensService} from '../../services/lens/lens.service';
import { FormBuilder, ReactiveFormsModule   } from '@angular/forms';
import {Lens} from '../../interfaces/lens';
@Component({
  selector: 'app-new-lens',
  templateUrl: './new-lens.component.html',
  styleUrls: ['./new-lens.component.scss']
})
export class NewLensComponent implements OnInit {

  newLensForm;

  constructor(private lensService: LensService, private formBuilder: FormBuilder) {
    this.newLensForm = this.formBuilder.group({
      manufacturer: '',
      width: '',
      aperture: '',
      mounting: '',
    });

  }

  ngOnInit(): void {
  }

  onSubmit(lensData) {
    this.newLensForm.reset();
    var lens = {
      manufacturer: lensData.manufacturer,
      width: lensData.width,
      aperture: lensData.aperture,
      mounting: lensData.mounting
    } as Lens;
    this.lensService.addLens(lens).subscribe((res) => {
      if(res.id && res.id !== null && res.id !== "")
      {
        console.log("Lens Added Successfully");
      }
    });
  }

}
