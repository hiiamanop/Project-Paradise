$(document).ready(function () {
    $('.hide h1').dblclick(function () {
        $(this).hide();
    });
    $('.hide h6').dblclick(function () {
        $(this).hide();
    });

    $('.changeColor h3').click(function () {
        $(this).css("color", "blue");
    });
    $('.changeColor h3').dblclick(function () {
        $(this).css("color", "black");
    });

    $('.changeColor h6').click(function () {
        $(this).css("color", "blue");
    });
    $('.changeColor h6').dblclick(function () {
        $(this).css("color", "black");
    });

    // $('.buatacc button').click(function () {
    //     alert("Anda Telah Berhasil Terdaftar");
    // });

    $('#click').on('click', function () {
        if ($('#click').text() === 'show') {
            $('#click').text('hide');
            $('#element').css('display', 'flex');
        }
        else {
            $('#click').text('show');
            $('#element').css('display', 'none');
        }
    });
    
    $(document).ready(function () {
        $(".mulai").click(function () {
            $(".start").animate({
                height: 'toggle'
            });
        });
    });
});

function displaydate() {
    document.getElementById('showdate').innerHTML = Date();

    var dt = new Date();
    document.getElementById("showtime").innerHTML = dt.toLocaleTimeString();
    window.setTimeout("displaydate()", 1000);

    $('#time').on('click', function () {
        if ($('#time').text() === 'show') {
            $('#time').text('hide');
            $('p').css('display', 'flex');
        }
        else {
            $('#time').text('show');
            $('p').css('display', 'none');
        }
    });
}







