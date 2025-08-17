// ---------- Navigation ----------
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");
const statActive = document.getElementById("statActive");
const sideLinks = document.getElementById("sideLinks");
document.getElementById("toggleNav")?.addEventListener("click", ()=> {
  sideLinks.classList.toggle("hidden");
});

function showSection(id){
  sections.forEach(s=>s.classList.add("hidden"));
  document.getElementById(id)?.classList.remove("hidden");
  navLinks.forEach(l=>l.classList.remove("active"));
  document.querySelector(`.nav-link[data-page="${id}"]`)?.classList.add("active");
}

navLinks.forEach(link=>{
  link.addEventListener("click", (e)=>{
    e.preventDefault();
    const page = link.dataset.page;
    if (page) showSection(page);
  });
});

document.querySelectorAll("[data-page-jump]").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const page = btn.getAttribute("data-page-jump");
    if (page) showSection(page);
  });
});
document.querySelectorAll(".go-apply").forEach(btn=>{
  btn.addEventListener("click", ()=> showSection("apply"));
});

// ---------- Loan chooser -> Loan info ----------
const loanCards = document.querySelectorAll(".loan-card");
const loanInfo = document.getElementById("loanInfo");
const loanInfoTitle = document.getElementById("loanInfoTitle");
const loanInfoSubtitle = document.getElementById("loanInfoSubtitle");
const loanInfoImage = document.getElementById("loanInfoImage");
const highlightsBox = document.getElementById("loanHighlights");
const eligibilityPanel = document.getElementById("eligibilityPanel");
const documentsPanel = document.getElementById("documentsPanel");
const ratesPanel = document.getElementById("ratesPanel");
const proceedBtn = document.getElementById("proceedBtn");
const backToApply = document.getElementById("backToApply");

let selectedLoan = null;

const loanContent = {
  home:{
    title:"🏠 Home Loan",
    subtitle:"Own your dream home with competitive rates and longer tenures.",
    image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    highlights:[
      "Attractive interest rates and longer tenures up to 30 years",
      "Higher loan eligibility basis income & profile",
      "Balance transfer and top-up options",
    ],
    eligibility:[
      "Salaried / self-employed Indian resident",
      "Stable income & credit history",
      "Min. age 21 at application, 60 at maturity",
    ],
    documents:[
      "KYC: Aadhaar, PAN, Address proof",
      "Income: salary slips / bank statements",
      "Property documents (agreement, approvals)",
    ],
    rates:[
      "Interest: starts ~ 8.5% p.a. (indicative)",
      "Processing fee: up to 1% (indicative)",
      "Prepayment charges: as per policy",
    ],
    detailsFields: `
      <div class="grid-2">
        <div class="field">
          <label>Property Value (₹)</label>
          <input type="number" name="propertyValue" min="500000" step="50000" required/>
        </div>
        <div class="field">
          <label>Location / City</label>
          <input type="text" name="propertyLocation" required/>
        </div>
      </div>
      <div class="grid-2">
        <div class="field">
          <label>Loan Amount (₹)</label>
          <input type="number" name="loanAmount" id="prefillAmount" min="500000" step="50000" required/>
        </div>
        <div class="field">
          <label>Tenure (months)</label>
          <input type="number" name="tenureMonths" id="prefillTenure" min="60" step="6" required/>
        </div>
      </div>
    `
  },
  personal:{
    title:"👤 Personal Loan",
    subtitle:"Instant funds with minimal documentation and fast approvals.",
    image:"https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1600&auto=format&fit=crop",
    highlights:[
      "Quick disbursal with simple documentation",
      "No collateral required",
      "Flexible tenures up to 60 months",
    ],
    eligibility:[
      "Salaried individuals with stable income",
      "Min. age 21 at application",
      "Good credit history",
    ],
    documents:[
      "KYC: Aadhaar, PAN",
      "Income proof: salary slips / bank statements",
      "Employment proof: ID card / offer letter",
    ],
    rates:[
      "Interest: starts ~ 10.99% p.a. (indicative)",
      "Processing fee: up to 2% (indicative)",
      "Pre-closure: as per policy",
    ],
    detailsFields: `
      <div class="grid-2">
        <div class="field">
          <label>Purpose</label>
          <input type="text" name="purpose" placeholder="Education, travel, medical..." required/>
        </div>
        <div class="field">
          <label>Loan Amount (₹)</label>
          <input type="number" name="loanAmount" id="prefillAmount" min="50000" step="5000" required/>
        </div>
      </div>
      <div class="grid-2">
        <div class="field">
          <label>Tenure (months)</label>
          <input type="number" name="tenureMonths" id="prefillTenure" min="6" step="1" required/>
        </div>
        <div class="field">
          <label>Existing Monthly Obligations (₹)</label>
          <input type="number" name="existingObligations" step="500"/>
        </div>
      </div>
    `
  },
  vehicle:{
    title:"🚗 Vehicle Loan",
    subtitle:"Bring your dream car/bike home with tailored finance options.",
    image:"https://imgs.search.brave.com/aS-PLOKpTqTEeHAOMrxCREMpvJdom23Y82wXf0UcQjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTAxMzg2My92ZWN0/b3IvY2FyLWxvYW4t/b3ItdmVoaWNsZS1y/ZW50YWwtY29uY2Vw/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9aUJCSFNHeldG/WlNNLWJtbFpxYi0y/NWVHNmdqVk5QT1Zi/N0FXdl9EWVFEcz0",
    highlights:[
      "Up to 100% on-road funding (eligibility based)",
      "Attractive ROI and flexible EMIs",
      "New or used cars and two-wheelers",
    ],
    eligibility:[
      "Salaried / self-employed with stable income",
      "Valid driving documents",
      "Good credit profile",
    ],
    documents:[
      "KYC: Aadhaar, PAN",
      "Income proof",
      "Proforma invoice / vehicle quotation",
    ],
    rates:[
      "Interest: starts ~ 9.25% p.a. (indicative)",
      "Processing fee: as per scheme",
      "Foreclosure charges: as applicable",
    ],
    detailsFields: `
      <div class="grid-2">
        <div class="field">
          <label>Vehicle Type</label>
          <select name="vehicleType" required>
            <option value="">Select</option>
            <option>Car</option>
            <option>Bike</option>
            <option>Commercial</option>
          </select>
        </div>
        <div class="field">
          <label>Vehicle Model</label>
          <input type="text" name="vehicleModel" required/>
        </div>
      </div>
      <div class="grid-2">
        <div class="field">
          <label>Loan Amount (₹)</label>
          <input type="number" name="loanAmount" id="prefillAmount" min="50000" step="5000" required/>
        </div>
        <div class="field">
          <label>Tenure (months)</label>
          <input type="number" name="tenureMonths" id="prefillTenure" min="12" step="1" required/>
        </div>
      </div>
    `
  }
};

loanCards.forEach(card=>{
  card.addEventListener("click", ()=>{
    const key = card.dataset.loan;
    selectedLoan = key;
    const d = loanContent[key];

    loanInfoTitle.textContent = d.title;
    loanInfoSubtitle.textContent = d.subtitle;
    loanInfoImage.src = d.image;
    highlightsBox.innerHTML = d.highlights.map(h => (
      `<div class="bullet"><span class="dot"></span><div>${h}</div></div>`
    )).join("");

    eligibilityPanel.innerHTML = `<ul>${d.eligibility.map(i=>`<li>${i}</li>`).join("")}</ul>`;
    documentsPanel.innerHTML = `<ul>${d.documents.map(i=>`<li>${i}</li>`).join("")}</ul>`;
    ratesPanel.innerHTML = `<ul>${d.rates.map(i=>`<li>${i}</li>`).join("")}</ul>`;

    showSection("loanInfo");
  });
});

document.querySelectorAll(".acc-trigger").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const next = btn.nextElementSibling;
    next.classList.toggle("show");
  });
});

backToApply.addEventListener("click", ()=> showSection("apply"));

// ---------- Proceed -> Wizard ----------
const loanFormSection = document.getElementById("loanFormSection");
const loanDetailsStep = document.getElementById("loanDetailsStep");
const formTitle = document.getElementById("formTitle");
const loanChip = document.getElementById("loanChip");

proceedBtn.addEventListener("click", ()=>{
  if(!selectedLoan) return;
  const d = loanContent[selectedLoan];
  formTitle.textContent = `${d.title} Application`;
  loanChip.textContent = d.title.replace(/^[^A-Z]*\s*/,"");
  // inject loan-specific fields above EMI box
  loanDetailsStep.innerHTML = d.detailsFields + loanDetailsStep.innerHTML;
  showSection("loanFormSection");
});

// ---------- Wizard navigation ----------
const steps = document.querySelectorAll(".step");
const stepPanels = document.querySelectorAll(".form-step");
let currentStep = 0;

function setStep(i){
  if (i < 0 || i >= stepPanels.length) return;
  stepPanels.forEach(p=>p.classList.remove("active"));
  steps.forEach(s=>s.classList.remove("active"));
  stepPanels[i].classList.add("active");
  steps[i].classList.add("active");
  currentStep = i;
  // Toggle buttons
  document.getElementById("prevBtn").disabled = (i===0);
  document.getElementById("submitBtn").style.display = (i===stepPanels.length-1) ? "inline-block" : "none";
  document.getElementById("nextBtn").style.display = (i===stepPanels.length-1) ? "none" : "inline-block";
}
steps.forEach((s,i)=> s.addEventListener("click", ()=> setStep(i)));
document.getElementById("prevBtn").addEventListener("click", ()=> setStep(currentStep-1));
document.getElementById("nextBtn").addEventListener("click", ()=> {
  // simple inline validation for current step required fields
  const activePanel = stepPanels[currentStep];
  const fields = activePanel.querySelectorAll("input[required], select[required]");
  for (const f of fields){
    if (!f.checkValidity()){
      f.reportValidity();
      return;
    }
  }
  // When moving to Review step, build summary
  if (currentStep === stepPanels.length-2){
    buildReview();
  }
  setStep(currentStep+1);
});
setStep(0);

// ---------- EMI calculator (in wizard step 3) ----------
function formatINR(n){
  return n.toLocaleString('en-IN', {maximumFractionDigits:0});
}
document.getElementById("calcEmiBtn").addEventListener("click", ()=>{
  const P = +document.getElementById("emiAmount").value;
  const r = (+document.getElementById("emiRate").value)/12/100;
  const N = +document.getElementById("emiTenure").value;
  if (!P || !r || !N) { alert("Please fill Loan Amount, Interest and Tenure."); return; }
  const emi = (P*r*Math.pow(1+r,N))/(Math.pow(1+r,N)-1);
  const total = emi*N;
  const interest = total - P;
  document.getElementById("emiValue").textContent = `₹ ${formatINR(Math.round(emi))}`;
  document.getElementById("emiInterest").textContent = `₹ ${formatINR(Math.round(interest))}`;
  document.getElementById("emiTotal").textContent = `₹ ${formatINR(Math.round(total))}`;
});

// ---------- Review builder ----------
function buildReview(){
  const fd = new FormData(document.getElementById("loanForm"));
  const obj = Object.fromEntries(fd.entries());
  const lines = [];
  lines.push(`<strong>Loan Type:</strong> ${loanContent[selectedLoan].title}`);
  ["fullName","email","mobile","dob","employmentType","company","income","experience","purpose","propertyValue","propertyLocation","vehicleType","vehicleModel","loanAmount","tenureMonths","existingObligations"].forEach(k=>{
    if (obj[k]) lines.push(`<strong>${labelize(k)}:</strong> ${escapeHtml(obj[k])}`);
  });
  const emiText = document.getElementById("emiValue").textContent !== "—"
    ? `<div class="emi-summary">EMI: <strong>${document.getElementById("emiValue").textContent}</strong> | Total Payment: <strong>${document.getElementById("emiTotal").textContent}</strong></div>`
    : `<div class="emi-summary muted">EMI not calculated yet.</div>`;
  document.getElementById("reviewContent").innerHTML = lines.map(l=>`<div>${l}</div>`).join("") + emiText;
}
function labelize(k){
  return k
    .replace(/([A-Z])/g,' $1')
    .replace(/^./, s=>s.toUpperCase())
    .replace("Dob","Date of Birth")
    .replace("Kyc","KYC");
}
function escapeHtml(s){
  const d = document.createElement('div'); d.innerText = s; return d.innerHTML;
}

// ---------- Submission & status ----------
const loanForm = document.getElementById("loanForm");
const statusList = document.getElementById("statusList");

function loadStatus(){
  const data = JSON.parse(localStorage.getItem("scbApps")||"[]");
  renderStatus(data);
}
function renderStatus(arr){
  statusList.innerHTML = "";
  arr.forEach(item=>{
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <div><strong>${item.refId}</strong> — ${item.loanType}</div>
        <div class="muted small">${item.fullName} • ${item.email} • ${item.mobile}</div>
      </div>
      <div class="pill">${item.status}</div>
    `;
    statusList.appendChild(li);
  });
  statActive.textContent = arr.length;
}
loadStatus();

loanForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  // simple check for consent
  const consent = document.getElementById("consentChk");
  if (!consent.checked){ alert("Please confirm consent before submitting."); return; }

  const fd = new FormData(loanForm);
  const obj = Object.fromEntries(fd.entries());
  obj.loanType = loanContent[selectedLoan].title;
  obj.refId = "SCB" + Math.floor(100000 + Math.random()*900000);
  obj.status = "Pending review (2–3 days)";

  const apps = JSON.parse(localStorage.getItem("scbApps")||"[]");
  apps.push(obj);
  localStorage.setItem("scbApps", JSON.stringify(apps));

  alert(`Thank you for applying!\nReference ID: ${obj.refId}\nWe will contact you in 2–3 working days.`);
  loanForm.reset();
  // Reset stepper visual & injected fields for a fresh form
  setStep(0);
  document.getElementById("emiValue").textContent = "—";
  document.getElementById("emiInterest").textContent = "—";
  document.getElementById("emiTotal").textContent = "—";
  // Re-render status page
  loadStatus();
  // Jump to status page
  showSection("loanStatus");
});

// ---------- Misc ----------
document.getElementById("logoutBtn").addEventListener("click", ()=>{
  alert("You have been logged out.");
  showSection("Overview");
});
document.getElementById("saveBtn").addEventListener("click", ()=> alert("Saved for later (demo)."));
document.getElementById("shareBtn").addEventListener("click", ()=> {
  navigator.clipboard?.writeText(location.href);
  alert("Page URL copied. Share with your advisor.");
});



// default landing
showSection("Overview");
