
package com.jobtrackerdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  jobtrackerDB.Paper
 *  08/04/2015 04:17:13
 * 
 */
public class Paper {

    private Integer paperId;
    private String paperName;
    private String paperDimension;
    private Integer paperWeight;
    private Set<com.jobtrackerdb.data.Job> jobs = new HashSet<com.jobtrackerdb.data.Job>();

    public Integer getPaperId() {
        return paperId;
    }

    public void setPaperId(Integer paperId) {
        this.paperId = paperId;
    }

    public String getPaperName() {
        return paperName;
    }

    public void setPaperName(String paperName) {
        this.paperName = paperName;
    }

    public String getPaperDimension() {
        return paperDimension;
    }

    public void setPaperDimension(String paperDimension) {
        this.paperDimension = paperDimension;
    }

    public Integer getPaperWeight() {
        return paperWeight;
    }

    public void setPaperWeight(Integer paperWeight) {
        this.paperWeight = paperWeight;
    }

    public Set<com.jobtrackerdb.data.Job> getJobs() {
        return jobs;
    }

    public void setJobs(Set<com.jobtrackerdb.data.Job> jobs) {
        this.jobs = jobs;
    }

}
