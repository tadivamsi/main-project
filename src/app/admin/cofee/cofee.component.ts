import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective  } from '@angular/forms';

@Component({
  selector: 'app-cofee',
  templateUrl: './cofee.component.html',
  styleUrls: ['./cofee.component.scss']
})
export class CofeeComponent implements OnInit {
  data:any=[]


  constructor(private userservice:UserService, private fb:FormBuilder) { }
  userform=this.fb.group({
    id:[this.data.id],
    blend_name:[this.data.blend_name],
    origin:[''],
    variety:[''],
    notes:[''],
    intensifier:['']

})

ngOnInit(): void {
  this.userservice.getcoffee()
.subscribe((res:any)=>
  {
    // console.log(res);
    this.data=res
    console.log(this.data);

    console.log(this.data.blend_name);
    
    
  })
}

getcoffee() {



  // const obj={
    
  
  //   "id": this.userform.value.id,
  //   "blend_name": this.userform.value.blend_name,
  //   "origin": this.userform.value. origin,
  //   "variety": this.userform.value.variety,
  //  "notes":this.userform.value.notes,
  //  "intensifier":this.userform.value.intensifier
  // }
  
 

  
}
}

