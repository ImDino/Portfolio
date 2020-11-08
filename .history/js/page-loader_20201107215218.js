document.getElementsByTagName('body')[0].innerHTML =`
  <div id="loader"></div>
  <nav id='navbar'class="navbar navbar-expand-lg navbar-dark bg-light">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <a class="navbar-brand" id='language' href="#">Svenska</a>
    <button id='nav-button'class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>    
      <img src='/img/hamburger-menu-1.png' id='page-1-nav' class='page-nav' alt="">
      <img src='/img/hamburger-menu-2.png' id='page-2-nav' class='page-nav' alt="">
      <img src='/img/hamburger-menu-3.png' id='page-3-nav' class='page-nav' alt="">
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a id='home-btn' class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a id='projects-btn' class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a id='about-btn' class="nav-link" href="#">About me</a>
        </li>
        <li class="nav-item">
          <a id='contact-btn' class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    </nav>
    <div id='home-page'>
        <div id='home-text'>
            <h1>Dino Pacariz</h1>
            <h3 id='landingPage'>I'm a Full Stack Web-developer</h3>
          </div>
          <div id='face'>
          </div>
    </div>
    <div id='pseudo-div'></div>
    <div class="mouse">
      <div class="mouse-icon">
        <span class="mouse-wheel"></span>
      </div>
    </div>
    <div id='projects-page' class='teaser teaser--animated page1'>
      <div id='header-parent'>
        <div class='main-tool-bar'><h1>Projects</h1></div>
      </div>
      <div class='project'>
        <h3 class='header'>API Quiz</h3>
        <div class='image-wrap'>
          <img src="img/apiquiz.png" alt="">
        </div>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti consequuntur officia vitae quos, autem quas aspernatur voluptate rerum ipsa dolorem doloribus delectus reprehenderit porro dolores? Dolorem nesciunt aspernatur at?</span>
        <a href="#"><span>try it here</span></a>
      </div>
      <span id='more-coming-soon'>More coming soon...</span>
    </div>
    <div id='about-page'>
      <div id='header-parent'>
        <div class='main-tool-bar'>
          <h1>About Me</h1>
        </div>
      </div>
      <div>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur vitae tenetur obcaecati quasi assumenda eius autem id, accusantium Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur vitae tenetur obcaecati quasi assumenda eius autem id, accusantium esse exercitationem labore dolor ipsa error dignissimos. Ullam reiciendis veritatis id perferendis!
        </span>
      </div>
    </div>
    <div id='contact-page'>
      <div id='header-parent'>
        <div class='main-tool-bar'>
          <h1>Contact</h1>
        </div>
      </div>
      <div>
        <a href="mailto:dinopacariz@gmail.com">dinopacariz@gmail.com</a>
        <p>Or</p>
        <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="dino-pacariz-20a847135"><a class="LI-simple-link" href='https://se.linkedin.com/in/dino-pacariz-20a847135?trk=profile-badge'>Dino Pacariz</a></div>
      </div>
</div>`