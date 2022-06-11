interface Pingable {
  ping(): void;
}
class Sonar implements Pingable {
  ping() {
    console.log('ping!');
  }
}
class Ball implements Pingable {
  pong() {
    console.log('pong!');
  }
}
interface Checkable {
  check(name: string): boolean;
}
class NameChecker implements Checkable {
  check(s) {
    // any：注意这里没有错误
    return s.toLowercse() === 'ok';
  }
}

interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
c.y = 10;
