import { Component, Input } from 'angular2/core';
import { TimeSlotComponent } from 'built/component/time-slot/time-slot.component';
 
@Component({
    selector: 'my-app',
    templateUrl: 'src/component/app/app.component.html',
    directives: [TimeSlotComponent]
})
export class AppComponent {
    public Slots:Array = [
        '9.00 AM - 10.00 AM',
        '10.00 AM - 11.00 AM',
        '11.00 AM - 12.00 PM',
        '12.00 PM - 01.00 PM',
        '01.00 PM - 02.00 PM',
        '02.00 PM - 03.00 PM',
        '03.00 PM - 04.00 PM',
        '04.00 PM - 05.00 PM'
    ];
}
