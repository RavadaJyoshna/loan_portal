{showApplication ? (
        <>
          {selectedLoanType === "home" && <HomeLoanWizard />}
          {/* Later add:
          {selectedLoanType === "personal" && <PersonalLoanWizard />}
          {selectedLoanType === "vehicle" && <VehicleLoanWizard />} */}
        </>
      ) : (
        <>
