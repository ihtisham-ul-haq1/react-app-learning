import React from 'react';
import { useQuery } from '@tanstack/react-query';

export const ReactQueryPage = () => {

        // Step 1: useQuery hook for fetching data
        const {data, isLoading, isError, error, refetch} = useQuery({
            queryKey: ['users'], // unique cache key
            queryFn: async () => {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) {
                    throw new Error('Failed to fetch users');
                }
                return res.json();
            },

        });



  // Step 2: Handle loading and error states
  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {error.message}</p>;
    return (
        <div className="container mt-4">
            <h2 className="mb-4">User List</h2>
            <button className="btn btn-primary mb-4" onClick={() => refetch()}>
                🔄 Refresh Data
            </button>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
            {data.map(user => (
                    <div key={user.id} className="col">
                        <div className="card h-100 shadow-sm mb-3">
                        <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                                <p className="card-text">
                                    <small>
                                        <strong>Company:</strong> {user.company.name}<br/>
                                        <strong>Website:</strong> {user.website}<br/>
                                        <strong>Phone:</strong> {user.phone}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
}