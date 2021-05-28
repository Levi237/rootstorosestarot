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
        const { } = this.props
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
    z-index: 9000000;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
        background-color: #fff;
        padding: 40px 60px 60px;
        text-align: right;
        min-width: 240px;
    }
`;