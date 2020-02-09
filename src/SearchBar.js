import React, { Component } from 'react'
import Cbook from './Cbook'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state={
			query: '',
			results:'nada',
			books: [{imageLinks:['']}]
		}
	}
	componentDidMount() {
	  BooksAPI.getAll().then((books) => this.setState({
	    books: books
	  }));
	}
	handleInputChange(event){
		const newstring = event.target.value
		this.setState((currentState)=>{return{query:newstring}})

		BooksAPI.search(newstring).then((results)=>
			this.setState((currentState)=>{return {
			results:results
			}})
		)
	}
	editShelf = (uno,dos) => {
		console.log('edit en search')
	}
	render(){
		const rows=[]
		if('nada'!==this.state.results && undefined !== this.state.results && this.state.results.length){
			this.state.results.forEach((product)=>{
			let shelf = this.state.books.filter(book => book.id === product.id)
			if (shelf.length===1){
			  shelf =shelf[0]['shelf']	
			}else{
			  shelf = 'none'
			}
			console.log(shelf)
			rows.push(<Cbook shelf={shelf} libro={product} key={product.title} editShelf={this.editShelf} />)
		})
		}
		return(
				<div className="search-books">
				    <div className="search-books-bar">
				        <Link to='/'>
				        <button className="close-search">Close</button>
				        </Link>
				        <div className="search-books-input-wrapper">
				            <div>
				                <input onChange={(e)=> this.handleInputChange(e)} type="text" value={this.state.query} placeholder="Search by title or author"/>
				                
				            </div>

				        </div>
				    </div>
				    <div className="search-books-results">
				        <ol className="books-grid">{rows}</ol>
				    </div>
				</div>
			)
	}
}

export default SearchBar