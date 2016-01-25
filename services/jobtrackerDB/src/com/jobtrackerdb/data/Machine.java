
package com.jobtrackerdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  jobtrackerDB.Machine
 *  08/04/2015 04:17:13
 * 
 */
public class Machine {

    private String machineId;
    private String machineName;
    private Integer startCount;
    private Integer endCount;
    private Float hoursRun;
    private String issue;
    private Set<com.jobtrackerdb.data.Job> jobs = new HashSet<com.jobtrackerdb.data.Job>();

    public String getMachineId() {
        return machineId;
    }

    public void setMachineId(String machineId) {
        this.machineId = machineId;
    }

    public String getMachineName() {
        return machineName;
    }

    public void setMachineName(String machineName) {
        this.machineName = machineName;
    }

    public Integer getStartCount() {
        return startCount;
    }

    public void setStartCount(Integer startCount) {
        this.startCount = startCount;
    }

    public Integer getEndCount() {
        return endCount;
    }

    public void setEndCount(Integer endCount) {
        this.endCount = endCount;
    }

    public Float getHoursRun() {
        return hoursRun;
    }

    public void setHoursRun(Float hoursRun) {
        this.hoursRun = hoursRun;
    }

    public String getIssue() {
        return issue;
    }

    public void setIssue(String issue) {
        this.issue = issue;
    }

    public Set<com.jobtrackerdb.data.Job> getJobs() {
        return jobs;
    }

    public void setJobs(Set<com.jobtrackerdb.data.Job> jobs) {
        this.jobs = jobs;
    }

}
