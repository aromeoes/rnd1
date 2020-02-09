import React, { Component } from 'react'
class CatHeader extends Component{
	render(){
		return(
                  <h2 className="bookshelf-title">{this.props.shelfcat}</h2>
				)
	}
}

export default CatHeader
