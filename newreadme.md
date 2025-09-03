package loanorigination.loanApplication.controller;

import loanorigination.loanApplication.model.PersonalLoan;
import loanorigination.loanApplication.service.PersonalLoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/loans")
@CrossOrigin(origins = "http://localhost:3000") // This allows your frontend to connect
public class PersonalLoanController {

    @Autowired
    private PersonalLoanService personalLoanService;

    @PostMapping
    public ResponseEntity<PersonalLoan> createLoanApplication(@RequestBody PersonalLoan loan) {
        // The @RequestBody annotation automatically converts the JSON from the frontend
        // into a PersonalLoan Java object.
        PersonalLoan savedLoan = personalLoanService.saveApplication(loan);
        return ResponseEntity.ok(savedLoan);
    }
}
