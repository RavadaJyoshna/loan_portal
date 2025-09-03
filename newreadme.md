package loanorigination.loanApplication.service;

import loanorigination.loanApplication.model.PersonalLoan;
import java.util.List;

public interface PersonalLoanService {
    PersonalLoan saveApplication(PersonalLoan loan);
    PersonalLoan updateApplication(PersonalLoan loan);
    PersonalLoan getApplicationById(Long id);
    List<PersonalLoan> getAllApplications();
    void deleteApplication(Long id);
}





package loanorigination.loanApplication.service;

import loanorigination.loanApplication.model.PersonalLoan;
import loanorigination.loanApplication.repository.PersonalLoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PersonalLoanServiceImpl implements PersonalLoanService {

    @Autowired
    private PersonalLoanRepository personalLoanRepository;

    @Override
    public PersonalLoan saveApplication(PersonalLoan loan) {
        return personalLoanRepository.save(loan);
    }

    @Override
    public PersonalLoan updateApplication(PersonalLoan loan) {
        return personalLoanRepository.save(loan);
    }

    @Override
    public PersonalLoan getApplicationById(Long id) {
        return personalLoanRepository.findById(id).orElse(null);
    }

    @Override
    public List<PersonalLoan> getAllApplications() {
        return personalLoanRepository.findAll();
    }

    @Override
    public void deleteApplication(Long id) {
        personalLoanRepository.deleteById(id);
    }
}
