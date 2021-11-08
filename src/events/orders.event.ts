import { Param } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

export class orderEvent {
  constructor(private eventEmitter: EventEmitter2) {
    this.eventEmitter.emit(
      'order.created',
      new OrderCreatedEvent({
        orderId: 1,
        payload: {},
      }),
    );
    function OrderCreatedEvent(_prams) {
      console.log(_prams, 'params');
    }
  }
}
