import React from 'react';
import unsplash from  '../api/unsplash';
require('./AllComp.css');
class Home extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        queryTerm : '',
        images : []
    };
    handleChange = (event) => { this.setState({queryTerm : event.target.value});};

    handleSubmit = async () => {
        const  response = await unsplash.get('/search/photos', {
            params: {query: this.state.queryTerm},
        });
        console.log(response.data.results);
        this.setState({images : response.data.results});
        console.log(this.state.images);
    };
    render() {
        let imagesFetched = '';
        if(this.state.images.length > 0){
            let images = this.state.images;
            imagesFetched = (images.map( im => {return (
                <img src={im.urls.small} alt='Alt Image'/>
            );}))
        }
        return(
            <div className='app-container'>
                <input type='text' onChange={this.handleChange} id='query-term'/>
                <div id='submit' onClick={this.handleSubmit}>Click!</div>
                {imagesFetched}
            </div>
        );
    }
}
export default Home;