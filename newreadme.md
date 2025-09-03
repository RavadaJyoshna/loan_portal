onClick={async () => {
    // Check if the user has agreed to the terms
    if (!form.agree) {
        alert("Please confirm all details are correct to submit your application.");
        return; // Stop the function if the user hasn't agreed
    }

    try {
        // Prepare the data to be sent to the backend
        const formData = {
            ...form,
            // These backend fields will be set on the server-side
            applicationId: `SCB-${Date.now()}`,
            status: 'Submitted',
            comment: 'Application submitted via web portal.',
            action: 'Create Record',
            // Convert assets and liabilities arrays to JSON strings
            assets: JSON.stringify(form.assets),
            liabilities: JSON.stringify(form.liabilities),
            // The file uploads will be handled separately; for now, we send their file names
            idProof: form.idProof ? form.idProof.name : null,
            incomeProof: form.incomeProof ? form.incomeProof.name : null,
            addressProof: form.addressProof ? form.addressProof.name : null,
        };

        // Send a POST request to your backend API endpoint
        const response = await fetch('http://localhost:8080/api/loans', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Handle the response from the backend
        if (response.ok) {
            // If the submission was successful, show the success screen
            setSubmitted(true);
        } else {
            // If there was a server error, show an alert
            alert("Application submission failed. Please try again.");
            console.error('Server response:', await response.text());
        }
    } catch (error) {
        // If there was a network error, show an alert
        alert("An error occurred while connecting to the server. Please check if the backend is running.");
        console.error('Error submitting form:', error);
    }
}}
