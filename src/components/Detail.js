import React from "react";
import "./detail.css"

class Detail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render () {
        const {location} = this.props;
        if (location.state){
            return (
                <div  className="detail__container">
            <span>{location.state.summary}</span>
            </div>
            );
        } else {
            return null;
        }
        
    }
}

export default Detail;