enum EventType {
  Mouse,
  Keyboard,
}
interface Event {
  timestamp: number;
}
interface MyMouseEvent extends Event {
  x: number;
  y: number;
}
interface MyKeyEvent extends Event {
  keyCode: number;
}
function listenEvent(eventType: EventType, handler: (n: Event) => void) {
  /* ... */
}
// 不健全，但有用且常见
listenEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + ',' + e.y));
// 在健全性存在的情况下，不可取的选择
listenEvent(EventType.Mouse, (e: Event) =>
  console.log((e as MyMouseEvent).x + ',' + (e as MyMouseEvent).y)
);
listenEvent(EventType.Mouse, ((e: MyMouseEvent) => console.log(e.x + ',' + e.y)) as (
  e: Event
) => void);
// 仍然不允许（明确的错误）。对于完全不兼容的类型强制执行类型安全
listenEvent(EventType.Mouse, (e: number) => console.log(e));
