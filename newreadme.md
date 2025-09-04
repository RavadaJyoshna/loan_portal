CREATE TABLE home_Loan(
id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
application_id VARCHAR(50) NOT NULL,
loan_type VARCHAR(50),
status VARCHAR(30),
name VARCHAR(100),
email VARCHAR(100),
phone VARCHAR(20),
dob DATE,
age int,
marital_status VARCHAR(20),
aadhar_number VARCHAR (20)
pan_number VARCHAR(20),
gender VARCHAR(10),
residence_type VARCHAR(50),
address TEXT,
city VARCHAR(50),
state VARCHAR(50),
pincode VARCHAR(10),
ref_name VARCHAR(100),
ref_relation VARCHAR(50),
ref_contact VARCHAR(20),
ref_address TEXT,
employment VARCHAR(50)
employer_name VARCHAR(100),
employment_start VARCHAR(50),
designation VARCHAR(50),
work_experience INT,
monthly_income DECIMAL(15,2),
other_income DECIMAL(15,2),
loan_amount DECIMAL(15,2),
tenure INT,
purpose VARCHAR (255),
occupancy VARCHAR(50), 
interest_rate DECIMAL(5,2), 
down_payment DECIMAL(15,2),
assets TEXT,
liabilities TEXT, 
existing_loan VARCHAR(3),
property_type VARCHAR(100),
property_value DECIMAL(15,2),
property_address TEXT,
property_city VARCHAR(50),
property_state VARCHAR(50),
property_pincode VARCHAR(10),
co_applicant VARCHAR(3),
id_proof TEXT, 
income_proof TEXT, 
address_proof TEXT,
sale_agreement TEXT, 
comment TEXT,
action VARCHAR (50)
);















CREATE TABLE vehicle_Loan(
id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
application_id VARCHAR(50) NOT NULL,
loan_type VARCHAR(50),
status VARCHAR(30),
name VARCHAR(100),
email VARCHAR(100),
phone VARCHAR(20),
dob DATE,
age int,
marital_status VARCHAR(20),
aadhar_number VARCHAR (20)
pan_number VARCHAR(20),
gender VARCHAR(10),
residence_type VARCHAR(50),
address TEXT,
city VARCHAR(50),
state VARCHAR(50),
pincode VARCHAR(10),
ref_name VARCHAR(100),
ref_relation VARCHAR(50),
ref_contact VARCHAR(20),
ref_address TEXT,
employment VARCHAR(50)
employer_name VARCHAR(100),
employment_start VARCHAR(50),
designation VARCHAR(50),
work_experience INT,
monthly_income DECIMAL(15,2),
other_income DECIMAL(15,2),
loan_amount DECIMAL(15,2),
tenure INT,
purpose VARCHAR (255), 
interest_rate DECIMAL(5,2), 
down_payment DECIMAL(15,2),
assets TEXT,
liabilities TEXT, 
existing_loan VARCHAR(3),
vehicle_type VARCHAR(100),
vehicle_make VARCHAR(100),
vehicle_model VARCHAR(100),
vehicle_year INT,
vehicle_price DECIMAL(15,2),
new_or_used VARCHAR(10)
co_applicant VARCHAR(3),
id_proof TEXT, 
income_proof TEXT, 
address_proof TEXT,
dealer_invoice TEXT, 
comment TEXT,
action VARCHAR (50)
);




