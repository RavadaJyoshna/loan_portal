import React, { useState } from "react";
import "../LoanWizardFull.css";

export default function HomeLoanWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    income: "",
    loanAmount: "",
    tenure: "",
    propertyValue: "",
    employment: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const refId = Math.floor(Math.random() * 1000000);

  const steps = ["Personal Info", "Loan Details", "Property Info", "EMI Calculator", "Review"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateEMI = () => {
    const P = parseFloat(form.loanAmount) || 0;
    const r = 0.08 / 12; // 8% annual
    const n = parseInt(form.tenure) * 12 || 1;
    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

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
            Our team will get back to you in <strong>2–3 working days</strong>.  
            Please stay in touch with us via email or phone.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Standard_Chartered_%282021%29.svg"
            alt="SCB Logo"
          />
        </div>
        <nav className="side-links">
          {steps.map((s, i) => (
            <button
              key={i}
              className={`nav-link ${step === i ? "active" : ""}`}
              onClick={() => setStep(i)}
            >
              <span>{s}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        <div className="page-header">
          <div>
            <h1>{steps[step]}</h1>
            <p>Step {step + 1} of {steps.length}</p>
          </div>
        </div>

        <div className="card">
          {/* Step 0: Personal Info */}
          {step === 0 && (
            <div className="form-step active">
              <div className="field">
                <label>Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Email</label>
                <input name="email" value={form.email} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Employment Type</label>
                <select name="employment" value={form.employment} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self-Employed</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 1: Loan Details */}
          {step === 1 && (
            <div className="form-step active">
              <div className="field">
                <label>Monthly Income</label>
                <input name="income" value={form.income} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Desired Loan Amount</label>
                <input name="loanAmount" value={form.loanAmount} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Tenure (Years)</label>
                <input name="tenure" value={form.tenure} onChange={handleChange} />
              </div>
            </div>
          )}

          {/* Step 2: Property Info */}
          {step === 2 && (
            <div className="form-step active">
              <div className="field">
                <label>Property Value</label>
                <input name="propertyValue" value={form.propertyValue} onChange={handleChange} />
              </div>
              <div className="field">
                <label>City</label>
                <input name="city" value={form.city} onChange={handleChange} />
              </div>
            </div>
          )}

          {/* Step 3: EMI Calculator */}
          {step === 3 && (
            <div className="form-step active emi-box">
              <h3>Estimated EMI</h3>
              <div className="emi-results">
                <div className="emi-line">
                  <span>Monthly EMI</span>
                  <strong>₹ {calculateEMI().toFixed(0)}</strong>
                </div>
                <div className="emi-line">
                  <span>Total Payable</span>
                  <strong>₹ {(calculateEMI() * (form.tenure * 12 || 1)).toFixed(0)}</strong>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div className="form-step active review">
              <h3>Review Your Application</h3>
              <ul className="status-list">
                <li><span>Name</span><span>{form.name}</span></li>
                <li><span>Email</span><span>{form.email}</span></li>
                <li><span>Phone</span><span>{form.phone}</span></li>
                <li><span>Employment</span><span>{form.employment}</span></li>
                <li><span>Income</span><span>{form.income}</span></li>
                <li><span>Loan Amount</span><span>{form.loanAmount}</span></li>
                <li><span>Tenure</span><span>{form.tenure} years</span></li>
                <li><span>Property Value</span><span>{form.propertyValue}</span></li>
                <li><span>City</span><span>{form.city}</span></li>
              </ul>
              <div className="consent">
                <input type="checkbox" id="consent" />{" "}
                <label htmlFor="consent">I confirm all details are correct.</label>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="form-navigation">
            <button
              className="btn btn-ghost"
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
            {step < steps.length - 1 ? (
              <button className="btn btn-primary" onClick={() => setStep(step + 1)}>
                Next
              </button>
            ) : (
              <button className="btn btn-primary" onClick={() => setSubmitted(true)}>
                Submit Application
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
