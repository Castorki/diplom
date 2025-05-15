import React from 'react';
import { useSelector } from 'react-redux';
import { Unauthorized } from './Unauthorized';
import { Authorized } from './Authorized';
import Strenghts from '../../strenghts/Strengths';

const Profile = () => {
    const { isAuthenticated } = useSelector(state => state.auth);

    if (!isAuthenticated) {
        return (
            <>
                <Unauthorized />
                <Strenghts />
            </>
        );
    }

    return (
        <>
            <Authorized />
            <Strenghts />
        </>
    );
};

export default Profile;