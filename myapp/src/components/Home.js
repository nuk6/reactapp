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
    };
    render() {
        return(
            <div className='app-container'>
                <input type='text' onChange={this.handleChange} id='query-term'/>
                <div id='submit' onClick={this.handleSubmit}>Click!</div>
            </div>
        );
    }
}
export default Home;