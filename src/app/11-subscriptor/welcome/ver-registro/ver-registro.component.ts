import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipamientoService } from './equipamiento.service';

@Component({
  selector: 'app-ver-registro',
  templateUrl: './ver-registro.component.html',
  styleUrls: ['./ver-registro.component.css']
})
export class VerRegistroComponent implements OnInit {

  equipamiento: any;
  eqId: any;

  constructor(private equipamientoService: EquipamientoService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(): void {
    this.eqId = this.route.snapshot.paramMap.get('id');
    this.equipamientoService.getEquipamiento(this.eqId).subscribe((data) =>{
      this.equipamiento = data;
    })
  }

}
