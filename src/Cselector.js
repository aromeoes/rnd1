import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
class Cselector extends Component{
	handleMove(clave,nueva){
			BooksAPI.update({id:clave},nueva.target.value)
			this.props.editShelf(clave,nueva.target.value)
		}

	render(){
		return(
			<div className="book-shelf-changer">
	            <select value={this.props.inicial} onChange={(e) => this.handleMove(this.props.id,e)}>
	              <option value="move" disabled>Move to...</option>
	              <option value="currentlyReading">Currently Reading</option>
	              <option value="wantToRead">Want to Read</option>
	              <option value="read">Read</option>
	              <option value="none">None</option>
	            </select>
	         </div>
			)
	}
}

export default Cselector