import React, { Component } from 'react'
import Cselector from './Cselector'
class Cbook extends Component{
	
  render(){
  	let shelf = 'none'
  	if(this.props.shelf){
  		shelf = this.props.shelf
  	}
  	let thumb = ''
  	if(this.props.libro.imageLinks){
  		thumb = this.props.libro.imageLinks.thumbnail
  	}
  	return(
	  	<li >
	      <div className="book">
	        <div className="book-top">
	          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumb}")` }}></div>
	          <Cselector key={"Cselector"+this.props.libro.id} inicial={shelf} id={this.props.libro.id} editShelf={this.props.editShelf} />
	        </div>
	        <div className="book-title">{this.props.libro.title}</div>
	        <div className="book-authors">{this.props.libro.authors}</div>
	      </div>
	    </li>)
  }
}

export default Cbook;
