import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Gallery extends Component{
    render(){
        return(
            <div>

<section class="inner-page-banner" id="home">
</section>

<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
        <Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">Gallery</li>
	</ol>
    </div>
    </div>
        )
    }
}
export default Gallery