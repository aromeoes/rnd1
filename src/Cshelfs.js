import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Cbook from './Cbook'
import CatHeader from './CatHeader'

class Cshelfs extends Component{
  constructor(props){
  	super(props);
  	this.state={
  		books: [{imageLinks:['']}]
  	}
  }
  componentDidMount() {
   BooksAPI.getAll().then((books) => this.setState({
     books: books
   }));
 }
 editShelf = (clave,nuevoshelf) => {
  this.setState((currentState)=>({
    books: currentState.books.map((l)=>{
      if (l.id===clave){l.shelf = nuevoshelf}
      return l
    })
  }))
 }
  render(){
    let lastShelf= ''
    const rows = []
    this.state.books.forEach((product) => {
      if (lastShelf !== product.shelf) {
        rows.push(<CatHeader shelfcat = {product.shelf} key={product.shelf} />)
      }
      rows.push(<Cbook shelf={product.shelf} libro={product} key={product.title} editShelf={this.editShelf} />)
      lastShelf = product.shelf
    })
  	return(
  		<div>
  			{rows}
  		</div>
  		)
  }
}

export default Cshelfs;
