import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  testVariable: string = "TEST TEST COMPONENT WIRKS!";
}
