package loanorigination.loanApplication.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "personal_loan")
public class PersonalLoan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "application_id", nullable = false)
    private String applicationId;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "aadhar_number")
    private String aadharNumber;

    @Column(name = "pan_number")
    private String panNumber;
    
    @Column(name = "status")
    private String status;

    @Column(name = "phone")
    private String phone;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "marital_status")
    private String maritalStatus;

    @Column(name = "gender")
    private String gender;

    @Column(name = "residence_type")
    private String residenceType;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "pincode")
    private String pincode;

    @Column(name = "ref_name")
    private String refName;

    @Column(name = "ref_relation")
    private String refRelation;

    @Column(name = "ref_contact")
    private String refContact;

    @Column(name = "ref_address")
    private String refAddress;

    @Column(name = "employment")
    private String employment;

    @Column(name = "employer_name")
    private String employerName;

    @Column(name = "employment_start")
    private String employmentStart;

    @Column(name = "designation")
    private String designation;

    @Column(name = "total_work_experience")
    private Integer totalWorkExperience;

    @Column(name = "monthly_income")
    private BigDecimal monthlyIncome;

    @Column(name = "other_income")
    private BigDecimal otherIncome;

    @Column(name = "loan_amount")
    private BigDecimal loanAmount;

    @Column(name = "tenure")
    private Integer tenure;

    @Column(name = "purpose")
    private String purpose;

    @Column(name = "loan_nature")
    private String loanNature;

    @Column(name = "loan_usage")
    private String loanUsage;

    @Column(name = "occupancy")
    private String occupancy;
    
    @Column(name = "interest_rate")
    private BigDecimal interestRate;
    
    @Column(name = "down_payment")
    private BigDecimal downPayment;
    
    @Column(name = "assets")
    private String assets;
    
    @Column(name = "liabilities")
    private String liabilities;
    
    @Column(name = "existing_loans")
    private String existingLoans;
    
    @Column(name = "id_proof")
    private String idProof;
    
    @Column(name = "income_proof")
    private String incomeProof;
    
    @Column(name = "address_proof")
    private String addressProof;
    
    @Column(name = "guarantor")
    private String guarantor;
    
    @Column(name = "comment")
    private String comment;

    @Column(name = "action")
    private String action;

    // Default constructor
    public PersonalLoan() {
    }

    // Getters and Setters for all fields
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(String applicationId) {
        this.applicationId = applicationId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getMaritalStatus() {
        return maritalStatus;
    }

    public void setMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
    }

    public String getAadharNumber() {
        return aadharNumber;
    }

    public void setAadharNumber(String aadharNumber) {
        this.aadharNumber = aadharNumber;
    }

    public String getPanNumber() {
        return panNumber;
    }

    public void setPanNumber(String panNumber) {
        this.panNumber = panNumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getResidenceType() {
        return residenceType;
    }

    public void setResidenceType(String residenceType) {
        this.residenceType = residenceType;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getRefName() {
        return refName;
    }

    public void setRefName(String refName) {
        this.refName = refName;
    }

    public String getRefRelation() {
        return refRelation;
    }

    public void setRefRelation(String refRelation) {
        this.refRelation = refRelation;
    }

    public String getRefContact() {
        return refContact;
    }

    public void setRefContact(String refContact) {
        this.refContact = refContact;
    }

    public String getRefAddress() {
        return refAddress;
    }

    public void setRefAddress(String refAddress) {
        this.refAddress = refAddress;
    }

    public String getEmployment() {
        return employment;
    }

    public void setEmployment(String employment) {
        this.employment = employment;
    }

    public String getEmployerName() {
        return employerName;
    }

    public void setEmployerName(String employerName) {
        this.employerName = employerName;
    }

    public String getEmploymentStart() {
        return employmentStart;
    }

    public void setEmploymentStart(String employmentStart) {
        this.employmentStart = employmentStart;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public Integer getTotalWorkExperience() {
        return totalWorkExperience;
    }

    public void setTotalWorkExperience(Integer totalWorkExperience) {
        this.totalWorkExperience = totalWorkExperience;
    }

    public BigDecimal getMonthlyIncome() {
        return monthlyIncome;
    }

    public void setMonthlyIncome(BigDecimal monthlyIncome) {
        this.monthlyIncome = monthlyIncome;
    }

    public BigDecimal getOtherIncome() {
        return otherIncome;
    }

    public void setOtherIncome(BigDecimal otherIncome) {
        this.otherIncome = otherIncome;
    }

    public BigDecimal getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(BigDecimal loanAmount) {
        this.loanAmount = loanAmount;
    }

    public Integer getTenure() {
        return tenure;
    }

    public void setTenure(Integer tenure) {
        this.tenure = tenure;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public String getLoanNature() {
        return loanNature;
    }

    public void setLoanNature(String loanNature) {
        this.loanNature = loanNature;
    }

    public String getLoanUsage() {
        return loanUsage;
    }

    public void setLoanUsage(String loanUsage) {
        this.loanUsage = loanUsage;
    }

    public String getOccupancy() {
        return occupancy;
    }

    public void setOccupancy(String occupancy) {
        this.occupancy = occupancy;
    }

    public BigDecimal getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(BigDecimal interestRate) {
        this.interestRate = interestRate;
    }

    public BigDecimal getDownPayment() {
        return downPayment;
    }

    public void setDownPayment(BigDecimal downPayment) {
        this.downPayment = downPayment;
    }

    public String getAssets() {
        return assets;
    }

    public void setAssets(String assets) {
        this.assets = assets;
    }

    public String getLiabilities() {
        return liabilities;
    }

    public void setLiabilities(String liabilities) {
        this.liabilities = liabilities;
    }

    public String getExistingLoans() {
        return existingLoans;
    }

    public void setExistingLoans(String existingLoans) {
        this.existingLoans = existingLoans;
    }

    public String getIdProof() {
        return idProof;
    }

    public void setIdProof(String idProof) {
        this.idProof = idProof;
    }

    public String getIncomeProof() {
        return incomeProof;
    }

    public void setIncomeProof(String incomeProof) {
        this.incomeProof = incomeProof;
    }

    public String getAddressProof() {
        return addressProof;
    }

    public void setAddressProof(String addressProof) {
        this.addressProof = addressProof;
    }

    public String getGuarantor() {
        return guarantor;
    }

    public void setGuarantor(String guarantor) {
        this.guarantor = guarantor;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }
}
