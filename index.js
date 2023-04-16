const body = document.body;
var hex = document.getElementById('hex')

function gen() {
    var hexnum = Math.floor(Math.random() * 16581375);
    var hexcode = '#' + hexnum.toString(16);
    console.log(hexcode);
    document.getElementById('btn').style.backgroundColor = hexcode;
    document.body.style.backgroundColor = hexcode;
    hex.innerText = hexcode;
}
gen();