// EventScheduler.ts
export class EventScheduler {
    private events: any[] = [];

    startEvent(eventData: any): void {
        this.events.push(eventData);
    }

    stopAllEvents(): void {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i]) {
                this.events.splice(i, 1);
                i--;
            }
        }
    }
}
