import React from 'react';

const ShowsForm = (props) => {
    return (
        <form onSubmit={props.getShow}>
            <input style={{ margin :"20px auto", display:"block"}} type="text" name="search" placeholder="Enter Show Name"/>
            <button type="submit">Search</button>
        </form>
    );
}
export default ShowsForm;