import React from 'react';
import { connect } from 'react-redux'

function UserAccount() {
    return (
        <>Account</>
    )
}

export default connect(state => ({
    user: state.auth.user
}))(UserAccount);