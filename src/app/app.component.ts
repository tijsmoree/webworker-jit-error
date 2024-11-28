import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '',
})
export class AppComponent implements OnDestroy {
  private readonly worker = new Worker(
    new URL('./app.worker', import.meta.url),
  );

  constructor() {
    this.worker.onmessage = event => console.log(event.data);

    this.worker.postMessage(1234);
  }

  ngOnDestroy(): void {
    this.worker.terminate();
  }
}
