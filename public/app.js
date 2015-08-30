(function () {
	// get the info from the api server
	// inject the info into our new template
	// append that template to the wrapper
	$.getJSON("http://localhost:8080", function (info) {
		var tmpl = $("#api-info-template").text();
		var renderTmpl = _.template(tmpl);
		var html = renderTmpl(info);
		
		$("#wrapper").append(html);
	});

	var todoTmpl = _.template($("#todo-template").text());

	var setupTodoListTemplate = function () {
		$.getJSON("http://localhost:8080/todos", function (response) {
			var todos = response.todos;
			todos.forEach(function(todo) {
				$("#todolist").append(todoTmpl(todo));
			});
		});
	};


	// create a new todo (adds to the "database" through the api and update the list)
	var setupAddTodoListener = function() {
	// enter text into input
	// click add item/submit
	// listen for the above event
		$("form").on("submit", function(e) {
			// prevent the default
			e.preventDefault();
			// get the todo text from the input
			var todoDescription = $("#createTodoInput").val();
			// send the todo to the api server => (newTodo)
			$.ajax({
				data: {
					description: todoDescription
				},
				url: "http://localhost:8080/todos",
				method: "POST",
				success: function (response) {
					// END GOAL: append todo to do the todolist
					$("#todolist").append(_todoTmpl(response)); // todo === the response which is an object (id, description, status)
				}
			});
		});
	};
/*

  // Edit todo description
  	var setupEditTodoListenter = function () {}
    // Populate a form with the todo description
    	$("form").on("click", function(e) {
    		$.ajax({ 
    			data: {
    				description: todoDescription
    			},
    			url: "http://localhost:8080/todos",
    			method: "PUT",
    			success: function (response) {
    				$("todolist").append(_todoTmpl(response));
    			}
    		});
    	});
    }
      // edit the description => submit
        // send it to the server "PUT" (Fed him here)
          // success callback => (pooped back here)
              // update the UI to let the user know it worked

  // Change the status of a todo

  // Delete todo
 
)();