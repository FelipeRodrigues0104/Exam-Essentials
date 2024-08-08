document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtns = document.querySelectorAll('.sub-topic-btn');

    dropdownBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var dropdownContainer = this.nextElementSibling;
            if (dropdownContainer.style.display === 'block') {
                dropdownContainer.style.display = 'none';
            } else {
                dropdownContainer.style.display = 'block';
            }
        });
    });
});
