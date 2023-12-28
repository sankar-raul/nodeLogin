const body = document.body;
const parent = document.createElement('span');
parent.innerHTML = `<div class="title-bar">
        <nav class="dashboard-nav">
       <i class="fas fa-regular fa-bars slide-bar-button"></i>
               <div class="items">
            <div class="item profile-tab">
                    <img class="profile-img" src="https://i.postimg.cc/XYSJmSBn/channels4-profile.jpg" alt="profile pic" />
                <p class="name">
   <% if (user.name) { %>
        <%= user.name %>
   <% } else { %>
       Sankar
   <% } %>
</p>
            </div>
            <a class="item" href="#">HOME</a>
            <a class="item" href="#">item</a>
            <a class="item" href="#">item</a>
            <a class="item" href="#">item</a>
            <a class="item" href="#">item</a>
        </div>
      <p class="title">Home</p>
      </nav>
      <div class="auth-container">
      <div class="users-auth">
        <button class="hide"></button>
        <button class="bt2"style="border-radius:10px" onclick="goto('/users/logout')">Logout</button>
        </div>
        </div>
        </div>`;
body.prepend(parent);
alert("Working!");
