import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return(
            <div>
                {/* <!-- banner --> */}
<section class="inner-page-banner" id="home">
</section>
{/* <!-- //banner -->
<!-- page details --> */}
<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
			<Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">About Us</li>
	</ol>
</div>
{/* <!-- //page details -->
	<!--about-mid --> */}
    <section class="banner-bottom py-5" id="exp">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5">About Us</h3>
            <div class="row mid-grids mt-lg-5 mt-3">
                <div class="col-md-5 content-w3pvt-img">
                    <img src="assets/images/ab1.jpg" alt="" class="img-fluid" />
                </div>
                <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                    <h5 class="mt-1">Since 1999</h5>
                    <p class="mt-2 text-left">Integer pulvinar leo id viverra feugiat.Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel fermentum elit maximus. Curabitur ut turpis massa in condimentum libero. Pellentesque maximus Pellentesque libero justo Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.Curabitur ut turpis massa in condimentum libero.</p>

                </div>


            </div>
            <div class="row mid-grids mt-lg-5 mt-3 py-3">

                <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                    <h5 class="mt-1">A 5 star restaurant</h5>
                    <p class="mt-2 text-left">Integer pulvinar leo id viverra feugiat.Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel fermentum elit maximus. Curabitur ut turpis massa in condimentum libero. Pellentesque maximus Pellentesque libero justo Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.Curabitur ut turpis massa in condimentum libero.</p>

                </div>
                <div class="col-md-5 content-w3pvt-img mt-lg-0 mt-3">
                    <img src="assets/images/ab2.jpg" alt="" class="img-fluid" />
                </div>
            </div>
            <div class="row mid-grids mt-lg-5 mt-3">
                <div class="col-md-5 content-w3pvt-img">
                    <img src="assets/images/ab3.jpg" alt="" class="img-fluid" />
                </div>
                <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                    <h5 class="mt-1">With the best services</h5>
                    <p class="mt-2 text-left">Integer pulvinar leo id viverra feugiat.Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel fermentum elit maximus. Curabitur ut turpis massa in condimentum libero. Pellentesque maximus Pellentesque libero justo Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.Curabitur ut turpis massa in condimentum libero.</p>

                </div>


            </div>
        </div>
    </section>
    {/* <!-- //about-mid -->
<!-- states --> */}
  <section class="stats-count">
  <div class="overlay py-5">
    <div class="container py-md-5">
      <div class="row text-center">
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
          <img src="assets/images/hotel2.jpg" alt=" "/>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
            <img src= "assets/images/hotel6.jpg" alt=" "/>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
        <img src= "assets/images/hotel9.jpg" alt=" "/>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
        <img src= "assets/images/hotel7.jpg" alt=" "/>
        </div>
      </div>
    </div>
	</div>
  </section>
  {/* <!--//states -->

 <!--//team --> */}
    <section class="banner-bottom  py-5">
        <div class="container py-md-5">
			<h3 class="heading text-center mb-3 mb-sm-5">Our Team</h3>
            <div class="row mt-lg-5 mt-4">
                <div class="col-md-4 team-gd text-center">
                    <div class="team-img mb-4">
                        <img src="assets/images/pp4.jpg" class="img-fluid" alt="user-image" />
                    </div>
                    <div class="team-info">
                        <h3 class="mt-md-4 mt-3">Filan Fisteku</h3>
                        <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                        <ul class="list-unstyled team-icons mt-4">
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-facebook-f"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-dribbble"></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="col-md-4 team-gd second text-center my-md-0 my-5">
                    <div class="team-img mb-4">
                        <img src="assets/images/pp5.jpg" class="img-fluid" alt="user-image" />
                    </div>
                    <div class="team-info">
                        <h3 class="mt-md-4 mt-3">Filan Fisteku</h3>
                        <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                        <ul class="list-unstyled team-icons mt-4">
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-facebook-f"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-dribbble"></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="col-md-4 team-gd text-center">
                    <div class="team-img mb-4">
                        <img src="assets/images/pp6.jpg" class="img-fluid" alt="user-image" />
                    </div>
                    <div class="team-info">
                        <h3 class="mt-md-4 mt-3">Filan Fisteku</h3>
                        <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                        <ul class="list-unstyled team-icons mt-4">
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-facebook-f"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-dribbble"></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>

            </div>
	
        )
    }
}
export default About