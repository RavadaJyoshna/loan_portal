onClick={async () => {
    // Check if the user has agreed to the terms
    if (!form.agree) {
        alert("Please confirm all details are correct to submit your application.");
        return;
    }

    try {
        const formData = {
            ...form,
            applicationId: `SCB-${Date.now()}`,
            status: 'Submitted',
            comment: 'Application submitted via web portal.',
            action: 'Create Record',
            assets: JSON.stringify(form.assets),
            liabilities: JSON.stringify(form.liabilities),
            idProof: form.idProof ? form.idProof.name : null,
            incomeProof: form.incomeProof ? form.incomeProof.name : null,
            addressProof: form.addressProof ? form.addressProof.name : null,
        };

        // This is the crucial part: The URL must be correct.
        const response = await fetch('http://localhost:8080/api/loans', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSubmitted(true);
        } else {
            alert("Application submission failed. Please try again.");
            console.error('Server response:', await response.text());
        }
    } catch (error) {
        alert("An error occurred while connecting to the server. Please check if the backend is running.");
        console.error('Error submitting form:', error);
    }
}}
