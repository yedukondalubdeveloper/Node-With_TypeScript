var name;
            var to_be_updated;
            $(document).ready(function() {
              $('#myTable').DataTable();
            });
            // edit data
            $('.update').click(function() {
                id= this.id;
                console.log('id is '+id)
                $.ajax({
                    type: 'POST',
                    url: '/users/edit',
                    data: {"email":id},
                    success: function(data){
                          $("#update_fname").attr("value", data.fname);
                          $("#update_lname").attr("value", data.lname);
                          $("#update_email").attr("value", data.email);
                          $("#update_phone").attr("value", data.phone);
                          $('#Modal').modal({show: true});
                    },
                    error: function(){
                        alert('No data');
                    }
                });
            });
            // update data
              $(function(){
                  $('#update_table').on('click', function(e){
                    console.log('i am indsd');
                    var data = $('#update_user').serialize();
                    debugger;
                    console.log(JSON.stringify(data));
                    e.preventDefault();
                    $.ajax({
                      url: '/users/update',
                      type:'PUT',
                      data : data,
                      success: function(data){
                        console.log('i am googleapis');
                        window.location.reload()
                    },
                    error: function(){
                      alert('No data');
                    }
                  });
              });
              });
        
              $('.delete').click(function() {
                var response = confirm("do you want to delete")
                email = this.id;
                console.log(">>>>",email)
                if(response === true){
                    $.ajax({
                        type: 'DELETE',
                        url: '/users/delete',
                        method: 'delete',
                        data: {"email":email},
                        success: function(data){
                            console.log('data is '+JSON.stringify(data));
                            window.location.reload()
                        },
                        error: function(){
                          alert('No data');
                        }
                    });
                }
                else{
                    console.log("not deleted")
                }
                });

              