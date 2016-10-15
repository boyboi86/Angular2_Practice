import { Component} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'This is string';
  numberInterpolation = 2;
  onTrue = () => { return true};
/*Event emitter for event-binding methods*/
  onClicked(value: string){
    alert(value);
  }

}
