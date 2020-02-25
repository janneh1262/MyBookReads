
// Not Imported for use in App entry point please ignore
import React from 'react'

class backbutton extends React.Component {

    render() {
        return (


            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>


        );
    }

}

export default backbutton