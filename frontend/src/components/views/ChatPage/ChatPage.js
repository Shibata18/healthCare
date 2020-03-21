import React,{Component} from 'react';
import { Form,Input,Button,Row,Col} from 'antd'
import io from 'socket.io-client';
import { connect } from 'react-redux';


export class ChatPage extends Component{
    state={
        chatMessage:"",
    }
    componentDidMount(){
        let server = 'http://localhost:5000';
        this.socket = io(server);
        this.socket.on('out',back=>{
            console.log(back);
            
        })
    }
    handleSearchChange = (e)=>{
        this.setState({
            chatMessage:e.target.value
        })
    }
    submitChatMessage = (e) =>{
        e.preventDefault();
        let chatMessage = this.state.chatMessage;
        let userId = this.props.user.userData._id
        let userName = this.props.user.UserData.name;
        let userImage = this.props.user.UserData.image;
        let type = "Image"

        this.socket.emit("mensagem",{
            chatMessage,
            userId,
            userName,
            userImage,
            type,
        });
        this.setState({chatMessage:""})
    }
    render(){
        return (
            <React.Fragment>
                <div>
                    <p style={{fontSize:'1em' , textAlign:'center'}}>Chat</p>
                </div>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="infinite-container">
                        {/* {this.props.chats && (
                            <div>{this.renderCards()}</div>
                        )} */}
                        <div
                            ref={el => {
                                this.messagesEnd = el;
                            }}
                            style={{ float: "left", clear: "both" }}
                        />
                    </div>

                    <Row >
                        <Form layout="inline"  onSubmit={this.submitChatMessage}>
                            <Col span={18}>
                                <Input
                                    id="message"
                                    placeholder="Let's start talking"
                                    type="text"
                                    value={this.state.chatMessage}
                                   onChange={this.hanleSearchChange}
                                />
                                /}
                            </Col>
                            <Col span={2}>
                                
                            </Col>

                            <Col span={4}>
                                <Button type="primary" style={{ width: '100%' }} onClick={this.submitChatMessage} htmlType="submit">
                                </Button>
                            </Col>
                        </Form>
                            </Row>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state =>{
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(ChatPage);