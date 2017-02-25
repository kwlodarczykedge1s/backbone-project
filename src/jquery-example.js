$(function(){
        const uri = 'http://localhost:9001/'
        var dataObject = {}
        var tBody = $('#tBody');
        var $addPerson = $('<button>', {
            click: function(){
               const personData = {
                   id: null,
                   name: 'John Doe',
                   gender: 'Male'
               }
            
               $.post(uri + 'users', personData, function(data){
                   console.log(data)
               })
                .then(function(){
                    console.log('dane wysłane')
                }).catch(function(){
                    console.log('błąd')
                })

            },
            text: 'Add Person',
            class: 'btn btn-primary'
        })

        var $deleteUser = '<button>x</button>'
        $($deleteUser).on('click', 'th', function(){
            console.log('asdas')
        })

        $('#addPerson').append($addPerson)

        $.get(uri + 'users', function(resp){
            const data = resp;
            $.each(data, function(key, value){
                $(tBody).append(
                    '<tr><td>' + value.index + '</td><td>' + value.name + '</td> <td>' + value.gender + '</td><td>' + $deleteUser +'</td></tr>')
                .css('list-style-type', 'none')
          })      
        })
    })
