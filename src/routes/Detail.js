import React from 'react';

/*
function Detail({location}){
    console.log(location);
    return <div>
        <img src=""></img>

    </div>;
}
*/

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.states === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.states){
            return <span>{location.states.title}</span>;
        } else{
            return null;
        }

    }
}


export default Detail;