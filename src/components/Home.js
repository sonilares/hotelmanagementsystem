import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends  Component{
    render(){
        return(
            <div>
                
 {/* <!-- //header -->
// <!-- banner --> */}
<div class="banner_w3lspvt" id="home">
	<div class="csslider infinity" id="slider1">
		<input type="radio" name="slides" checked="checked" id="slides_1"/>
		<input type="radio" name="slides" id="slides_2"/>
		<input type="radio" name="slides" id="slides_3"/>
		<input type="radio" name="slides" id="slides_4"/>

		<ul class="banner_slide_bg">
			<li>
				<div class="slider-info bg1">
					<div class="bs-slider-overlay">
						<div class="banner-text">
							<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Hotel Prishtina</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
								
								<Link to='/contact' class="btn">Contact us</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg2">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
								<h4 class="movetxt agile-title text-capitalize">All you need in one place</h4>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
								<Link to='/contact' class="btn">Contact us</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg3">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
							<h2 class="movetxt agile-title text-capitalize">We take care of your needs</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
							<Link to='/contact' class="btn">Contact us</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg4">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
								<h4 class="movetxt agile-title text-capitalize">With the best services</h4>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
								<Link to='/contact' class="btn">Contact us</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="navigation"> 
			<div>
			  <label for="slides_1"></label>
			  <label for="slides_2"></label>
			  <label for="slides_3"></label>
			  <label for="slides_4"></label>
			</div>
		</div>
	</div>
</div>
{/* <!-- //banner -->
//  <!-- banner bottom grids --> */}
    <section class="content-info py-5" id="about">
        <div class="container py-md-5">
		<h3 class="heading text-center mb-3 mb-sm-5">About us</h3>

            <div class="info-w3pvt-mid text-center px-lg-5">

                <div class="title-desc text-center px-lg-5">
					<img src="assets/images/hotel8.jpg
					" alt="news image" class="img-fluid" />
                    <p class="px-lg-5">Praesent ullamcorper dui turpis.At vero eos et accusam et justo duo dolores et ea rebum.Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.
                        Praesent ullamcorper dui turpis.At vero eos et accusam et justo duo dolores et ea rebum.Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                    
					<Link to="/services" class="btn mt-lg-4 mt-3 read scroll" role="button">Learn More</Link>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //banner bottom grids -->

//  <!-- /services --> */}
    <section class="services py-5" id="services">
        <div class="container py-md-5">
		<h3 class="heading text-center mb-3 mb-sm-5">Services</h3>
            <div class="row ab-info">
                <div class="col-md-6 ab-content ab-content1">
                    <div class="ab-content-inner">
                        <Link to="/single"><img src="assets/images/hotel6.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Breakfast</h4>
							<Link to="/single" class="read-more two btn m-0 px-3" role="button"><span class="fa fa-arrow-circle-o-right"> </span></Link>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ab-content ab-content1">
                    <div class="ab-content-inner">
					<Link to="/single"><img src="assets/images/hotel1.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Room Service</h4>
                            <a href="single.html" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ab-info second mt-lg-4">
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/single"><img src="assets/images/hotel15.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Parking</h4>
                            <a href="single.html" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/single"><img src="assets/images/hotel14.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Gym</h4>
                            <a href="single.html" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/single"><img src="assets/images/hotel12.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>24/7 reception</h4>
                            <a href="single.html" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/single"><img src="assets/images/hotel11.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Bag Service</h4>
                            <a href="single.html" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
    {/* // <!-- /services -->
 
//   <!--/book-now--> */}
    <section class="order-sec py-5">
        <div class="container py-md-5">
            <div class="test-info text-center">
                <h3 class="tittle order">
                    <span>Treat yourself right</span></h3>
                <h4 class="tittle my-2">Book a room now!</h4>

                <div class="read-more mx-auto m-0 text-center">
					<Link to="/contact" class="read-more scroll btn">Click here</Link> 
				</div>
            </div>
        </div>
    </section>
//     {/* <!--//order-now-->

//  <!--/testimonials--> */}
    <section class="testimonials py-5" id="testimonials">
        <div class="container py-md-5">
               <h3 class="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
            <div class="row mt-3">

                <div class="col-md-4 test-grid text-left px-lg-3">
                    <div class="test-info">

                        <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                        <h3 class="mt-md-4 mt-3"> Abraham Smith</h3>

                        <div class="test-img text-center mb-3">
                            <img src="assets/images/pp1.jpg" class="img-fluid" alt="user-image" />
                        </div>
                        <div class="mobl-footer test-soc text-center">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#">
							<span class="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li class="mx-1">
                                    <a href="#">
							<span class="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                    <div class="test-info">

                        <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                        <h3 class="mt-md-4 mt-3"> Mariana Noe</h3>
                        <div class="test-img text-center mb-3">
                            <img src="assets/images/pp2.jpg" class="img-fluid" alt="user-image" />
                        </div>
                        <div class="mobl-footer test-soc text-center">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#">
							<span class="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li class="mx-1">
                                    <a href="#">
							<span class="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 test-grid text-left px-lg-3">
                    <div class="test-info">

                        <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                        <h3 class="mt-md-4 mt-3">Nebula Nairobi</h3>

                        <div class="test-img text-center mb-3">
                            <img src="assets/images/pp3.jpg" class="img-fluid" alt="user-image" />
                        </div>
                        <div class="mobl-footer test-soc text-center">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#">
							<span class="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li class="mx-1">
                                    <a href="#">
							<span class="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>

// {/* <!--//testimonials-->
// <!-- subscribe --> */}
<section class="subscribe" id="subscribe">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
				<div class="news-icon mr-3">
					<span class="fa fa-paper-plane" aria-hidden="true"></span>
				</div>
				<div class="text">
					<h3>Subscribe To Our Newsletter</h3>
				</div>
			</div>
			<div class="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
				<form action="#" method="post">
					<input type="email" name="email" placeholder="Enter your email here" required="" />
					<button class="btn1"><span class="fa fa-paper-plane" aria-hidden="true"></span></button>
				</form>
				<p>we never share your email with anyone else</p>
			</div>
		</div>
	</div>
</section>
{/* <!-- //subscribe -->
// <!-- footer --> */}
    
    </div>
        )
    }
}
export default Home