var $btnAumentar = $("#btnAumentar");
var $btnDiminuir = $("#btnDiminuir");
var $elemento = $("body").find("*");
var fonts = [];

function obterTamanhoFonte() {
for (var i = 0; i < $elemento.length; i++) {
    fonts.push(parseFloat($elemento.eq(i).css('font-size')));
}
}

$btnAumentar.on('click', function() {
for (var i = 0; i < $elemento.length; i++) {
    ++fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]++);
}
});

$btnDiminuir.on('click', function() {
for (var i = 0; i < $elemento.length; i++) {
    --fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]);
}
});

obterTamanhoFonte();

// const mode = document.getElementById('mode-icon');

// mode.addEventListener('click', () => {
//     if (mode.classList.contains('fa-moon')) {
//         mode.classList.remove('fa-moon');
//         mode.classList.add('fa-sun');
//         return;
//     }
//     mode.classList.add('fa-moon');
//     mode.classList.remove('fa-sun');
// });




// const modeButton = document.getElementById('mode-button');
// const modeIcon = document.getElementById('mode-icon');
// const bodyElement = document.body;

// modeButton.addEventListener('click', () => {
//   // Verifica se o dark mode está ativo
//   const isDarkMode = modeIcon.classList.contains('fa-moon');

//   // Alterna as classes para o ícone e para o body
//   if (isDarkMode) {
//     modeIcon.classList.remove('fa-moon');
//     modeIcon.classList.add('fa-sun');
//     bodyElement.classList.add('dark-mode');
//   } else {
//     modeIcon.classList.add('fa-moon');
//     modeIcon.classList.remove('fa-sun');
//     bodyElement.classList.remove('dark-mode');
//   }
// });

const chk = document.getElementById('chk')
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})