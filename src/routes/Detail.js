import React from 'react';
import '../Style/Detail.css';

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
            return (
                <div className="center">
                    <section className="detail_box">
                        <img src={location.states.poster} alt={location.states.title} title={location.states.title}></img> <br/>
                        <span><h3>{location.states.title}</h3></span>
                        <span><h5>{location.states.year}</h5></span>    
                        <span><h5>{location.states.genres}</h5></span>    
                        <span><h5>{location.states.summary}</h5></span>    
                    </section>
                </div>
                );
        } else{
            return null;
        }

    }
}


export default Detail;