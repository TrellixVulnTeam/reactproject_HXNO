import React, {Component, Fragment} from 'react';
import axios from 'axios'
import { getBlogList, deleteBlog, addBlog, getBlog, updateBlog } from '../store/actions/Blog'
import { Provider, connect } from 'react-redux'

class BlogAddForm extends Component {

	constructor(props) {
		super(props);
		this.state ={
			upload:null,
			image:null
		}

		this.onUploadChange = this.onUploadChange.bind(this);
		this.onImageChange = this.onImageChange.bind(this);

	}

	onUploadChange(e) {
		console.log("File: " + e.target.files[0]);
		this.setState({upload: e.target.files[0]})
	  }

	onImageChange(e) {
		console.log("Image: " + e.target.files[0]);
		this.setState({image: e.target.files[0]})
	}


	handleFormSubmit = (e) => {
		e.preventDefault()

		const title = e.target.elements.title.value;
		const description = e.target.elements.description.value;
		const date = e.target.elements.date.value;
		const quantity = e.target.elements.quantity.value;
		const active = e.target.elements.active.checked;
		const upload = this.state.upload;
		const image = this.state.image;

		const data = new FormData();
		data.append('title', title);
		data.append('description', description);
		data.append('date', date);
		data.append('quantity', quantity);
		data.append('active', active);
		
		console.log('File: ' + upload);
		if (upload)
			data.append('upload',  upload);
		
			console.log('image: ' + image);
		if (image)
			data.append('image', image);

		data.append('user',this.props.user);

		this.props.addBlog(data)

	}




	render() {

		return (
				<div className="container">

					<br />
						<form onSubmit={event => this.handleFormSubmit(event)} encType="multipart/form-data">

							<input type="text" name="title" placeholder="title" />
							<br />

							<input type="text" name="description" placeholder="description" />
							<br />

							<input type="date" name="date" placeholder="" />
							<br />

							<input type="number" name="quantity" placeholder="quantity" />
							<br />

							<input type="checkbox" name="active" placeholder="" />
							<br />

							<span>File: </span><input type="file" name="upload" onChange={this.onUploadChange} />
							<br />

							<span>Image: </span><input type="file" name="image" accept=".gif,.jpg,.jpeg,.png" onChange={this.onImageChange}/>
							<br />

							<button type="submit">Add me</button>

						</form>
					<br />

				</div>
		)
	}
}


// for properties
const mapStateToProps = state => {
	return {
		// isAuthenticated: state.auth.token !== null,
		// token: state.auth.token,
		blog: state.blogs.blog,
		user: state.auth.user,

	}
}



const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState()),
    getBlog: (id) => dispatch(getBlog(id)),
    addBlog: (data) => dispatch(addBlog(data)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BlogAddForm)



