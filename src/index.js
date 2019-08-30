import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import App from './components/App';

/*
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author ="jack" 
                    timeAgo="Today at 7:45PM"
                    content="Nice One"
                    image = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author ="gyl" 
                    timeAgo="Today at 7:35PM"
                    content="Nice Once Again"
                    image = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author ="jones" 
                    timeAgo="Today at 7:25PM"
                    content="Nice Always"
                    image = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author ="louis" 
                    timeAgo="Today at 7:15PM"
                    content="Nice Forever"
                    image = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};
*/


// Second Tutorial
// class App extends React.Component{
//     /*constructor(props){
//         super(props);
//         this.state = {lat:null,errorMessage:''};
//         window.navigator.geolocation.getCurrentPosition(
//             position => {
//                 this.setState({lat : position.coords.latitude});
//             },
//             err => {this.setState({errorMessage:err.message})}
//         )
//     }*/
//     state = {lat:null,errorMessage:''};
//     componentDidMount(){
//         window.navigator.geolocation.getCurrentPosition(
//             position => this.setState({lat : position.coords.latitude}),
//             err => this.setState({errorMessage:err.message})
//         );
//     }
//     renderContent(){
//         if(this.state.errorMessage && !this.state.lat)
//             return <div> Error {this.state.errorMessage} </div>
    
//         if(this.state.lat && !this.state.errorMessage)
//            // return <div> Latitude:{this.state.lat} </div>
//            return <SeasonDisplay lat={this.state.lat} />
//         return <Spinner message="Pease accept location request"/>
//     }
//     render(){
//         return (
//             <div className="border red">
//                 {this.renderContent()} 
//             </div>
//         );
//     }
// }
ReactDOM.render(<App/>,document.querySelector('#root'));

