class Pop {
    constructor() {
        this._id = this.genarateId();
        this._body = "I love coding";
        this._font = ["lemon","/res/fonts/lemon.ttf"];
        this.dev = "no";
    }
    set font([font="lemon",src="/res/fonts/lemon.ttf"]) {
        this._font = [font,src];
    }
    genarateId() {
        let rand = Math.random();
        let alpha = "abcdefghijklmnopqrst_-1234567890";
        let genaratedId = "",temp;
        for (let i = 0; i < (4 + rand * 3);i++ ) {
            temp = Math.floor(Math.random() * alpha.length);
            genaratedId += alpha.charAt(temp);
        }
        return genaratedId;
    }
    set id(id="loveit") {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    get body() {
        return this._body;
    }
    set body(text=this._body) {
        this._body = text;
    }
    show(time=3200) {
        if (this.dev == "no") {
        this.process();
        }
        const element = document.getElementById(this._id);
        element.style.animation = "an .1s ease-out";
        element.style.display = "block";
       setTimeout(() => {
           element.style.animation = "hide  .3s ease-in";
           setTimeout(() => {
        element.style.display = "none";
           },300);
        },time);
    }
    process() {
    const main = `
    @font-face {
    font-family: '${this._font[0]}';
    src: url('${this._font[1]
}');
}

:root {
    --popboxwidth: clamp(320px,60%,460px);
}
#${this._id} {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    display: block;
    /*left: calc(50vw - ((var(--popboxwidth)) / 2));*/
    transform: ;
    aspect-ratio: 2 / 1.1;
    width: var(--popboxwidth);
    background: rgba(234,243,254,.3);
    backdrop-filter: blur(45px);
    border-radius: 10px;
    text-align: left;
    z-index: 3;
    transition: ;
    box-shadow: 2px 3px 8px rgba(0,5,4,.2);
}
@keyframes an {
   from {
        opacity: .3;
        width: calc(var(--popboxwidth) - 30%);
    } to {
        opacity: 1;
        width: var(--popboxwidth);
    }
}
@keyframes hide {
    from {
        opacity: 1;
        width: var(--popboxwidth);
    } to {
        opacity: .3;
        width: calc(var(--popboxwidth) - 30%);
    }
}
.robo {
    width: 100px;
    position: absolute;
    filter: contrast(110%) drop-shadow(3px 2px 3px rgba(2,5,5,.3)) hue-rotate(5deg) brightness(101%);
    animation: toggle 1s ease-in-out infinite;
    left: 37%;
    transform: translate(-50%);
}
@keyframes toggle {
    0%,100% {
        margin-top: -3px;
        filter: hue-rotate(320deg);
    } 50% {
        margin-top: 5px;
        filter: hue-rotate(378deg);
    }
}
.articles {
    width: 100%;
    display: flex;
    text-align: center;
    position: relative;
    backdrop-filter: contrast(85%) hue-rotate(0deg) brightness(110%);
    background-image: linear-gradient(25deg,rgba(255, 13, 130,.2),transparent);
    padding-bottom: .005%;
    border-radius: 10px;
    font-size: 20px;
    justify-content: center;
    border-top: 1px solid rgba(255,255,255,.3);
    font-family: 'lemon', cursive;
    align-items: center;
    height: calc(100% - 100px);
    font-weight: 900;
    text-shadow: 0px 2px 0px rgba(255,255,255,.3);
}
.articles p {
    color: rgba(251,25,44,.5);
    border-radius: 6px;
    opacity: .6;
    padding-top: 9px;
    padding-bottom: 0px;
    font-weight: 700;
}
.extra {
    width: 100%;
    height: 100px;
    text-align: right;
    filter: contrast(159%);
}
@keyframes anim {
    0%,100% {
        filter: hue-rotate(43deg);
    }
    50% {
        filter: hue-rotate(360deg);
    }
}
.extra p {
    background: linear-gradient(90deg,cyan,lime);
    animation: anim 3s linear infinite;
    display: inline-block;
    color: transparent;
    font-family: ${this._font[0]};
    padding-top: 20px;
    padding-right: 20px;
    text-shadow: 0px 3px 3px rgba(0,0,0,.5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;
 const style = document.createElement("style");
 style.innerHTML = main;
 document.head.appendChild(style);
 const html = `    <!-- *** Space for animation ***-->

    <img width="100" class="robo" src="/res/robo.png"/>
    <div class="extra">
    </div>
<div class="articles">
    <p>${this._body}</p>
    </div>

    <!-- ***************************-->`;
const div = document.createElement('div');
 div.innerHTML = html;
 div.id = this._id;
 document.body.appendChild(div);
 this.dev = "yes";
    }
    
}