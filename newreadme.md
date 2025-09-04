import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import "../LoanWizardFull.css";

export default function PersonalLoanWizard(accountSummary) {
  const steps = [
    "Personal Info",
    "Contact and Reference",
    "Employment",
    "Loan Details",
    "Financials",
    "Loan Purpose",
    "Documents Upload",
    "Review",
  ];

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submittedApplicationId, setSubmittedApplicationId] = useState(null);
  const [submittedReferenceId, setSubmittedReferenceId] = useState(null);

  const [form, setForm] = useState({
    // New fields added based on your request
    dateOfApplication: new Date().toISOString().slice(0, 10),
    loanName: "Personal Loan",
    age: "",
    // Existing fields
    fullName: "",
    email: "",
    mobile: "",
    panNumber: "",
    dateOfBirth: "",
    gender: "",
    residentialStatus: "",
    maritalStatus: "",
    citizenship: "",
    isIndianCitizen: false,
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    referenceFirstName: "",
    referenceLastName: "",
    referenceRelationship: "",
    referenceMobile: "",
    referenceAddress: "",
    employmentStatus: "",
    employerName: "",
    designation: "",
    employmentStartDate: "",
    employmentEndDate: "",
    annualSalary: 0,
    loanType: "",
    loanAmount: 0,
    tenure: 0,
    interestRate: 0,
    emi: 0,
    assets: [],
    liabilities: [],
    loanPurpose: "",
    loanNature: "",
    loanUsage: "",
    guarantor: "",
    idProof: null,
    incomeProof: null,
    addressProof: null,
    // New field for photo
    photo: null,
    hasJudgements: "",
    bankrupt: "",
    defaulted: "",
    politicallyExposed: "",
    agree: false,
    consentDate: "",
  });
  
  // Calculate age whenever dateOfBirth changes
  useEffect(() => {
    if (form.dateOfBirth) {
      const birthDate = new Date(form.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setForm(prevForm => ({ ...prevForm, age }));
    }
  }, [form.dateOfBirth]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : name === "assets" || name === "liabilities"
          ? value.split(",")
          : value,
    }));
  };

  const addAsset = () => {
    setForm((prevForm) => ({
      ...prevForm,
      assets: [...prevForm.assets, ""],
    }));
  };

  const addLiability = () => {
    setForm((prevForm) => ({
      ...prevForm,
      liabilities: [...prevForm.liabilities, ""],
    }));
  };

  const handleAssetChange = (index, value) => {
    const newAssets = [...form.assets];
    newAssets[index] = value;
    setForm((prevForm) => ({
      ...prevForm,
      assets: newAssets,
    }));
  };

  const handleLiabilityChange = (index, value) => {
    const newLiabilities = [...form.liabilities];
    newLiabilities[index] = value;
    setForm((prevForm) => ({
      ...prevForm,
      liabilities: newLiabilities,
    }));
  };

  const validateStep = () => {
    switch (step) {
      case 0:
        return form.fullName && form.email && form.mobile && form.dateOfBirth && form.panNumber;
      case 1:
        return form.referenceFirstName && form.referenceLastName;
      case 2:
        return form.employmentStatus && form.employerName;
      case 3:
        return form.loanAmount > 0 && form.tenure > 0;
      case 4:
        return form.annualSalary > 0;
      case 5:
        return form.loanPurpose && form.loanNature && form.loanUsage;
      case 6:
        // Now also checking for a photo
        return form.idProof && form.incomeProof && form.addressProof && form.photo;
      case 7:
        return true;
      default:
        return false;
    }
  };

  const getStepContent = (s) => {
    switch (s) {
      case 0:
        return (
          <div className="form-content">
            <h3>Personal Information</h3>
            <div className="form-group">
                <label>Date of Application</label>
                <input type="date" name="dateOfApplication" value={form.dateOfApplication} readOnly />
            </div>
            <div className="form-group">
                <label>Loan Name</label>
                <input type="text" name="loanName" value={form.loanName} readOnly />
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Mother's Maiden Name</label>
              <input type="text" name="mothersMaidenName" value={form.mothersMaidenName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>PAN Number</label>
              <input type="text" name="panNumber" value={form.panNumber} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Age</label>
                <input type="number" name="age" value={form.age} readOnly />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={form.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="form-content">
            <h3>Contact and Reference</h3>
            <div className="form-group">
              <label>Address Line 1</label>
              <input type="text" name="address1" value={form.address1} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Address Line 2</label>
              <input type="text" name="address2" value={form.address2} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" value={form.city} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>State</label>
              <select name="state" value={form.state} onChange={handleChange}>
                <option value="">Select State</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Zip Code</label>
              <input type="text" name="zip" value={form.zip} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Reference First Name</label>
              <input type="text" name="referenceFirstName" value={form.referenceFirstName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Reference Last Name</label>
              <input type="text" name="referenceLastName" value={form.referenceLastName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Reference Relationship</label>
              <input type="text" name="referenceRelationship" value={form.referenceRelationship} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Reference Mobile</label>
              <input type="tel" name="referenceMobile" value={form.referenceMobile} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Reference Address</label>
              <input type="text" name="referenceAddress" value={form.referenceAddress} onChange={handleChange} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-content">
            <h3>Employment Details</h3>
            <div className="form-group">
              <label>Employment Status</label>
              <select name="employmentStatus" value={form.employmentStatus} onChange={handleChange}>
                <option value="">Select Status</option>
                <option value="Salaried">Salaried</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
              </select>
            </div>
            <div className="form-group">
              <label>Employer Name</label>
              <input type="text" name="employerName" value={form.employerName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Designation</label>
              <input type="text" name="designation" value={form.designation} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Employment Start Date</label>
              <input type="date" name="employmentStartDate" value={form.employmentStartDate} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Employment End Date (if applicable)</label>
              <input type="date" name="employmentEndDate" value={form.employmentEndDate} onChange={handleChange} />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-content">
            <h3>Loan Details</h3>
            <div className="form-group">
              <label>Loan Type</label>
              <select name="loanType" value={form.loanType} onChange={handleChange}>
                <option value="">Select Type</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Car Loan">Car Loan</option>
              </select>
            </div>
            <div className="form-group">
              <label>Loan Amount (₹)</label>
              <input type="number" name="loanAmount" value={form.loanAmount} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Tenure (Years)</label>
              <input type="number" name="tenure" value={form.tenure} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Interest Rate (%)</label>
              <input type="number" name="interestRate" value={form.interestRate} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>EMI (₹)</label>
              <input type="number" name="emi" value={form.emi} onChange={handleChange} />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-content">
            <h3>Financials</h3>
            <div className="form-group">
              <label>Annual Salary (₹)</label>
              <input type="number" name="annualSalary" value={form.annualSalary} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Assets</label>
              {form.assets.map((asset, index) => (
                <input key={index} type="text" value={asset} onChange={(e) => handleAssetChange(index, e.target.value)} />
              ))}
              <button type="button" onClick={addAsset}>
                Add Asset
              </button>
            </div>
            <div className="form-group">
              <label>Liabilities</label>
              {form.liabilities.map((liability, index) => (
                <input key={index} type="text" value={liability} onChange={(e) => handleLiabilityChange(index, e.target.value)} />
              ))}
              <button type="button" onClick={addLiability}>
                Add Liability
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="form-content">
            <h3>Loan Purpose</h3>
            <div className="form-group">
              <label>Purpose</label>
              <input type="text" name="loanPurpose" value={form.loanPurpose} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Nature</label>
              <select name="loanNature" value={form.loanNature} onChange={handleChange}>
                <option value="">Select Nature</option>
                <option value="New Loan">New Loan</option>
                <option value="Refinance">Refinance</option>
              </select>
            </div>
            <div className="form-group">
              <label>Usage</label>
              <input type="text" name="loanUsage" value={form.loanUsage} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Guarantor</label>
              <select name="guarantor" value={form.guarantor} onChange={handleChange}>
                <option value="">Select Guarantor</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="form-content">
            <h3>Documents Upload</h3>
            <div className="form-group">
              <label>ID Proof</label>
              <input type="file" name="idProof" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Income Proof</label>
              <input type="file" name="incomeProof" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Address Proof</label>
              <input type="file" name="addressProof" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Upload Photo</label>
                <input type="file" name="photo" onChange={handleChange} />
            </div>
          </div>
        );
      case 7:
        return (
          <div className="review-content">
            <h3>Review Application</h3>
            <p>Please review your application details before submitting.</p>
            <ul>
                <li><span>Date of Application</span><span>{form.dateOfApplication}</span></li>
                <li><span>Age</span><span>{form.age}</span></li>
                <li>
                    <span>Personal Information</span>
                    <span>
                      {form.fullName} • {form.email}
                    </span>
                </li>
                <li>
                    <span>Contact</span>
                    <span>
                      {form.address1} {form.city}, {form.state} {form.zip}
                    </span>
                </li>
                <li>
                    <span>Employment</span>
                    <span>
                      {form.employmentStatus} at {form.employerName}
                    </span>
                </li>
                <li>
                    <span>Loan Details</span>
                    <span>
                      ₹{form.loanAmount} over {form.tenure} years
                    </span>
                </li>
                <li>
                    <span>Financials</span>
                    <span>
                      Salary: ₹{form.annualSalary} • Assets: {form.assets.length} • Liabilities: {form.liabilities.length}
                    </span>
                </li>
                <li>
                    <span>Purpose</span>
                    <span>{form.loanPurpose}</span>
                </li>
                <li>
                    <span>Documents</span>
                    <span>
                      ID Proof: {form.idProof ? form.idProof.name : "N/A"} • Income Proof: {form.incomeProof ? form.incomeProof.name : "N/A"} • Address Proof: {form.addressProof ? form.addressProof.name : "N/A"} • Photo: {form.photo ? form.photo.name : "N/A"}
                    </span>
                </li>
                <li>
                    <span>Declarations</span>
                    <span>
                      Judgements: {form.hasJudgements} • Bankruptcy: {form.bankrupt} • Defaults: {form.defaulted} • PEP: {form.politicallyExposed}
                    </span>
                </li>
            </ul>
            <div className="consent">
              <input type="checkbox" id="final-consent" name="agree" checked={form.agree} onChange={handleChange} />{" "}
              <label htmlFor="final-consent">I confirm all details are correct.</label>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="success-content">
            <h3>Application Submitted!</h3>
            <p>
              Thank you for submitting your application.
              <br />
              Your application ID is: <strong>{submittedApplicationId}</strong>.
              <br />
              Your reference ID is: <strong>{submittedReferenceId}</strong>.
            </p>
            <p>We will review your application and get back to you soon.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="loan-wizard-container">
      <main className="main-content">
        <div className="wizard-card">
          <div className="form-header">
            <h2>Personal Loan Application</h2>
            <div className="step-tracker">
              Step {step + 1} of {steps.length}
            </div>
          </div>

          <div className="step-indicator-container">
            {steps.map((s, index) => (
              <React.Fragment key={index}>
                <div className={`step-circle ${index <= step ? "active" : ""}`}>
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`step-line ${index < step ? "active" : ""}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {submitted ? getStepContent(8) : getStepContent(step)}

          {/* NAVIGATION */}
          <div className="form-navigation">
            <button className="btn btn-ghost" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
              Back
            </button>
            {step < steps.length - 1 ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (validateStep()) {
                    setStep((s) => Math.min(steps.length - 1, s + 1));
                  }
                }}
              >
                Next
              </button>
            ) : (
              <button
                className="btn btn-primary"
                disabled={!form.agree}
                onClick={async () => {
                  if (!form.agree) {
                    alert("Please confirm all details are correct to submit your application.");
                    return;
                  }

                  try {
                    const formData = {
                      ...form,
                      status: 'Submitted',
                      comment: 'Application submitted via web portal.',
                      action: 'Create Record',
                      assets: JSON.stringify(form.assets),
                      liabilities: JSON.stringify(form.liabilities),
                      idProof: form.idProof ? form.idProof.name : null,
                      incomeProof: form.incomeProof ? form.incomeProof.name : null,
                      addressProof: form.addressProof ? form.addressProof.name : null,
                      photo: form.photo ? form.photo.name : null,
                    };

                    const response = await axios.post('http://localhost:8080/api/loans', formData, {
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    });
                    
                    const savedLoan = response.data;

                    console.log("Application submitted successfully with ID:", savedLoan.applicationId);
                    alert("Application submitted successfully. Your ID is: " + savedLoan.applicationId);

                    setSubmitted(true);
                    setSubmittedApplicationId(savedLoan.applicationId);
                    setSubmittedReferenceId(savedLoan.referenceId);

                  } catch (error) {
                    if (axios.isAxiosError(error)) {
                      alert("Application submission failed. Please check the console for details.");
                      console.error('Axios error submitting form:', error.response?.data || error.message);
                    } else {
                      alert("An unknown error occurred. Please check if the backend is running.");
                      console.error('General error:', error);
                    }
                  }
                }}
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
