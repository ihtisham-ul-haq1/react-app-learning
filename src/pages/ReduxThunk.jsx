import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/userSlice";

export const ReduxThunk = () => {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 Users List</h2>
      <ul>
        {users.map(user => (
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
      </ul>
    </div>
  );
}
