import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temp: string[] = [];
  template = (a: string): void => {
    this.temp.push(a);
  }

  validate(tem) {
    if (tem.key === 'Enter' && tem.target.value !== '') {
      this.template(tem.target.value);
      tem.target.value = '';
    }
  } 
}
