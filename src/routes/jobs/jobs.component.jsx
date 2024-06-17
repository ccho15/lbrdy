import React from 'react';
import { useContext } from 'react';

import { JobsContext } from '../../contexts/jobs.context';
import CollapsibleTable from '../../components/jobs-list/jobs-list.component';


const Jobs = () => {
    const { jobs } = useContext(JobsContext);
    console.log(jobs);
    return (
        <div>
            <h1>Jobs Page</h1>
            <CollapsibleTable />
        </div>
    );
};

export default Jobs;