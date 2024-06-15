import React from 'react';
import { useContext } from 'react';

import { JobsContext } from '../../contexts/jobs.context';
import { MembersContext } from '../../contexts/members.context';


const Jobs = () => {
    const { jobs } = useContext(JobsContext);
    const { members } = useContext(MembersContext);
    console.log(jobs);
    return (
        <div>
            <h1>Jobs Page</h1>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>{job.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Jobs;