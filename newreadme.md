package loanOrigination.loanApplication.model;

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

    private String status;
    private String fullName;
    private String gender;

    @Temporal(TemporalType.DATE)
    private Date dob;

    private String phone;
    private String email;
    private String maritalStatus;
    private String aadharNumber;
    private String panNumber;
    private String address;
    private String city;
    private String state;
    private String pincode;
    private String residenceType;

    private String refName;
    private String refRelation;
    private String refContact;
    private String refAddress;

    private String employment;
    private String employerName;
    private String designation;

    @Temporal(TemporalType.DATE)
    private Date employmentStart;

    private BigDecimal monthlyIncome;
    private BigDecimal otherIncome;
    private Integer workExperience;
    private Integer totalworkExperience;

    private BigDecimal loanAmount;
    private Integer tenure;
    private BigDecimal interestRate;
    private String purpose;
    private String loanNature;
    private String loanUsage;
    private String guarantor;
    private String existingEmis;
    private String exitingLoanDetails;

    private String assets; // Storing as JSON string
    private String liabilities; // Storing as JSON string

    private String idProof;
    private String incomeProof;
    private String addressProof;

    private String comment;
    private String action;

    // Getters and Setters for all fields

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getApplicationId() { return applicationId; }
    public void setApplicationId(String applicationId) { this.applicationId = applicationId; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
    public Date getDob() { return dob; }
    public void setDob(Date dob) { this.dob = dob; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getMaritalStatus() { return maritalStatus; }
    public void setMaritalStatus(String maritalStatus) { this.maritalStatus = maritalStatus; }
    public String getAadharNumber() { return aadharNumber; }
    public void setAadharNumber(String aadharNumber) { this.aadharNumber = aadharNumber; }
    public String getPanNumber() { return panNumber; }
    public void setPanNumber(String panNumber) { this.panNumber = panNumber; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
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
    public String getEmployment() { return employment; }
    public void setEmployment(String employment) { this.employment = employment; }
    public String getEmployerName() { return employerName; }
    public void setEmployerName(String employerName) { this.employerName = employerName; }
    public String getDesignation() { return designation; }
    public void setDesignation(String designation) { this.designation = designation; }
    public Date getEmploymentStart() { return employmentStart; }
    public void setEmploymentStart(Date employmentStart) { this.employmentStart = employmentStart; }
    public BigDecimal getMonthlyIncome() { return monthlyIncome; }
    public void setMonthlyIncome(BigDecimal monthlyIncome) { this.monthlyIncome = monthlyIncome; }
    public BigDecimal getOtherIncome() { return otherIncome; }
    public void setOtherIncome(BigDecimal otherIncome) { this.otherIncome = otherIncome; }
    public Integer getWorkExperience() { return workExperience; }
    public void setWorkExperience(Integer workExperience) { this.workExperience = workExperience; }
    public Integer getTotalworkExperience() { return totalworkExperience; }
    public void setTotalworkExperience(Integer totalworkExperience) { this.totalworkExperience = totalworkExperience; }
    public BigDecimal getLoanAmount() { return loanAmount; }
    public void setLoanAmount(BigDecimal loanAmount) { this.loanAmount = loanAmount; }
    public Integer getTenure() { return tenure; }
    public void setTenure(Integer tenure) { this.tenure = tenure; }
    public BigDecimal getInterestRate() { return interestRate; }
    public void setInterestRate(BigDecimal interestRate) { this.interestRate = interestRate; }
    public String getPurpose() { return purpose; }
    public void setPurpose(String purpose) { this.purpose = purpose; }
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
    public String getAssets() { return assets; }
    public void setAssets(String assets) { this.assets = assets; }
    public String getLiabilities() { return liabilities; }
    public void setLiabilities(String liabilities) { this.liabilities = liabilities; }
    public String getIdProof() { return idProof; }
    public void setIdProof(String idProof) { this.idProof = idProof; }
    public String getIncomeProof() { return incomeProof; }
    public void setIncomeProof(String incomeProof) { this.incomeProof = incomeProof; }
    public String getAddressProof() { return addressProof; }
    public void setAddressProof(String addressProof) { this.addressProof = addressProof; }
    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }
    public String getAction() { return action; }
    public void setAction(String action) { this.action = action; }
}





CREATE TABLE loan_application(
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    application_id VARCHAR(50) NOT NULL,
    full_name VARCHAR(100),
    gender VARCHAR(10),
    dob DATE,
    phone VARCHAR(20),
    email VARCHAR(100),
    marital_status VARCHAR(20),
    aadhar_number VARCHAR(20),
    pan_number VARCHAR(20),
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    pincode VARCHAR(10),
    residence_type VARCHAR(50),
    ref_name VARCHAR(100),
    ref_relation VARCHAR(50),
    ref_contact VARCHAR(20),
    ref_address TEXT,
    employment VARCHAR(50),
    employer_name VARCHAR(100),
    designation VARCHAR(50),
    employment_start DATE,
    monthly_income DECIMAL(15,2),
    other_income DECIMAL(15,2),
    work_experience INT,
    total_work_experience INT,
    loan_amount DECIMAL(15,2),
    tenure INT,
    interest_rate DECIMAL(5,2),
    purpose VARCHAR(255),
    loan_nature VARCHAR(50),
    loan_usage TEXT,
    guarantor VARCHAR(3),
    existing_emis VARCHAR(3),
    assets TEXT,
    liabilities TEXT,
    id_proof TEXT,
    income_proof TEXT,
    address_proof TEXT,
    comment TEXT,
    action VARCHAR(50)
);
