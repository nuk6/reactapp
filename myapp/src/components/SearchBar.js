import React from 'react';
import unsplash from '../api/unsplash';
import * as constMsg from '../resources/properties/AllCompProperties';
export default class SearchBar extends React.Component{
    state = {
        term : ''
    };
    handleChange = (event) => {
        this.setState({term : event.target.value});
    };
    handleSubmit = async () => {
        const response = await unsplash.get('/search/photos',{
            params : {query : this.state.term}
        });
    };
    render(){
        return(
            <div className='search-bar'>
                <div className='input-div'>
                    <input type='text' className='search-input' onChange={this.handleChange}/>
                </div>
                <div className='submit-button' onClick={this.handleSubmit}>
                    {constMsg.submit_button_text}
                </div>
            </div>
        )
    }
}