
package com.jobtrackerdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  jobtrackerDB.Employee
 *  08/04/2015 04:17:13
 * 
 */
public class Employee {

    private Integer employeeId;
    private String employeeFname;
    private String employeeLname;
    private Integer employeePhone;
    private String employeeAddress;
    private Set<com.jobtrackerdb.data.Job> jobs = new HashSet<com.jobtrackerdb.data.Job>();

    public Integer getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeFname() {
        return employeeFname;
    }

    public void setEmployeeFname(String employeeFname) {
        this.employeeFname = employeeFname;
    }

    public String getEmployeeLname() {
        return employeeLname;
    }

    public void setEmployeeLname(String employeeLname) {
        this.employeeLname = employeeLname;
    }

    public Integer getEmployeePhone() {
        return employeePhone;
    }

    public void setEmployeePhone(Integer employeePhone) {
        this.employeePhone = employeePhone;
    }

    public String getEmployeeAddress() {
        return employeeAddress;
    }

    public void setEmployeeAddress(String employeeAddress) {
        this.employeeAddress = employeeAddress;
    }

    public Set<com.jobtrackerdb.data.Job> getJobs() {
        return jobs;
    }

    public void setJobs(Set<com.jobtrackerdb.data.Job> jobs) {
        this.jobs = jobs;
    }

}
