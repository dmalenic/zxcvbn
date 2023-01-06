document.getElementById("clickme").onclick=function(event) {
let pwd=document.getElementById("pwd").value;
const cplx=zxcvbn(pwd);
const bits=cplx.guesses_log10/Math.log10(2);
const scoreFld=document.getElementById("score");
switch(cplx.score){
case 0: scoreFld.value="too guessable: risky password. (guesses < 10^3)"; break;
case 1: scoreFld.value="very guessable: protection from throttled online attacks. (guesses < 10^6)"; break;
case 2: scoreFld.value="somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)"; break;
case 3: scoreFld.value="safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)"; break;
case 4: scoreFld.value="very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)"; break;
}
console.log(cplx);
document.getElementById("res").value=cplx.guesses_log10;
document.getElementById("bits").value=bits;
}
