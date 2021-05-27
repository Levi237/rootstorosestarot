import React, { Component } from 'react'
import styled from 'styled-components';

export default class Model extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    render(){
        if (!this.props.show){
            return null;
        }
        
        return(
            <ModalWrapper className="modal">
                <div>
                    <button className="close xClose" onClick={(e) => {this.onClose(e)}}>
                        X
                    </button>

                    {this.props.children}
                    
                </div>
            </ModalWrapper>
        )
    }
}

const ModalWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
        background-color: #fff;
        padding: 5% 10%;
    }
`;