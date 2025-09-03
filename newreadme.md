package loanorigination.loanApplication.repository;

import loanorigination.loanApplication.model.PersonalLoan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalLoanRepository extends JpaRepository<PersonalLoan, Long> {
}
