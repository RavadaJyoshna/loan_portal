## first code
package loanOrigination.personalLoan.model;

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
    private String occupation;
    private String employer;
    private String designation;

    @Temporal(TemporalType.DATE)
    private Date employmentStartDate;

    private BigDecimal salary;
    private Integer workExperience;
    private String officeAddress;
    private Integer tenure;
    private String loanPurpose;
    private String exitingLoanDetails;
    private String referenceName;
    private String referenceRelationship;
    private String referenceContact;
    private String photoPath;
    private String identityProofPath;
    private String salaryProofPath;
    private String comment;
    private String action;

    // ✅ Getters and Setters
    // (Generate using Lombok @Data if you prefer)
}



## second code

package loanOrigination.personalLoan.repository;

import loanOrigination.personalLoan.model.PersonalLoan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalLoanRepository extends JpaRepository<PersonalLoan, Long> {
    // Custom queries can be added here if needed
}

## third code

package loanOrigination.personalLoan.service;

import loanOrigination.personalLoan.model.PersonalLoan;

import java.util.List;

public interface PersonalLoanService {
    PersonalLoan applyLoan(PersonalLoan loan);
    List<PersonalLoan> getAllLoans();
    PersonalLoan getLoanById(Long id);
    PersonalLoan updateLoan(Long id, PersonalLoan loanDetails);
    void deleteLoan(Long id);
}


##fourth code

package loanOrigination.personalLoan.service;

import loanOrigination.personalLoan.model.PersonalLoan;
import loanOrigination.personalLoan.repository.PersonalLoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonalLoanServiceImpl implements PersonalLoanService {

    @Autowired
    private PersonalLoanRepository repository;

    @Override
    public PersonalLoan applyLoan(PersonalLoan loan) {
        return repository.save(loan);
    }

    @Override
    public List<PersonalLoan> getAllLoans() {
        return repository.findAll();
    }

    @Override
    public PersonalLoan getLoanById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public PersonalLoan updateLoan(Long id, PersonalLoan loanDetails) {
        PersonalLoan loan = repository.findById(id).orElse(null);
        if (loan != null) {
            loan.setStatus(loanDetails.getStatus());
            loan.setComment(loanDetails.getComment());
            loan.setAction(loanDetails.getAction());
            return repository.save(loan);
        }
        return null;
    }

    @Override
    public void deleteLoan(Long id) {
        repository.deleteById(id);
    }
}


##fifth code

package loanOrigination.personalLoan.controller;

import loanOrigination.personalLoan.model.PersonalLoan;
import loanOrigination.personalLoan.service.PersonalLoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personal-loans")
public class PersonalLoanController {

    @Autowired
    private PersonalLoanService service;

    @PostMapping
    public PersonalLoan applyLoan(@RequestBody PersonalLoan loan) {
        return service.applyLoan(loan);
    }

    @GetMapping
    public List<PersonalLoan> getAllLoans() {
        return service.getAllLoans();
    }

    @GetMapping("/{id}")
    public PersonalLoan getLoanById(@PathVariable Long id) {
        return service.getLoanById(id);
    }

    @PutMapping("/{id}")
    public PersonalLoan updateLoan(@PathVariable Long id, @RequestBody PersonalLoan loan) {
        return service.updateLoan(id, loan);
    }

    @DeleteMapping("/{id}")
    public String deleteLoan(@PathVariable Long id) {
        service.deleteLoan(id);
        return "Loan Application deleted successfully with id " + id;
    }
}
