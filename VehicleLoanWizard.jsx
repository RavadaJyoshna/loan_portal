import React, { useMemo, useState } from "react";
import "../LoanWizardFull.css";

export default function VehicleLoanWizard() {
  const steps = [
    "Personal Info",
    "Employment",
    "Loan Details",
    "Financials",
    "Vehicle Info",
    "Declarations",
    "EMI Calculator",
    "Review",
  ];

  const [step, setStep] = useState(0);
  const [loanType, setLoanType] = useState("Vehicle Loan");
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
    residenceType: "",
    address: "",
    city: "",
    state: "",
    pincode: "",

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
    interestRate: "9.0",
    downPayment: "",

    // Financials
    assets: [{ type: "Savings A/c", amount: "" }],
    liabilities: [{ type: "Credit Card", amount: "", emi: "" }],
    existingEmis: "no",

    // Vehicle Info
    vehicleType: "Car",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehiclePrice: "",
    newOrUsed: "New",
    coApplicant: "no",
    coName: "",
    coRelation: "",
    coIncome: "",

    // Declarations
    hasJudgements: "no",
    bankrupt: "no",
    repossessed: "no",
    politicallyExposed: "no",
    agree: false,
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
      return {
        ...p,
        [listName]: copy.length
          ? copy
          : [listName === "assets" ? { type: "", amount: "" } : { type: "", amount: "", emi: "" }],
      };
    });
  };

  const calculateEMI = () => {
    const P = parseFloat(form.loanAmount) || 0;
    const annual = parseFloat(form.interestRate) || 0;
    const r = annual / 100 / 12;
    const n = (parseInt(form.tenure, 10) || 0) * 12;
    if (P <= 0 || r <= 0 || n <= 0) return 0;
    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  const progressPct = Math.round((step / (steps.length - 1)) * 100);

if (submitted) {
  return (
    <div className="content">
      <div className="card">
        <h2>🎉 Application Submitted!</h2>
        <p>
          Thank you {form.name}, your loan application has been submitted successfully.
          Your reference ID is <strong>SCB-{refId}</strong>.
        </p>
        <p>
          Our team will get back to you in <strong>2–3 working days</strong>. Please stay in touch with us via email or phone.
        </p>

        {/* Back Button */}
        <div className="form-navigation" style={{ marginTop: "20px", textAlign: "center" }}>
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
{/* Sidebar replaces Topbar */}
<aside className="sidebar">
  <div className="logo">
    <img src="https://av.sc.com/corp-en/nr/content/images/sc-lock-up-english-grey-rgb.png" alt="Standard Chartered" />
  </div>
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
        {/* Profile Section */}
<div className="profile-bar">
  <div className="profile-info">
    <span className="profile-name">Welcome, User</span>
    <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      alt="Profile"
      className="profile-avatar"
    />
  </div>
</div>
{/* Loan Type Display */}
  <div className="loan-type-banner">
    <h2>{loanType}</h2>
  </div>
        <div className="page-header">
          <div>
            <h1>{steps[step]}</h1>
            <p>Step {step + 1} of {steps.length}</p>
            <p className="loan-type-label">{loanType} Loan</p>
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
                <input name="state" value={form.state} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Pincode</label>
                <input name="pincode" inputMode="numeric" value={form.pincode} onChange={handleChange} />
              </div>
            </div>
          )}

          {/* STEP 1: EMPLOYMENT */}
          {step === 1 && (
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

          {/* STEP 2: LOAN DETAILS */}
          {step === 2 && (
            <div className="form-step active grid-2">
              <div className="field">
                <label>Desired Loan Amount (₹)</label>
                <input name="loanAmount" inputMode="numeric" value={form.loanAmount} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Tenure (Years)</label>
                <input name="tenure" inputMode="numeric" value={form.tenure} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Interest Rate (% p.a.)</label>
                <input name="interestRate" inputMode="decimal" value={form.interestRate} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Down Payment (₹)</label>
                <input name="downPayment" inputMode="numeric" value={form.downPayment} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Purpose</label>
                <select name="purpose" value={form.purpose} onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Purchase of New Vehicle</option>
                  <option>Purchase of Used Vehicle</option>
                  <option>Refinance Existing Vehicle Loan</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 3: FINANCIALS */}
          {step === 3 && (
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

          {/* STEP 4: VEHICLE INFO */}
          {step === 4 && (
            <div className="form-step active grid-2">
              <div className="field">
                <label>Vehicle Type</label>
                <select name="vehicleType" value={form.vehicleType} onChange={handleChange}>
                  <option>Car</option>
                  <option>Two-Wheeler</option>
                  <option>Commercial Vehicle</option>
                </select>
              </div>
              <div className="field">
                <label>Make</label>
                <input name="vehicleMake" value={form.vehicleMake} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Model</label>
                <input name="vehicleModel" value={form.vehicleModel} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Manufacturing Year</label>
                <input name="vehicleYear" inputMode="numeric" value={form.vehicleYear} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Price (₹)</label>
                <input name="vehiclePrice" inputMode="numeric" value={form.vehiclePrice} onChange={handleChange} />
              </div>
              <div className="field">
                <label>New or Used?</label>
                <select name="newOrUsed" value={form.newOrUsed} onChange={handleChange}>
                  <option>New</option>
                  <option>Used</option>
                </select>
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

          {/* STEP 5: DECLARATIONS */}
          {step === 5 && (
            <div className="form-step active grid-2">
              <div className="field">
                <label>Any court judgements against you?</label>
                <select name="hasJudgements" value={form.hasJudgements} onChange={handleChange}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div className="field">
                <label>Declared bankruptcy in last 7 years?</label>
                <select name="bankrupt" value={form.bankrupt} onChange={handleChange}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div className="field">
                <label>Vehicle repossessed in past?</label>
                <select name="repossessed" value={form.repossessed} onChange={handleChange}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div className="field">
                <label>Politically exposed person (PEP)?</label>
                <select name="politicallyExposed" value={form.politicallyExposed} onChange={handleChange}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div className="consent" style={{ marginTop: 12 }}>
                <input type="checkbox" id="consent" name="agree" checked={form.agree} onChange={handleChange} />{" "}
                <label htmlFor="consent">I confirm all details are true and authorize verification.</label>
              </div>
            </div>
          )}

          {/* STEP 6: EMI CALCULATOR */}
          {step === 6 && (
            <div className="form-step active emi-box">
              <h3>Estimated EMI</h3>
              <div className="grid-3">
                <div className="field">
                  <label>Loan Amount (₹)</label>
                  <input name="loanAmount" inputMode="numeric" value={form.loanAmount} onChange={handleChange} />
                </div>
                <div className="field">
                  <label>Tenure (Years)</label>
                  <input name="tenure" inputMode="numeric" value={form.tenure} onChange={handleChange} />
                </div>
                <div className="field">
                  <label>Interest Rate (% p.a.)</label>
                  <input name="interestRate" inputMode="decimal" value={form.interestRate} onChange={handleChange} />
                </div>
              </div>
              <div className="emi-results" style={{ marginTop: 12 }}>
                <div className="emi-line">
                  <span>Monthly EMI</span>
                  <strong>₹ {Math.round(calculateEMI()).toLocaleString("en-IN")}</strong>
                </div>
                <div className="emi-line">
                  <span>Total Payable</span>
                  <strong>
                    ₹ {Math.round(calculateEMI() * ((parseInt(form.tenure, 10) || 0) * 12)).toLocaleString("en-IN")}
                  </strong>
                </div>
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
                <li><span>Marital Status</span><span>{form.maritalStatus}</span></li>
                <li><span>Dependents</span><span>{form.dependents}</span></li>
                <li><span>ID</span><span>{form.idType} • {form.idNumber}</span></li>
                <li><span>Address</span><span>{form.address}, {form.city}, {form.state} {form.pincode}</span></li>
                <li><span>Employment</span><span>{form.employment}</span></li>
                <li><span>Employer</span><span>{form.employerName}</span></li>
                <li><span>Income</span><span>₹ {Number(form.monthlyIncome || 0).toLocaleString("en-IN")}</span></li>
                <li><span>Other Income</span><span>₹ {Number(form.otherIncome || 0).toLocaleString("en-IN")}</span></li>
                <li><span>Loan Amount</span><span>₹ {Number(form.loanAmount || 0).toLocaleString("en-IN")}</span></li>
                <li><span>Tenure</span><span>{form.tenure} years</span></li>
                <li><span>Interest</span><span>{form.interestRate}% p.a.</span></li>
                <li><span>Down Payment</span><span>₹ {Number(form.downPayment || 0).toLocaleString("en-IN")}</span></li>
                <li><span>Vehicle</span><span>{form.vehicleType} • {form.vehicleMake} {form.vehicleModel} ({form.vehicleYear})</span></li>
                <li><span>Vehicle Price</span><span>₹ {Number(form.vehiclePrice || 0).toLocaleString("en-IN")}</span></li>
                <li><span>New/Used</span><span>{form.newOrUsed}</span></li>
                <li><span>Declarations</span><span>
                  Judgements: {form.hasJudgements} • Bankruptcy: {form.bankrupt} • Repossessed: {form.repossessed} • PEP: {form.politicallyExposed}
                </span></li>
              </ul>
              <div className="consent">
                <input type="checkbox" id="final-consent" name="agree" checked={form.agree} onChange={handleChange} />{" "}
                <label htmlFor="final-consent">I confirm all details are correct.</label>
              </div>
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
              <button className="btn btn-primary" onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}>
                Next
              </button>
            ) : (
              <button className="btn btn-primary" disabled={!form.agree} onClick={() => setSubmitted(true)}>
                Submit Application
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
