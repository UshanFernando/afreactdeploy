import React, { Component } from 'react';
import StarSeries from '../SingleProduct/StarSeries';

class CommentView extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            name: "",
            message:"",
            edit:"disabled",
            rating:0,
            avg:0.0,
            oneStars:0,
            twoStars:0,
            threeStars:0,
            fourStars:0,
            fiveStars:0,
            edit:false,
            comments:[]
        };
        //this.handleChange = this.handleChange.bind(this);
        this.loadComments = this.loadComments.bind(this);
        
      }
      async componentDidMount() {
        this.loadComments();
      }
    async loadComments() {
        try {
          const res = await fetch("http://localhost:5000/comment/comments");
          const data = await res.json();
          
          //updateing state with lastest data
          this.setState({
            comments: data,
          });
          console.log(this.state.comments);
        } catch (e) {
          //if failed to communicate with api this code block will run
          console.log(e);
        }

        if (this.state.comments != null) {
            let one=0,two=0,three=0,four=0,five=0,average=0.0;
            this.state.comments.map((comment) => {
                if(comment.rating==1){
                    one++;
                }else if (comment.rating==2){
                    two++;
                }else if(comment.rating==3){
                    three++;
                }else if(comment.rating==4){
                    four++;
                }else{
                    five++;
                }
            
             average=(1*one+2*two+3*three+4*four+5*five)/(one+two+three+four+five);
            
            })
            this.setState({
                oneStars:one,
                twoStars:two,
                threeStars:three,
                fourStars:four,
                fiveStars:five,
                avg:average.toFixed(1) 
            });
        }


      }
      editComment(index){
        console.log(this.state.comments[index].name);
      }
      handleChange(index,event) {
        const val=event.target.value;
        const items = this.state.comments;
        items.map(item => {
        if (item._id === index) {
        item.message = val;
      }
      this.setState({
        comments: items
      })
    })
        
       
       
      }
      
    render() {
        let commentList=null;
        const user = require('../img/User/USER.png');
        
        if (this.state.comments != null) {
            commentList = this.state.comments.map((comment,index) => {
                return (<div className="review_item" key={index}>
                <div className="media">
                    <div className="d-flex">
                        <img id="userImg" src={user} alt="aa" />
                    </div>
                    
                    <div className="media-body">
                    
                        <h4>{comment.name}</h4>
                        <StarSeries  count={comment.rating}/>
                       
                    </div>
                    <span id="editDeleteIcons" onClick={()=>this.editComment(index)}><i class="far fa-edit fa-lg"></i>&emsp;<i class="far fa-trash-alt fa-lg"></i>&emsp;</span>
                </div>
                
                <textarea className="form-control different-control w-100" name="message" id="textareaASD" cols="30"onChange={(e)=>this.handleChange(comment._id,e)} placeholder="Enter Message" value={comment.message}  disabled/>
                
            </div>)
            
            })
        }
        
      return (
        <div className="col-lg-6">
						<div className="row total_rate">
							<div className="col-6">
								<div className="box_total">
									<h5>Overall</h5>
									<h4>{this.state.avg}</h4>
									<h6>({this.state.comments.length} Reviews)</h6>
                                    
								</div>
							</div>
							<div className="col-6">
								<div className="rating_list">
									<h3>Based on {this.state.comments.length} Reviews</h3>
									<ul className="list">
										<li><a href>5 Star <StarSeries  count={5}/>{this.state.fiveStars}</a></li>
										<li><a href>4 Star <StarSeries  count={4}/>{this.state.fourStars}</a></li>
										<li><a href>3 Star <StarSeries  count={3}/>{this.state.threeStars}</a></li>
										<li><a href>2 Star <StarSeries  count={2}/>{this.state.twoStars}</a></li>
										<li><a href>1 Star <StarSeries  count={1}/>{this.state.oneStars}</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="review_list">
							{commentList}

						</div>
					</div>
      )
    }
  }
  
  export default CommentView;