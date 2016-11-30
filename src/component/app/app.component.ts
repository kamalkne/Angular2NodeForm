import { Component, Input } from 'angular2/core';
import { TimeSlotComponent } from 'built/component/time-slot/time-slot.component';
 
@Component({
    selector: 'my-app',
    templateUrl: 'src/component/app/app.component.html',
    directives: [TimeSlotComponent]
})
export class AppComponent {
    public mySlot:number = 2;
}
