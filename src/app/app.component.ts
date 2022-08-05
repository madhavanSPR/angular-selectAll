import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectall: boolean;
  disabled = false;
  extra: boolean;
  ngOnInit() {
    this.selectall = false;
  }

  SelectAll(event) {
    if (event.checked == true) {
      this.selectall = true;
    } else if (event.checked == false) {
      this.selectall = false;
    }
  }
  onChange(event) {
    if (event.checked == true) {
      this.extra = true;
    } else {
      this.extra = false;
    }
  }
}
