class Greeter {
  saySomething(message: string = 'hi') {
    return message + ' something';
  }
}

var greeter = new Greeter();
greeter.saySomething('hello';)
