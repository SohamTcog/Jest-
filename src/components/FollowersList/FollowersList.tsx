import React, { useEffect, useState } from 'react';
import "./FollowersList.css";
import axios from "axios";
import { Link } from 'react-router-dom';
//npm install axios @types/axios
//npm install react-router-dom @types/react-router-dom

interface Follower {
    picture: {
        large: string;
    };
    name: {
        first: string;
        last: string;
    };
    login: {
        username: string;
    };
}

const FollowersList: React.FC = () => {
    const [followers, setFollowers] = useState<Follower[]>([]);

    useEffect(() => {
        const fetchFollowers = async () => {
            try {
                const { data } = await axios.get("https://randomuser.me/api/?results=5");
                setFollowers(data.results);
            } catch (error) {
                console.error("Error fetching followers:", error);
            }
        };

        fetchFollowers();
    }, []);

    return (
        <div className="followerslist-container">
            <div>
                {followers.map((follower, index) => (
                    <div className="follower-item" data-testid={`follower-item-${index}`} key={index}>
                        <img src={follower.picture.large} alt={`Follower ${index + 1}`} />
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    );
};

export default FollowersList;
