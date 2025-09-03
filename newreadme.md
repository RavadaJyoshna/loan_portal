package loanorigination.loanApplication.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "loan_application")
public class PersonalLoan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "application_id", nullable = false)
    private String applicationId;

    @Column(name = "amount_required")
    private BigDecimal amountRequired;
    @Temporal(TemporalType.DATE)
    private Date date;

    private String status;
    private String fullName;
    private String gender;

    @Temporal(TemporalType.DATE)
    private Date dob;

    private Integer age;
    private String phone;
    private String email;
    private String maritalStatus;
    private String address;
    private String aadharNo;
    private String panNo;
    private String city;
    private String state;
    private String pincode;

    private String residenceType;
    private String refName;
    private String refRelation;
    private String refContact;
    private String refAddress;

    private String occupation;
    private String employer;
    private String designation;

    @Temporal(TemporalType.DATE)
    private Date employmentStartDate;

    private BigDecimal salary;
    private BigDecimal otherIncome;
    private Integer workExperience;
    private String officeAddress;
    private Integer totalworkExperience;

    private Integer tenure;
    private String loanPurpose;
    private String loanNature;
    private String loanUsage;
    private String guarantor;

    private String existingEmis;
    private String exitingLoanDetails;

    private String photoPath;
    private String identityProofPath;
    private String salaryProofPath;
    private String addressProofPath;

    private String comment;
    private String action;

    // Getters and Setters for all fields

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getApplicationId() { return applicationId; }
    public void setApplicationId(String applicationId) { this.applicationId = applicationId; }
    public BigDecimal getAmountRequired() { return amountRequired; }
    public void setAmountRequired(BigDecimal amountRequired) { this.amountRequired = amountRequired; }
    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
    public Date getDob() { return dob; }
    public void setDob(Date dob) { this.dob = dob; }
    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getMaritalStatus() { return maritalStatus; }
    public void setMaritalStatus(String maritalStatus) { this.maritalStatus = maritalStatus; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public String getAadharNo() { return aadharNo; }
    public void setAadharNo(String aadharNo) { this.aadharNo = aadharNo; }
    public String getPanNo() { return panNo; }
    public void setPanNo(String panNo) { this.panNo = panNo; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getState() { return state; }
    public void setState(String state) { this.state = state; }
    public String getPincode() { return pincode; }
    public void setPincode(String pincode) { this.pincode = pincode; }
    public String getResidenceType() { return residenceType; }
    public void setResidenceType(String residenceType) { this.residenceType = residenceType; }
    public String getRefName() { return refName; }
    public void setRefName(String refName) { this.refName = refName; }
    public String getRefRelation() { return refRelation; }
    public void setRefRelation(String refRelation) { this.refRelation = refRelation; }
    public String getRefContact() { return refContact; }
    public void setRefContact(String refContact) { this.refContact = refContact; }
    public String getRefAddress() { return refAddress; }
    public void setRefAddress(String refAddress) { this.refAddress = refAddress; }
    public String getOccupation() { return occupation; }
    public void setOccupation(String occupation) { this.occupation = occupation; }
    public String getEmployer() { return employer; }
    public void setEmployer(String employer) { this.employer = employer; }
    public String getDesignation() { return designation; }
    public void setDesignation(String designation) { this.designation = designation; }
    public Date getEmploymentStartDate() { return employmentStartDate; }
    public void setEmploymentStartDate(Date employmentStartDate) { this.employmentStartDate = employmentStartDate; }
    public BigDecimal getSalary() { return salary; }
    public void setSalary(BigDecimal salary) { this.salary = salary; }
    public BigDecimal getOtherIncome() { return otherIncome; }
    public void setOtherIncome(BigDecimal otherIncome) { this.otherIncome = otherIncome; }
    public Integer getWorkExperience() { return workExperience; }
    public void setWorkExperience(Integer workExperience) { this.workExperience = workExperience; }
    public String getOfficeAddress() { return officeAddress; }
    public void setOfficeAddress(String officeAddress) { this.officeAddress = officeAddress; }
    public Integer getTotalworkExperience() { return totalworkExperience; }
    public void setTotalworkExperience(Integer totalworkExperience) { this.totalworkExperience = totalworkExperience; }
    public Integer getTenure() { return tenure; }
    public void setTenure(Integer tenure) { this.tenure = tenure; }
    public String getLoanPurpose() { return loanPurpose; }
    public void setLoanPurpose(String loanPurpose) { this.loanPurpose = loanPurpose; }
    public String getLoanNature() { return loanNature; }
    public void setLoanNature(String loanNature) { this.loanNature = loanNature; }
    public String getLoanUsage() { return loanUsage; }
    public void setLoanUsage(String loanUsage) { this.loanUsage = loanUsage; }
    public String getGuarantor() { return guarantor; }
    public void setGuarantor(String guarantor) { this.guarantor = guarantor; }
    public String getExistingEmis() { return existingEmis; }
    public void setExistingEmis(String existingEmis) { this.existingEmis = existingEmis; }
    public String getExitingLoanDetails() { return exitingLoanDetails; }
    public void setExitingLoanDetails(String exitingLoanDetails) { this.exitingLoanDetails = exitingLoanDetails; }
    public String getPhotoPath() { return photoPath; }
    public void setPhotoPath(String photoPath) { this.photoPath = photoPath; }
    public String getIdentityProofPath() { return identityProofPath; }
    public void setIdentityProofPath(String identityProofPath) { this.identityProofPath = identityProofPath; }
    public String getSalaryProofPath() { return salaryProofPath; }
    public void setSalaryProofPath(String salaryProofPath) { this.salaryProofPath = salaryProofPath; }
    public String getAddressProofPath() { return addressProofPath; }
    public void setAddressProofPath(String addressProofPath) { this.addressProofPath = addressProofPath; }
    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }
    public String getAction() { return action; }
    public void setAction(String action) { this.action = action; }
}




CREATE TABLE loan_application(
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    application_id VARCHAR(50) NOT NULL,
    amount_required DECIMAL(15,2),
    date DATE,
    status VARCHAR(30),
    full_name VARCHAR(100),
    gender VARCHAR(10),
    dob DATE,
    age INT,
    phone VARCHAR(20),
    email VARCHAR(100),
    marital_status VARCHAR(20),
    address TEXT,
    aadhar_no VARCHAR(20),
    pan_no VARCHAR(20),
    city VARCHAR(50),
    state VARCHAR(50),
    pincode VARCHAR(10),
    residence_type VARCHAR(50),
    ref_name VARCHAR(100),
    ref_relation VARCHAR(50),
    ref_contact VARCHAR(20),
    ref_address TEXT,
    occupation VARCHAR(50),
    employer VARCHAR(100),
    designation varchar(50),
    employment_start_date DATE,
    salary DECIMAL(15,2),
    other_income DECIMAL(15,2),
    work_experience INT,
    total_work_experience INT,
    office_address TEXT,
    tenure INT,
    loan_purpose VARCHAR(255),
    loan_nature VARCHAR(50),
    loan_usage TEXT,
    guarantor VARCHAR(3),
    existing_emis VARCHAR(3),
    exiting_loan_details TEXT,
    photo_path VARCHAR(255),
    identity_proof_path VARCHAR(255),
    salary_proof_path VARCHAR(255),
    address_proof_path VARCHAR(255),
    comment TEXT,
    action VARCHAR(50)
);
