import React,{Component} from 'react';
 class Services extends Component{
     render(){
         return(
            <div>
            <section class="inner-page-banner" id="home">
            </section>
            
            
            
            <div class="breadcrumb-agile">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Booking</li>
                </ol>
            </div>
            
            
            <section class="what-we-do py-5">
                <div class="container py-md-5">
                <h3 class="heading text-center mb-3 mb-sm-5">Booking</h3>
                    <div class="row what-we-do-grid">
                        
                    </div>
                </div>
                <form class="form-group">
            <div id="form">
                <h1 class="text-white text-center">Pick your dates</h1>

                <div id="first-group">

                    <div id="content">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" id="input-group" placeholder="First name"/>
                    </div>

                    <div id="content">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <input type="number" id="input-group" placeholder="Phone number"/>
                    </div>

                    <div id="content">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <input type="text" id="input-group" placeholder="Departure Date"/>
                    </div>

                    <div id="content">
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <select id="input-group">
                            <option value="">No.of guests</option>
                            <option value="">1-5</option>
                            <option value="">6-10</option>
                            <option value="">11-20</option>
                        </select>
                    </div>

                </div>

                <div id="second-group">

                    <div id="content">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" id="input-group" placeholder="Last name"/>
                    </div>

                    <div id="content">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <input type="email" id="input-group" placeholder="Email"/>
                    </div>

                    <div id="content">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <input type="text" id="input-group" placeholder="Arrival Date"/>
                    </div>

                    <div id="content">
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <select id="input-group">
                            <option value="">Room Type</option>
                            <option value="">AC</option>
                            <option value="">Non-AC</option>
                            <option value="">Single Bed</option>
                            <option value="">Double Bed</option>
                        </select>
                    </div>
            
                </div>

                <button type="submit" value="Submit" id="submit-btn">Book Now</button>

            </div>
        </form>
                
            </section>
            
                </div>
         )
     }
 }
 export default Services
