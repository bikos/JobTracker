
package com.jobtrackerdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  jobtrackerDB.JobType
 *  08/04/2015 04:17:13
 * 
 */
public class JobType {

    private Integer jobTypeId;
    private String jobTypeName;
    private Set<com.jobtrackerdb.data.Job> jobs = new HashSet<com.jobtrackerdb.data.Job>();

    public Integer getJobTypeId() {
        return jobTypeId;
    }

    public void setJobTypeId(Integer jobTypeId) {
        this.jobTypeId = jobTypeId;
    }

    public String getJobTypeName() {
        return jobTypeName;
    }

    public void setJobTypeName(String jobTypeName) {
        this.jobTypeName = jobTypeName;
    }

    public Set<com.jobtrackerdb.data.Job> getJobs() {
        return jobs;
    }

    public void setJobs(Set<com.jobtrackerdb.data.Job> jobs) {
        this.jobs = jobs;
    }

}
