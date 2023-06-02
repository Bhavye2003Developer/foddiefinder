// Create a new React component file, e.g., PersonalDetailsForm.js.
// Import React and any necessary dependencies.
import React, { useState } from "react";
// Define the PersonalDetailsForm component.
//Define the CSS styles as an object or import an external CSS file.
const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
  },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginBottom: '15px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    margin: '5px',
    padding: '10px 171px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '16px',
  },
  submitButtonHover: {
    backgroundColor: '#45a049',
  },
};


//Update the PersonalDetailsForm component to use the CSS styles.

function PersonalDetailsForm() {
  return (
    <div style={styles.body}>
      <form style={styles.form}>
        <label htmlFor="height" style={styles.label}>
          Height (in cm):
        </label>
        <input type="number" id="height" name="height" required style={styles.input} />

        <label htmlFor="weight" style={styles.label}>
          Weight (in kg):
        </label>
        <input type="number" id="weight" name="weight" required style={styles.input} />

        <label htmlFor="age" style={styles.label}>
          Age:
        </label>
        <input type="number" id="age" name="age" required style={styles.input} />

        <label htmlFor="gender" style={styles.label}>
          Gender:
        </label>
        <select id="gender" name="gender" required style={styles.input}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="activity" style={styles.label}>
          Activity Level:
        </label>
        <select id="activity" name="activity" required style={styles.input}>
          <option value="">Select</option>
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="lightly_active">Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value="moderately_active">Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value="very_active">Very active (hard exercise/sports 6-7 days a week)</option>
          <option value="extra_active">Extra active (very hard exercise/sports & physical job or 2x training)</option>
        </select>

        <label htmlFor="goal" style={styles.label}>
          Body Goal:
        </label>
        <input type="text" id="goal" name="goal" required style={styles.input} />

        <input type="submit" value="Submit" style={styles.submitButton} />
      </form>
    </div>
  );
}

//Export the PersonalDetailsForm component.

export default PersonalDetailsForm;
