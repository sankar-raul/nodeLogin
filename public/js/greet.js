
        class Greet {
            constructor() {

            }
            mesg() {
                return this.getTime();
            }
            getTime() {
                const time = new Date();
                const hours = time.getHours();
                let greetings = ["Good Morning ","Good Afternoon","Good Evening","Good Night"];
            let hoursKey = hours >= 4 && hours <= 11 ? greetings[0]: hours >= 12 && hours <= 16 ? greetings[1]: hours >= 17 && hours <= 20 ? greetings[2]: greetings[3];
                return hoursKey;
            }
        }
        function greet() {
        var msg = new Greet();
        let element = document.getElementById("timeGreet");
        element.innerHTML = msg.mesg();
        }
    greet();
