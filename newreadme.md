    if (name === "dob") {
      const birthDate = new Date(value);
      const todayDate = new Date();
      let age = todayDate.getFullYear() - birthDate.getFullYear();
      const m = todayDate.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && todayDate.getDate() < birthDate.getDate())) {
        age--;
      }
      setForm((p) => ({ ...p, dob: value, age }));
    } else {
      setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    }
  };




