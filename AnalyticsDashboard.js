import React, { useEffect, useState } from 'react';

const AnalyticsDashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Use enhanced dummy data for testing
        const dummyData = [
            { id: 1, name: 'User A', email: 'usera@example.com', value: 30, date: '2024-09-25', status: 'active' },
            { id: 2, name: 'User B', email: 'userb@example.com', value: 50, date: '2024-09-24', status: 'inactive' },
            { id: 3, name: 'User C', email: 'userc@example.com', value: 20, date: '2024-09-23', status: 'active' },
            { id: 4, name: 'User D', email: 'userd@example.com', value: 10, date: '2024-09-22', status: 'inactive' },
            { id: 5, name: 'User E', email: 'usere@example.com', value: 45, date: '2024-09-21', status: 'active' },
            { id: 6, name: 'User F', email: 'userf@example.com', value: 15, date: '2024-09-20', status: 'active' },
        ];
        
        setData(dummyData);
    }, []);

    return (
        <div>
            <h1>Analytics Dashboard</h1>
            {data.length === 0 ? (
                <p>No data available</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Value</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.value}</td>
                                <td>{item.date}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AnalyticsDashboard;
