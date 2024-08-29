document.addEventListener("DOMContentLoaded", function() {
    function changeStyle() {
        let one = document.getElementById("first");
        let second = document.getElementById("second");
        let third = document.getElementById("third");
        let fourth = document.getElementById("fourth");
        let fifth = document.getElementById("fifth");
        let six = document.getElementById("sixth");
        let seven = document.getElementById("seven");
        let eight = document.getElementById("eight");

        // changing the font of paragraph 1
        one.onmouseover = () => {
            change(one);
        };

        one.onmouseout = () => {
            unchange(one);
        };

        // changing the font of paragraph 2
        second.onmouseover = () => {
            change(second);
        };

        second.onmouseout = () => {
            unchange(second);
        };

        // changing the font of paragraph 3
        third.onmouseover = () => {
            change(third);
        };

        third.onmouseout = () => {
            unchange(third);
        };

        // changing the font of paragraph 4
        fourth.onmouseover = () => {
            change(fourth);
        };

        fourth.onmouseout = () => {
            unchange(fourth);
        };

        // changing the font of paragraph 5
        fifth.onmouseover = () => {
            change(fifth);
        };

        fifth.onmouseout = () => {
            unchange(fifth);
        };

        // changing the font of paragraph 6
        six.onmouseover = () => {
            change(six);
        };

        six.onmouseout = () => {
            unchange(six);
        };

        // changing the font of paragraph 7
        seven.onmouseover = () => {
            change(seven);
        };

        seven.onmouseout = () => {
            unchange(seven);
        };

        // changing the font of paragraph 8
        eight.onmouseover = () => {
            change(eight);
        };

        eight.onmouseout = () => {
            unchange(eight);
        };
    }

    function change(element) {
        element.style.fontStyle = 'italic';
    }

    function unchange(element) {
        element.style.fontStyle = 'normal';
    }

    // Call the function to initialize the event listeners
    changeStyle();
});