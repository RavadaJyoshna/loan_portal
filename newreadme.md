package loanorigination.loanApplication.controller;

import loanorigination.loanApplication.model.PersonalLoan;
import loanorigination.loanApplication.service.PersonalLoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

@RestController
@RequestMapping("/api/loans")
@CrossOrigin(origins = "http://localhost:3000") // This allows your frontend to connect
public class PersonalLoanController {

    @Autowired
    private PersonalLoanService personalLoanService;

    @PostMapping
    public ResponseEntity<PersonalLoan> createLoanApplication(@RequestBody PersonalLoan loan) {
        // Generate a short, unique applicationId on the backend
        String uniqueId = UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        loan.setApplicationId("SCB-" + uniqueId);

        // Set other backend-controlled fields
        loan.setStatus("Submitted");
        loan.setComment("Application submitted via web portal.");
        loan.setAction("Create Record");

        // Save the loan application
        PersonalLoan savedLoan = personalLoanService.saveApplication(loan);

        // Return the full saved object, which includes the new applicationId
        return ResponseEntity.ok(savedLoan);
    }
}






package loanorigination.loanApplication.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "personal_loan")
public class PersonalLoan {

    // This is now the primary key
    @Id
    @Column(name = "application_id", nullable = false)
    private String applicationId;

    @Column(name = "status")
    private String status;

    // Personal Info
    private String name;
    private String email;
    private String phone;
    @Temporal(TemporalType.DATE)
    private Date dob;
    private String maritalStatus;
    private String aadharNumber;
    private String panNumber;
    private String gender;
    private String residenceType;
    private String address;
    private String city;
    private String state;
    private String pincode;
    private String refName;
    private String refRelation;
    private String refContact;
    private String refAddress;

    // Employment
    private String employment;
    private String employerName;
    private String employmentStart;
    private String designation;
    private Integer totalworkExperience;
    private BigDecimal monthlyIncome;
    private BigDecimal otherIncome;

    // Loan Details
    private BigDecimal loanAmount;
    private Integer tenure;
    private String purpose;
    private String loanNature;
    private String loanUsage;
    private String occupancy;
    private BigDecimal interestRate;
    private BigDecimal downPayment;
    private String existingLoans;

    // Financials
    private String assets; // Stored as a JSON string
    private String liabilities; // Stored as a JSON string

    // Documents
    private String idProof;
    private String incomeProof;
    private String addressProof;

    // Other fields
    private String guarantor;
    private String comment;
    private String action;

    // Getters and Setters for all fields

    public String getApplicationId() { return applicationId; }
    public void setApplicationId(String applicationId) { this.applicationId = applicationId; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public Date getDob() { return dob; }
    public void setDob(Date dob) { this.dob = dob; }
    public String getMaritalStatus() { return maritalStatus; }
    public void setMaritalStatus(String maritalStatus) { this.maritalStatus = maritalStatus; }
    public String getAadharNumber() { return aadharNumber; }
    public void setAadharNumber(String aadharNumber) { this.aadharNumber = aadharNumber; }
    public String getPanNumber() { return panNumber; }
    public void setPanNumber(String panNumber) { this.panNumber = panNumber; }
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
    public String getResidenceType() { return residenceType; }
    public void setResidenceType(String residenceType) { this.residenceType = residenceType; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getState() { return state; }
    public void setState(String state) { this.state = state; }
    public String getPincode() { return pincode; }
    public void setPincode(String pincode) { this.pincode = pincode; }
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
    public String getEmploymentStart() { return employmentStart; }
    public void setEmploymentStart(String employmentStart) { this.employmentStart = employmentStart; }
    public String getDesignation() { return designation; }
    public void setDesignation(String designation) { this.designation = designation; }
    public Integer getTotalworkExperience() { return totalworkExperience; }
    public void setTotalworkExperience(Integer totalworkExperience) { this.totalworkExperience = totalworkExperience; }
    public BigDecimal getMonthlyIncome() { return monthlyIncome; }
    public void setMonthlyIncome(BigDecimal monthlyIncome) { this.monthlyIncome = monthlyIncome; }
    public BigDecimal getOtherIncome() { return otherIncome; }
    public void setOtherIncome(BigDecimal otherIncome) { this.otherIncome = otherIncome; }
    public BigDecimal getLoanAmount() { return loanAmount; }
    public void setLoanAmount(BigDecimal loanAmount) { this.loanAmount = loanAmount; }
    public Integer getTenure() { return tenure; }
    public void setTenure(Integer tenure) { this.tenure = tenure; }
    public String getPurpose() { return purpose; }
    public void setPurpose(String purpose) { this.purpose = purpose; }
    public String getLoanNature() { return loanNature; }
    public void setLoanNature(String loanNature) { this.loanNature = loanNature; }
    public String getLoanUsage() { return loanUsage; }
    public void setLoanUsage(String loanUsage) { this.loanUsage = loanUsage; }
    public String getOccupancy() { return occupancy; }
    public void setOccupancy(String occupancy) { this.occupancy = occupancy; }
    public BigDecimal getInterestRate() { return interestRate; }
    public void setInterestRate(BigDecimal interestRate) { this.interestRate = interestRate; }
    public BigDecimal getDownPayment() { return downPayment; }
    public void setDownPayment(BigDecimal downPayment) { this.downPayment = downPayment; }
    public String getAssets() { return assets; }
    public void setAssets(String assets) { this.assets = assets; }
    public String getLiabilities() { return liabilities; }
    public void setLiabilities(String liabilities) { this.liabilities = liabilities; }
    public String getExistingLoans() { return existingLoans; }
    public void setExistingLoans(String existingLoans) { this.existingLoans = existingLoans; }
    public String getIdProof() { return idProof; }
    public void setIdProof(String idProof) { this.idProof = idProof; }
    public String getIncomeProof() { return incomeProof; }
    public void setIncomeProof(String incomeProof) { this.incomeProof = incomeProof; }
    public String getAddressProof() { return addressProof; }
    public void setAddressProof(String addressProof) { this.addressProof = addressProof; }
    public String getGuarantor() { return guarantor; }
    public void setGuarantor(String guarantor) { this.guarantor = guarantor; }
    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }
    public String getAction() { return action; }
    public void setAction(String action) { this.action = action; }
}



package loanorigination.loanApplication.repository;

import loanorigination.loanApplication.model.PersonalLoan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalLoanRepository extends JpaRepository<PersonalLoan, String> {
}






-- Drop the old table first to apply the new schema
DROP TABLE IF EXISTS personal_loan;

CREATE TABLE personal_loan(
    -- 'application_id' is now the primary key
    application_id VARCHAR(50) PRIMARY KEY NOT NULL,
    status VARCHAR(30),
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    dob DATE,
    marital_status VARCHAR(20),
    aadhar_number VARCHAR(20),
    pan_number VARCHAR(20),
    gender VARCHAR(10),
    residence_type VARCHAR(50),
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    pincode VARCHAR(10),
    ref_name VARCHAR(100),
    ref_relation VARCHAR(50),
    ref_contact VARCHAR(20),
    ref_address TEXT,
    employment VARCHAR(50),
    employer_name VARCHAR(100),
    employment_start VARCHAR(50),
    designation VARCHAR(50),
    total_work_experience INT,
    monthly_income DECIMAL(15,2),
    other_income DECIMAL(15,2),
    loan_amount DECIMAL(15,2),
    tenure INT,
    purpose VARCHAR(255),
    loan_nature VARCHAR(50),
    loan_usage TEXT,
    occupancy VARCHAR(50),
    interest_rate DECIMAL(5,2),
    down_payment DECIMAL(15,2),
    assets TEXT,
    liabilities TEXT,
    existing_loans VARCHAR(3),
    id_proof TEXT,
    income_proof TEXT,
    address_proof TEXT,
    guarantor VARCHAR(3),
    comment TEXT,
    action VARCHAR(50)
);
