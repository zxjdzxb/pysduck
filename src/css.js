const string = ` *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: #BFFBFF;
    height: 150px;
    width: 1500px;


}

@keyframes raise {
    25% {
        transform: rotate(170deg) translate(2vmin, -3vmin);
        transform-origin: top;
    }

    50% {
        transform: rotate(150deg) translate(3vmin, -3vmin);
        transform-origin: top;
    }

    60% {
        transform: rotate(170deg) translate(2vmin, -3vmin);
        transform-origin: top;
    }
}

@keyframes raise-inv {
    25% {
        transform: rotate(-170deg) translate(-2vmin, -3vmin);
        transform-origin: top;
    }

    50% {
        transform: rotate(-150deg) translate(-3vmin, -3vmin);
        transform-origin: top;
    }

    60% {
        transform: rotate(-170deg) translate(-2vmin, -3vmin);
        transform-origin: top;
    }
}

.skin {
    position: relative;

    background: transparent;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    top: 200px;
    left: 50%;
    margin-left: -200px;
}

.hair {
    position: relative;
    background: #615F4E;
    height: 35px;
    width: 12px;
    border-radius: 10%;
    left: 50%;
    top: 10px;
    margin-left: -6px;
}

.hair::after {
    content: '';
    position: absolute;
    background: #615F4E;
    height: 28px;
    width: 10px;
    border-radius: 10%;
    top: 5px;
    left: -12px;
    transform: rotate(-20deg);
}

.hair::before {
    content: '';
    position: absolute;
    background: #615F4E;
    height: 30px;
    width: 8px;
    border-radius: 10%;
    top: 5px;
    left: 13px;
    transform: rotate(20deg);
}

.head {

    position: relative;
    background: #FAF16E;
    height: 100px;
    width: 150px;
    border-radius: 50%;
    top: 5px;
    left: 50%;
    margin-left: -75px;

}

.head::before {

    content: '';
    position: absolute;
    background: #FAF16E;
    height: 160px;
    width: 130px;
    border-radius: 50% 50% 50% 50% / 70% 70% 40% 40%;
    top: 30px;
    left: 10px;
    z-index: 2;
}

.mouth {

    position: relative;
    background: #F8F2CB;
    height: 60px;
    width: 90px;
    border-radius: 50%;
    top: -50px;
    border-bottom: 10px solid #e0dcc1;
    z-index: 5;
    left: 50%;
    margin-left: -45px;
}

.mouth::before {
    content: '';
    position: absolute;
    background: #F8F2CB;
    width: 120px;
    height: 40px;
    border-radius: 50%;
    top: 12px;
    left: 50%;
    margin-left: -60px;
    z-index: 5;
}

.nostrils {
    position: relative;
    background: #615F4E;
    height: 5px;
    width: 5px;
    border-radius: 5px 0;
    top: -119px;
    left: 50%;
    margin-left: 7px;
    z-index: 6;
}

.nostrils::before {
    content: '';
    position: absolute;
    background: #615F4E;
    height: 5px;
    width: 5px;
    border-radius: 0 5px;
    left: -20px;
    z-index: 1;
}

.face {
    position: relative;
    background: #FFC5A5;
    height: 15px;
    width: 20px;
    border-radius: 50%;
    top: -55px;
    left: 50%;
    margin-left: -70px;
    box-shadow: 120px 0 #FFC5A5;
    z-index: 2;

}

.eyes {

    width: 30px;
    height: 20px;
    position: relative;
    left: 50%;
    top: -138px;
    margin-left: -65px;
    background: white;
    border-radius: 49% 51% 51% 49%;
    z-index: 8;
    box-shadow: 100px 0 white;



}

.eyes::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    left: 50%;
    top: 7px;
    margin-left: 5px;
    background: #615F4E;
    box-shadow: 85px 0 #615F4E;
}

.arm {
    position: relative;
    background: #FAF16E;
    height: 70px;
    width: 35px;
    border-radius: 50% 50% 20% 20%;
    border-right: 25px solid #FAF16E;
    border-bottom: 28px solid #ebe26a;
    left: 125px;
    top: -70px;

    animation: raise 3s infinite;
}

.arm::before {

    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 15px solid transparent;
    border-top: 1vmin solid #ebe26a;
    top: 69px;


}

.arm::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 4px solid transparent;
    border-top: 1vmin solid #ebe26a;
    top: 69px;
    left: 12px;

}

.rightArm {
    position: relative;
    background: #FAF16E;
    height: 70px;
    width: 35px;
    border-radius: 50% 50% 20% 20%;
    border-right: 25px solid #FAF16E;
    border-bottom: 28px solid #ebe26a;
    left: 242px;
    top: -136px;
    animation: raise-inv 3s linear 1s infinite;
}

.rightArm::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 15px solid transparent;
    border-top: 1vmin solid #ebe26a;
    top: 69px;
    left: 2px;
}

.rightArm::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 4px solid transparent;
    border-top: 1vmin solid #ebe26a;
    top: 69px;
    left: 13px;
}

.foot .left {
    position: relative;
    width: 32px;
    height: 18px;
    background: #F8F2CB;
    border-radius: 50%;
    top: -173px;
    left: 155px;

    animation: footsie 0.5s infinite;
}

.foot .right {
    position: relative;
    width: 32px;
    height: 18px;
    background: #F8F2CB;
    border-radius: 50%;
    top: -154px;
    left: 217px;

    animation: footsie 0.5s infinite;
}


@keyframes footsie {
    50% {
        transform: translatey(1vmin);
    }
}

@keyframes right-footsie {
    50% {
        top: 38vmin;
    }
}
`
export default string;