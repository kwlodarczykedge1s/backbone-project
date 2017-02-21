$(function () {
    var $addKid = $('<button>', {
        click: function () {
            console.log('click')
        },
        text: 'dodaj dziecko'
    })

    $('#buttons')
    .append($addKid)
})