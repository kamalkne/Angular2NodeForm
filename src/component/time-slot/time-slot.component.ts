import { Component, Input } from 'angular2/core';

@Component({
    selector: 'time-slot',
    templateUrl: 'src/component/time-slot/time-slot.component.html'
})
export class TimeSlotComponent {
    @Input() slot: Slot;
}
