import React, { useState, useEffect } from 'react';
import { createUser, updateUser, getUserById } from '../api';
import { useHistory, useParams } from 'react-router-dom';

const UserForm = () => {
    const [user, setUser] = useState({ name: '', email: '', role: '' });
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (id) {
            fetchUser();
        }
    }, [id]);

    const fetchUser = async () => {
        const response = await getUserById(id);
        setUser(response.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateUser(id, user);
        } else {
            await createUser(user);
        }
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                required
            />
            <select
                name="role"
                value={user.role}
                onChange={handleChange}
                required
            >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;
