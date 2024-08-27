$(document).ready(function () {
    // Toggle Dark/Light Mode
    $('#dark-mode-btn').click(function() {
        $('body').addClass('dark-mode').removeClass('light-mode');
        $('#dark-mode-btn').hide();
        $('#light-mode-btn').show();
    });

    $('#light-mode-btn').click(function() {
        $('body').addClass('light-mode').removeClass('dark-mode');
        $('#light-mode-btn').hide();
        $('#dark-mode-btn').show();
    });

    // Inisialisasi flipbook
    $("#container").flipBook({
        pages: [
            { src: "images/book2/page1.jpg", thumb: "images/book2/thumb1.jpg", title: "Cover" },
            { src: "images/book2/page2.jpg", thumb: "images/book2/thumb2.jpg", title: "Page two" },
            { src: "images/book2/page3.jpg", thumb: "images/book2/thumb3.jpg", title: "Page three" },
            { src: "images/book2/page4.jpg", thumb: "images/book2/thumb4.jpg", title: "Page four" },
            { src: "images/book2/page5.jpg", thumb: "images/book2/thumb5.jpg", title: "Page four" },
            { src: "images/book2/page6.jpg", thumb: "images/book2/thumb6.jpg", title: "Last Page, But I Love You Unlimited Anisa Aulia" }
        ]
    });
});