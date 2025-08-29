import React, { useMemo, useState } from "react";
import "../LoanWizardFull.css";

export default function HomeLoanWizard() {
  const steps = [
    "Personal Info",
    "Contact & Reference",
    "Employment",
    "Loan Details",
    "Financials",
    "Property Info",
    "Documents Upload",
    "Review",
  ];

  // List of Indian states for the dropdown
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
  const [loanType, setLoanType] = useState("Home Loan");
  const [submitted, setSubmitted] = useState(false);
  const refId = useMemo(() => Math.floor(Math.random() * 1000000), []);


  const [form, setForm] = useState({
    // Personal
    name: "",
    email: "",
    phone: "",
    dob: "",
    maritalStatus: "",
    dependents: "",
    idType: "PAN",
    idNumber: "",
    gender: "",

    // Contact & Reference
    residenceType: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    refName: "",
    refRelation: "",
    refContact: "",
    refAddress: "",

    // Employment
    employment: "",
    employerName: "",
    employmentStart: "",
    industry: "",
    workEmail: "",
    monthlyIncome: "",
    otherIncome: "",

    // Loan details
    loanAmount: "",
    tenure: "",
    purpose: "",
    occupancy: "",
    interestRate: "8.0",
    downPayment: "",

    // Financials
    assets: [{ type: "", amount: "" }],
    liabilities: [{ type: "Credit Card", amount: "", emi: "" }],
    existingEmis: "no",

    // Property
    propertyType: "Apartment",
    propertyValue: "",
    propertyAddress: "",
    propertyCity: "",
    propertyState: "",
    propertyPincode: "",
    coApplicant: "no",
    coName: "",
    coRelation: "",
    coIncome: "",

    // Documents
    idProof: null,
    incomeProof: null,
    addressProof: null,
    saleAgreement: null,

  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleArrayChange = (listName, index, field, value) => {
    setForm((p) => {
      const copy = [...p[listName]];
      copy[index] = { ...copy[index], [field]: value };
      return { ...p, [listName]: copy };
    });
  };

  const addRow = (listName, row) => {
    setForm((p) => ({ ...p, [listName]: [...p[listName], row] }));
  };

  const removeRow = (listName, index) => {
    setForm((p) => {
      const copy = [...p[listName]];
      copy.splice(index, 1);
      return { ...p, [listName]: copy.length ? copy : [listName === "assets" ? { type: "", amount: "" } : { type: "", amount: "", emi: "" }] };
    });
  };

  const calculateEMI = (amount, rate, tenure) => {
    if (!amount || !rate || !tenure) return 0;
    const principal = parseFloat(amount);
    const annualInterestRate = parseFloat(rate);
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const loanTenureMonths = parseFloat(tenure);

    const emi =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, loanTenureMonths) - 1);

    return isNaN(emi) ? 0 : emi.toFixed(2);
  };
  const estimatedEmi = calculateEMI(form.loanAmount, form.interestRate, form.tenure);

  const progressPct = Math.round((step / (steps.length - 1)) * 100);

  const validateStep = () => {
    if (step === 0 && (!form.name || !form.email || !form.phone || !form.dob)) {
      alert("Please fill out all required personal information.");
      return false;
    }
    if (step === 1 && (!form.address || !form.city || !form.refName)) {
      alert("Please fill out all required contact and reference information.");
      return false;
    }
    if (step === 2 && (!form.employment || !form.monthlyIncome)) {
      alert("Please fill out all required employment information.");
      return false;
    }
    if (step === 3 && (!form.loanAmount || !form.tenure || !form.downPayment)) {
      alert("Please fill out all required loan details.");
      return false;
    }
    if (step === 5 && (!form.propertyType || !form.propertyValue)) {
      alert("Please fill out all required property information.");
      return false;
    }
    return true;
  };


if (submitted) {
  return (
    <div className="content success-page">
      <div className="card submission-card">
        <div className="submission-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-8.82"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h2 className="submission-title">Application Submitted Successfully!</h2>
        <p className="submission-message">
          Thank you, **{form.name}**. Your loan application has been received.
        </p>
        <div className="ref-id-box">
          <p>Your Reference ID</p>
          <strong>SCB-{refId}</strong>
        </div>
        <p className="contact-info">
          Our team will review your application and get back to you within 2–3 business days. Please keep an eye on your email for updates.
        </p>
        <div className="form-navigation" style={{ marginTop: "30px", textAlign: "center" }}>
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = "/apply-loan")}
          >
            Back to Loan Options
          </button>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="layout">
      
      {/* New Topbar */}
<div className="topbar">
  <div className="logo" onClick={() => (window.location.href = "/apply-loan")}>
    <img src="https://av.sc.com/corp-en/nr/content/images/sc-lock-up-english-grey-rgb.png" alt="Standard Chartered" />
  </div>
  <div className="profile-info">
    <span className="profile-name">Welcome, User</span>
    <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      alt="Profile"
      className="profile-avatar"
    />
  </div>
</div>

<div className="main-container">

      {/* Sidebar with steps */}
      <aside className="sidebar">
        <div className="sidebar-steps" role="tablist" aria-label="Loan steps">
          {steps.map((label, idx) => (
            <button
              key={label}
              role="tab"
              aria-selected={step === idx}
              className={`step-chip ${step === idx ? "active" : ""}`}
              onClick={() => setStep(idx)}
            >
              <span className="step-index">{idx + 1}</span>
              <span className="step-label">{label}</span>
            </button>
          ))}
        </div>
        {/* Footer */}
        <footer className="footer">
          © {new Date().getFullYear()} Standard Chartered Bank. All rights reserved.
        </footer>
      </aside>

      {/* Main */}
      <main className="content">
{/* Loan Type Display */}
  <div className="loan-type-banner">
    <h2>{loanType}</h2>
  </div>
        <div className="page-header">
          <div>
            <h1>{steps[step]}</h1>
            <p>Step {step + 1} of {steps.length}</p>
          </div>
        </div>
          <div className="progress-wrap">
    <div className="progress-track">
      <div className="progress-bar" style={{ width: `${progressPct}%` }} />
    </div>
    <span className="progress-text">{progressPct}%</span>
  </div>
        <div className="card">
          {/* STEP 0: PERSONAL INFO */}
          {step === 0 && (
            <div className="form-step active grid-2">
              <div className="field">
                <label>Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your legal name" />
              </div>
              <div className="field">
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              </div>
              <div className="field">
                <label>Phone</label>
                <input name="phone" inputMode="tel" value={form.phone} onChange={handleChange} placeholder="10-digit mobile" />
              </div>
              <div className="field">
                <label>Date of Birth</label>
                <input name="dob" type="date" value={form.dob} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Gender</label>
                <select name="gender" value={form.gender} onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label>Marital Status</label>
                <select name="maritalStatus" value={form.maritalStatus} onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </div>
              <div className="field">
                <label>Dependents</label>
                <input name="dependents" inputMode="numeric" value={form.dependents} onChange={handleChange} placeholder="0" />
              </div>
              <div className="field">
                <label>ID Type</label>
                <select name="idType" value={form.idType} onChange={handleChange}>
                  <option>PAN</option>
                  <option>Aadhaar</option>
                  <option>Passport</option>
                  <option>Driver’s License</option>
                </select>
              </div>
              <div className="field">
                <label>ID Number</label>
                <input name="idNumber" value={form.idNumber} onChange={handleChange} placeholder="e.g., ABCDE1234F" />
              </div>
            </div>
          )}

          {/* NEW STEP 1: CONTACT & REFERENCE */}
          {step === 1 && (
            <div className="form-step active grid-2">
              <div className="field">
                <label>Residence Type</label>
                <select name="residenceType" value={form.residenceType} onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Owned</option>
                  <option>Rented</option>
                  <option>Company Provided</option>
                  <option>Family</option>
                </select>
              </div>
              <div className="field">
                <label>Address</label>
                <input name="address" value={form.address} onChange={handleChange} placeholder="Street address" />
              </div>
              <div className="field">
                <label>City</label>
                <input name="city" value={form.city} onChange={handleChange} />
              </div>
              <div className="field">
                <label>State</label>
                <select name="state" value={form.state} onChange={handleChange}>
                  <option value="">Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label>Pincode</label>
                <input name="pincode" inputMode="numeric" value={form.pincode} onChange={handleChange} />
              </div>
              <hr style={{ gridColumn: "1 / -1" }}/>

              <h3>Reference Details</h3>
              <div className="field">
                <label>Reference Name</label>
                <input name="refName" value={form.refName} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Relationship</label>
                <input name="refRelation" value={form.refRelation} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Contact Number</label>
                <input name="refContact" value={form.refContact} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Address</label>
                <input name="refAddress" value={form.refAddress} onChange={handleChange} />
              </div>
            </div>
          )}
          
          {/* STEP 2: EMPLOYMENT */}
          {step === 2 && (
            <div className="form-step active grid-2">
              <div className="field">
                <label>Employment Type</label>
                <select name="employment" value={form.employment} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="retired">Retired</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <div className="field">
                <label>Employer / Business Name</label>
                <input name="employerName" value={form.employerName} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Industry</label>
                <input name="industry" value={form.industry} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Employment Start Date</label>
                <input name="employmentStart" type="date" value={form.employmentStart} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Work Email</label>
                <input name="workEmail" type="email" value={form.workEmail} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Monthly Income (₹)</label>
                <input name="monthlyIncome" inputMode="numeric" value={form.monthlyIncome} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Other Monthly Income (₹)</label>
                <input name="otherIncome" inputMode="numeric" value={form.otherIncome} onChange={handleChange} placeholder="Optional" />
              </div>
            </div>
          )}

          {/* STEP 3: LOAN DETAILS */}
         {step === 3 && (
  <div className="form-step active">
    
    {/* Loan Amount + Tenure */}
    <div className="form-row">
      <div className="field">
        <label>Desired Loan Amount (₹)</label>
        <input
          name="loanAmount"
          inputMode="numeric"
          value={form.loanAmount}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Tenure (Months)</label>
        <input
          name="tenure"
          inputMode="numeric"
          value={form.tenure}
          onChange={handleChange}
        />
      </div>
    </div>

    {/* Dynamic EMI calculation display */}
    <div className="emi-results">
        <div className="emi-line">
          <span>Estimated Monthly EMI</span>
          <strong>₹ {Number(estimatedEmi).toLocaleString("en-IN")}</strong>
        </div>
      </div>

    {/* Interest Rate (single full-width field) */}
    <div className="field">
      <label>Interest Rate (% p.a.)</label>
      <input
        name="interestRate"
        inputMode="decimal"
        value={form.interestRate}
        readOnly
      />
    </div>

    {/* Down Payment (single full-width field) */}
    <div className="field">
      <label>Down Payment (₹)</label>
      <input
        name="downPayment"
        inputMode="numeric"
        value={form.downPayment}
        onChange={handleChange}
      />
    </div>

    {/* Purpose + Occupancy */}
    <div className="form-row">
      <div className="field">
        <label>Purpose</label>
        <select
          name="purpose"
          value={form.purpose}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option>New Purchase</option>
          <option>Refinance / Balance Transfer</option>
          <option>Home Improvement</option>
        </select>
      </div>
      <div className="field">
        <label>Occupancy</label>
        <select
          name="occupancy"
          value={form.occupancy}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option>Primary Residence</option>
          <option>Second Home</option>
          <option>Investment</option>
        </select>
      </div>
    </div>
  </div>
)}


          {/* STEP 4: FINANCIALS */}
          {step === 4 && (
            <div className="form-step active">
              <h3>Assets</h3>
              {form.assets.map((row, i) => (
                <div className="grid-3" key={`asset-${i}`}>
                  <div className="field">
                    <label>Type</label>
                    <input
                      value={row.type}
                      onChange={(e) => handleArrayChange("assets", i, "type", e.target.value)}
                      placeholder="Savings, FD, Mutual Funds…"
                    />
                  </div>
                  <div className="field">
                    <label>Amount (₹)</label>
                    <input
                      inputMode="numeric"
                      value={row.amount}
                      onChange={(e) => handleArrayChange("assets", i, "amount", e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label>&nbsp;</label>
                    <div className="emi-actions">
                      <button className="btn btn-ghost" type="button" onClick={() => addRow("assets", { type: "", amount: "" })}>+ Add</button>
                      <button className="btn btn-outline" type="button" onClick={() => removeRow("assets", i)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}

              <h3 style={{ marginTop: 16 }}>Liabilities</h3>
              <div className="field">
                <label>Do you have existing EMIs?</label>
                <select name="existingEmis" value={form.existingEmis} onChange={handleChange}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {form.existingEmis === "yes" &&
                form.liabilities.map((row, i) => (
                  <div className="grid-3" key={`debt-${i}`}>
                    <div className="field">
                      <label>Debt Type</label>
                      <input
                        value={row.type}
                        onChange={(e) => handleArrayChange("liabilities", i, "type", e.target.value)}
                        placeholder="Credit Card, Auto Loan…"
                      />
                    </div>
                    <div className="field">
                      <label>Outstanding (₹)</label>
                      <input
                        inputMode="numeric"
                        value={row.amount}
                        onChange={(e) => handleArrayChange("liabilities", i, "amount", e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label>Monthly EMI (₹)</label>
                      <input
                        inputMode="numeric"
                        value={row.emi}
                        onChange={(e) => handleArrayChange("liabilities", i, "emi", e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label>&nbsp;</label>
                      <div className="emi-actions">
                        <button className="btn btn-ghost" type="button" onClick={() => addRow("liabilities", { type: "", amount: "", emi: "" })}>+ Add</button>
                        <button className="btn btn-outline" type="button" onClick={() => removeRow("liabilities", i)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* STEP 5: PROPERTY INFO */}
          {step === 5 && (
            <div className="form-step active grid-2">
              <div className="field">
                <label>Property Type</label>
                <select name="propertyType" value={form.propertyType} onChange={handleChange}>
                  <option>Apartment</option>
                  <option>Independent House</option>
                  <option>Plot</option>
                </select>
              </div>
              <div className="field">
                <label>Property Value (₹)</label>
                <input name="propertyValue" inputMode="numeric" value={form.propertyValue} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Property Address</label>
                <input name="propertyAddress" value={form.propertyAddress} onChange={handleChange} />
              </div>
              <div className="field">
                <label>City</label>
                <input name="propertyCity" value={form.propertyCity} onChange={handleChange} />
              </div>
              <div className="field">
                <label>State</label>
                <select name="propertyState" value={form.propertyState} onChange={handleChange}>
                  <option value="">Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label>Pincode</label>
                <input name="propertyPincode" inputMode="numeric" value={form.propertyPincode} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Co-applicant?</label>
                <select name="coApplicant" value={form.coApplicant} onChange={handleChange}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {form.coApplicant === "yes" && (
                <>
                  <div className="field">
                    <label>Co-applicant Name</label>
                    <input name="coName" value={form.coName} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label>Relationship</label>
                    <input name="coRelation" value={form.coRelation} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label>Co-applicant Monthly Income (₹)</label>
                    <input name="coIncome" inputMode="numeric" value={form.coIncome} onChange={handleChange} />
                  </div>
                </>
              )}
            </div>
          )}
{/* STEP 6: DOCUMENTS UPLOAD */}
{step === 6 && (
  <div className="form-step active">
    <h3>Upload Documents</h3>

    <div className="field">
      <label>ID Proof (PAN, Aadhaar, Passport)</label>
      <input
        type="file"
        name="idProof"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => handleChange({ target: { name: "idProof", value: e.target.files[0] } })}
      />
      {form.idProof && <span>{form.idProof.name}</span>}
    </div>

    <div className="field">
      <label>Income Proof (Salary Slip / ITR)</label>
      <input
        type="file"
        name="incomeProof"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => handleChange({ target: { name: "incomeProof", value: e.target.files[0] } })}
      />
      {form.incomeProof && <span>{form.incomeProof.name}</span>}
    </div>

    <div className="field">
      <label>Address Proof</label>
      <input
        type="file"
        name="addressProof"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => handleChange({ target: { name: "addressProof", value: e.target.files[0] } })}
      />
      {form.addressProof && <span>{form.addressProof.name}</span>}
    </div>

    <div className="field">
      <label>Sale Agreement (PDF)</label>
      <input
        type="file"
        name="saleAgreement"
        accept=".pdf"
        onChange={(e) => handleChange({ target: { name: "saleAgreement", value: e.target.files[0] } })}
      />
      {form.saleAgreement && <span>{form.saleAgreement.name}</span>}
    </div>
  </div>
)}
          {/* STEP 7: REVIEW */}
          {step === 7 && (
            <div className="form-step active review">
              <h3>Review Your Application</h3>
              <ul className="status-list">
                <li><span>Name</span><span>{form.name}</span></li>
                <li><span>Email</span><span>{form.email}</span></li>
                <li><span>Phone</span><span>{form.phone}</span></li>
                <li><span>DOB</span><span>{form.dob}</span></li>
                <li><span>Gender</span><span>{form.gender}</span></li>
                <li><span>Marital Status</span><span>{form.maritalStatus}</span></li>
                <li><span>ID</span><span>{form.idType} • {form.idNumber}</span></li>
                <li><span>Dependents</span><span>{form.dependents}</span></li>
                <li><span>Address</span><span>{form.address}, {form.city}, {form.state} {form.pincode}</span></li>
                <li><span>Reference</span><span>{form.refName} ({form.refRelation}) - {form.refContact} - {form.refAddress}</span></li>
                <li><span>Employment</span><span>{form.employment}</span></li>
                <li><span>Employer</span><span>{form.employerName}</span></li>
                <li><span>Income</span><span>₹ {Number(form.monthlyIncome || 0).toLocaleString("en-IN")}</span></li>
                <li><span>Other Income</span><span>₹ {Number(form.otherIncome || 0).toLocaleString("en-IN")}</span></li>
                <li><span>Loan Amount</span><span>₹ {Number(form.loanAmount || 0).toLocaleString("en-IN")}</span></li>
                <li><span>Tenure</span><span>{form.tenure} months</span></li>
                <li><span>Interest</span><span>{form.interestRate}% p.a.</span></li>
                <li><span>Down Payment</span><span>₹ {Number(form.downPayment || 0).toLocaleString("en-IN")}</span></li>
                <li><span>Property</span><span>{form.propertyType} • ₹ {Number(form.propertyValue || 0).toLocaleString("en-IN")}</span></li>
                <li><span>Property Address</span><span>{form.propertyAddress}, {form.propertyCity}, {form.propertyState} {form.propertyPincode}</span></li>
                <li><span>Co-applicant</span><span>{form.coApplicant === "yes" ? `${form.coName} (${form.coRelation})` : "No"}</span></li>
                <li><span>Uploaded Documents</span><span>
                  ID Proof: {form.idProof ? form.idProof.name : "N/A"} <br/>
                  Income Proof: {form.incomeProof ? form.incomeProof.name : "N/A"} <br/>
                  Address Proof: {form.addressProof ? form.addressProof.name : "N/A"} <br/>
                  Sale Agreement: {form.saleAgreement ? form.saleAgreement.name : "N/A"}
                </span></li>
              </ul>
            </div>
          )}

          {/* NAVIGATION */}
          <div className="form-navigation">
            <button
              className="btn btn-ghost"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
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
                onClick={() => setSubmitted(true)}
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </main>
</div>
    </div>
  );
}
