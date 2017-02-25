$(function () {
    selectImportantCells()
    const uri = 'http://localhost:9001/'
    var dataObject = {};
    var tBody = $('#tBody');
    var $addPerson = $('<button>', {
        click: function () {
            const personData = {
                _id: null,
                name: 'John Doe',
                gender: 'Male'
            }

            $.post(uri + 'users/', personData, function (data) {
                console.log(data)
            })
                .then(function () {
                    console.log('dane wysłane')
                }).catch(function () {
                    console.log('błąd')
                });

        },
        text: 'Add Person',
        class: 'btn btn-primary'
    });

    var $howElements = $('<button>', {
        text: 'Ile elementów listy?',
        class: 'btn btn-primary',
        click: function () {
            var listElems = $('tr').length - 1
            alert('Dodanych ludzi: ' + listElems)
        }
    });

    var $searchInput = '<input type="text" id="lastNameSearch">';

    var $deleteUser = '<button id="deleteUser">x</button>';
    $($deleteUser).on('click', '#tr', function () {
    })

    $('#addPerson').append([$addPerson, $howElements, $searchInput])

    $.get(uri + 'users', function (resp) {
        const data = resp;
        $.each(data, function (key, value) {
            $(tBody).append(
                '<tr id="tr"><td>' + value.index + '</td><td>' + value.name + '</td> <td>' + value.gender + '</td><td>' + $deleteUser + '</td></tr>')
                .css('list-style-type', 'none');
        })
        $('tbody').on('click', '#deleteUser', function (event) {
            var elementOfTable = $('tbody #deleteUser').index(this);
            var clickedObject = data[elementOfTable];
            var id = clickedObject._id;

            $.ajax({
                url: uri + 'users?_id=' + id,
                type: 'DELETE',
                result: function (resp) {
                    console.log(resp)
                }
            })
                .then(function () {
                    console.log('success')
                })
                .catch(function (err) {
                    $.each(err, function () {
                        console.log(err.statusText)
                    });
                });
        });
    })

    function selectImportantCells() {
        $('tbody').on('click', 'tr', function () {
            $(this).css({
                'background-color': 'red',
                'font-weight': 'bold',
                'color': 'white',
                'font-size': '16px;'
            });
        });
    }
});
