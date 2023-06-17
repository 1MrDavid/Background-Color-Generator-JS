//hexadecimal generator
function random_bg_hexdecm() {
    const alphabet = 'abcdef';
    let hex = [];
    for (var i = 0; i < 6; i++) {
        let random_num = Math.floor(Math.random() * 10);
        let random_letter = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (Math.random() < 0.5) {
            hex.push(random_num) ;
    } else {
        hex.push(random_letter)
    }
}
let bgColor = '#' + hex[0] + hex[1] + hex[2] + hex[3] + hex[4]+ hex[5]
document.body.style.background = bgColor;
let hexcode = document.getElementById('hexcode');
hexcode.innerHTML = bgColor;
hexcode.style.color = bgColor;
}

let generate_bg = document.getElementById('generate_bg');
generate_bg.addEventListener("click", random_bg_hexdecm);


random_bg_hexdecm();
