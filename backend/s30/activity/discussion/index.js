// console.log("hi");

// [SECTION] DOM manipulation
// let button = document.getElementById("clicker");
let button = document.querySelector("#clicker");
let counter = 0;

// console.log(button);
// you can attach an event listener to an element and execute a function depending on the event that the event will be triggered.
button.addEventListener("click", function () {
  counter++;
  //   alert("the button has been clicked " + counter + " times!");
  console.log("The button has been clicked!");
  // console.log(`The button has been clicked ${counter} times!`);
});

// [SECTION] fetch method
const showPosts = function (posts) {
  // this will contain all of the posts along with there respective elements
  let postEntries = "";

  //   this will loop through each posts from the server and put them in their respective elements.
  posts.forEach((post) => {
    postEntries += `
            <div id="post-${post.id}">
                <h3 id="post-title-${post.id}">${post.title}</h3>
                <p id="post-body-${post.id}">${post.body}</p>
                <button onclick="editPost('${post.id}')">Edit</button>
                <button onclick="deletePost('${post.id}')">Delete</button>
            </div>
        `;
  });

  //   console.log(postEntries);
  document.querySelector("#div-post-entries").innerHTML = postEntries;
};

// the fetch function is responsible for retrieving data from a server
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json(); // converts the json data from a server into a regular javascript object
  })
  .then(function (data) {
    // console.log(data); // the data will now contain the converted respnse from the server

    showPosts(data);
  });

// [SECTION] form handling
// to add event listener
// CREATE POST
document
  .querySelector("#form-add-post")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // this will prevent refreshin the browser everytime the form is submitted

    // create variables to handle each input in the form
    let titleInput = document.querySelector("#txt-title");
    let bodyInput = document.querySelector("#txt-body");

    //   we can use the '.value' property to access the actual input valie of the input fields.
    //   console.log(titleInput.value);
    //   console.log(bodyInput.value);

    // console.log("The form has been submitted");

    //   there are 4 main types of methods for requests:
    /* 
    1. POST - for creating new data
    2. Get - ONLY for retrieving data
    3. PUT - for updating existing data
    4. DELETE -  for removing/deleting data
*/

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: titleInput.value,
        body: titleInput.value,
        userID: 1,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        alert("Post successfully added!");

        //   clears the input fields after submission
        titleInput.value = null;
        bodyInput.value = null;
      });
  });

// responsible for transferring the data of the post to the edit form's input fields.
const editPost = function (id) {
  let title = document.querySelector(`#post-title-${id}`).innerHTML;
  let body = document.querySelector(`#post-body-${id}`).innerHTML;

  document.querySelector("#txt-edit-id").value = id;
  document.querySelector("#txt-edit-title").value = title;
  document.querySelector("#txt-edit-body").value = body;
  document.querySelector("#btn-submit-update").removeAttribute("disabled");
};

// UPDATE post. this function will run when the edit form is submitted
document
  .querySelector("#form-edit-post")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: document.querySelector("#txt-edit-id").value,
        title: document.querySelector("#txt-edit-title").value,
        body: document.querySelector("#txt-edit-body").value,
        userID: 1,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        alert("Successfully updated.");

        document.querySelector("#txt-edit-id").value = null;
        document.querySelector("#txt-edit-title").value = null;
        document.querySelector("#txt-edit-body").value = null;
        document
          .querySelector("#btn-submit-update")
          .setAttribute("disabled", true);
      });
  });
