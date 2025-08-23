// src/App.js
import React, { useState } from "react";
import HomeLoanWizard from "./loanTypes/HomeLoanWizard";
import PersonalLoanWizard from "./loanTypes/PersonalLoanWizard";
import VehicleLoanWizard from "./loanTypes/VehicleLoanWizard";
import "./LoanWizardFull.css";

function App() {
  const [selectedLoan, setSelectedLoan] = useState(null);

  if (!selectedLoan) {
    return React.createElement(
      "div",
      { className: "loan-selection" },
      React.createElement("h1", null, "Apply for a Loan"),
      React.createElement(
        "div",
        { className: "loan-options" },
        React.createElement(
          "button",
          { onClick: () => setSelectedLoan("home") },
          "Home Loan"
        ),
        React.createElement(
          "button",
          { onClick: () => setSelectedLoan("personal") },
          "Personal Loan"
        ),
        React.createElement(
          "button",
          { onClick: () => setSelectedLoan("vehicle") },
          "Vehicle Loan"
        )
      )
    );
  }

  return (
    selectedLoan === "home"
      ? React.createElement(HomeLoanWizard, null)
      : selectedLoan === "personal"
      ? React.createElement(PersonalLoanWizard, null)
      : selectedLoan === "vehicle"
      ? React.createElement(VehicleLoanWizard, null)
      : null
  );
}

export default App;
