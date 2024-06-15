import { useContext } from "react";

import { MembersContext } from "../../contexts/members.context";

const Members = () => {
    const { members } = useContext(MembersContext);
    return (
        <div>
            <h1>Members Page</h1>
            <ul>
                {members.map((member) => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Members;