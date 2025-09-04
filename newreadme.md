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
