(function() {

        $.getJSON("http://localhost:8080", function(info) {
            var tmpl = $("#api-info-template").text();
            var render = _.template(tmpl);
            var html = render(info);

            $("#wrapper").append(html);
        });

        var todoTmpl = _.template($("#todo-template").text());

        var setupTodolistTemplate = function() {
            $.getJSON("http://localhost:8080/todos", function(response) {
                var todos = response.todos;

                todos.forEach(function(todo) {
                    $("#todolist").append(todoTmpl(todo));
                });
            });
        };

        var setupTodoListener = function() {

            $("form").on("submit", function(e) {
                e.preventDefault();
                var todoDescription = $("#todoitem").val();

                $.ajax({
                    data: {
                        description: todoDescription
                    },
                    url: "http://localhost:8080/todos",
                    method: "POST",
                    success: function(response) {
                        $("#todolist").append(todoTmpl(response))
                    }
                });
            });
        };

        var setupEditTodo = function() {

        $("form").on("Edit", function(e) {

            var todoDescription = $("#todoitem").val();

            $.ajax({
                data: {
                    description: todoDescription
                },
                url: "http://localhost:8080/todos",
                method: "PUT",
                success: function(response) {
                    $("todoitem").update(todoTmpl(response))
                }
            });
        });
    };


        var setupDeleteTodo = function() {
       
        $("form").on("Delete", function(e) {
          
            $.ajax({
                data: {
                    description: todoDescription
                },
                url: "http://localhost:8080/todos",
                method: "DELETE",
                success: function(response) {
                    $("todoitem").delete(todoTmpl(response))
                }
            });
        });
    };

setupTodolistTemplate(); 
setupTodoListener();
setupEditTodo();
setupDeleteTodo();
})();
