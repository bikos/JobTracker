
package com.jobtrackerdb.data;

import java.util.Date;


/**
 *  jobtrackerDB.Job
 *  08/04/2015 04:17:13
 * 
 */
public class Job {

    private Integer jobId;
    private JobType jobType;
    private Machine machine;
    private Paper paper;
    private Employee employee;
    private Integer jobNumber;
    private Integer jobSections;
    private Date jobCompletedTime;
    private String status;
    private Integer pages;
    private Integer jobWeek;
    private Integer cartNumber;
    private String jobName;

    public Integer getJobId() {
        return jobId;
    }

    public void setJobId(Integer jobId) {
        this.jobId = jobId;
    }

    public JobType getJobType() {
        return jobType;
    }

    public void setJobType(JobType jobType) {
        this.jobType = jobType;
    }

    public Machine getMachine() {
        return machine;
    }

    public void setMachine(Machine machine) {
        this.machine = machine;
    }

    public Paper getPaper() {
        return paper;
    }

    public void setPaper(Paper paper) {
        this.paper = paper;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Integer getJobNumber() {
        return jobNumber;
    }

    public void setJobNumber(Integer jobNumber) {
        this.jobNumber = jobNumber;
    }

    public Integer getJobSections() {
        return jobSections;
    }

    public void setJobSections(Integer jobSections) {
        this.jobSections = jobSections;
    }

    public Date getJobCompletedTime() {
        return jobCompletedTime;
    }

    public void setJobCompletedTime(Date jobCompletedTime) {
        this.jobCompletedTime = jobCompletedTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getPages() {
        return pages;
    }

    public void setPages(Integer pages) {
        this.pages = pages;
    }

    public Integer getJobWeek() {
        return jobWeek;
    }

    public void setJobWeek(Integer jobWeek) {
        this.jobWeek = jobWeek;
    }

    public Integer getCartNumber() {
        return cartNumber;
    }

    public void setCartNumber(Integer cartNumber) {
        this.cartNumber = cartNumber;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

}
