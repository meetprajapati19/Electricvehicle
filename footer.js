// Load and insert the header content
// window.addEventListener('DOMContentLoaded', function () {
//     fetch('../header.html')
//         .then(response => response.text())
//         .then(content => {
//             document.querySelector('header').innerHTML = content;

//             const selectBtn = document.getElementById('select-btn');
//             const option = document.getElementById('dropdown-option-list');

//             selectBtn.addEventListener('click', function(){
//                 option.classList.toggle('active');   
//             });

//         });
// });

window.addEventListener('DOMContentLoaded', function () {
    fetch('../footer.html')
        .then(response => response.text())
        .then(content => {
            document.querySelector('footer').innerHTML = content;
        });
});





