package loanorigination.loanApplication.service;

import loanorigination.loanApplication.model.PersonalLoan;
import loanorigination.loanApplication.repository.PersonalLoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonalLoanServiceImpl implements PersonalLoanService {

    private final PersonalLoanRepository repository;

    @Autowired
    public PersonalLoanServiceImpl(PersonalLoanRepository repository) {
        this.repository = repository;
    }

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
        Optional<PersonalLoan> optionalLoan = repository.findById(id);

        if (optionalLoan.isPresent()) {
            PersonalLoan loan = optionalLoan.get();
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





public String getStatus() {
    return status;
}

public void setStatus(String status) {
    this.status = status;
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



