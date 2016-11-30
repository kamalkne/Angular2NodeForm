import { Component, Input } from 'angular2/core';
import { TimeSlotComponent } from 'built/component/time-slot/time-slot.component';
 
@Component({
    selector: 'my-app',
    templateUrl: 'src/component/app/app.component.html',
    directives: [TimeSlotComponent]
})
export class AppComponent {
public Slots:Array = [
        '9.00 - 10.00 AM',
        '10.00 - 11.00 AM',
        '11.00 - 12.00 AM',
        '12.00 - 01.00 PM'
    ];
}
