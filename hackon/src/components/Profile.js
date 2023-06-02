import React, { useState } from "react";

function PersonalDetailsForm() {
  // State variables
  const [vegetarian, setIsVegetarian] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activity_level, setActivityLevel] = useState("");
  const [body_goal, setBodyGoal] = useState("");

  const handleVegetarianChange = (e) => {
    setIsVegetarian(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data to be sent in the request body
    const requestData = {
      height,
      weight,
      age,
      gender,
      vegetarian,
      activity_level,
      body_goal,
    };
    // console.log(JSON.stringify(requestData))
    fetch("http://localhost:8000/bio/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
        // Reset the form
        setHeight("");
        setWeight("");
        setAge("");
        setGender("");
        setIsVegetarian(false);
        setActivityLevel("");
        setBodyGoal("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="max-w-md p-6 bg-white rounded shadow">
        <label className="block mb-2 font-bold" htmlFor="height">
          Height (in cm):
        </label>
        <input
          className="w-full px-3 py-2 mb-4 border rounded"
          type="number"
          id="height"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label className="block mb-1 font-bold" htmlFor="weight">
          Weight (in kg):
        </label>
        <input
          className="w-full px-3 py-1 mb-4 border rounded"
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label className="block mb-1 font-bold" htmlFor="age">
          Age:
        </label>
        <input
          className="w-full px-3 py-1 mb-4 border rounded"
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label className="block mb-1 font-bold" htmlFor="gender">
          Gender:
        </label>
        <select
          className="w-full px-3 py-1 mb-2 border rounded"
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div className="flex items-center mb-4">
          <input
            className="mr-2"
            type="checkbox"
            id="vegetarian"
            name="vegetarian"
            checked={vegetarian}
            onChange={handleVegetarianChange}
          />
          <label htmlFor="vegetarian">Vegetarian</label>
        </div>

        <label className="block mb-2 font-bold" htmlFor="activity">
          Activity Level:
        </label>
        <select
          className="w-full px-3 py-2 mb-4 border rounded"
          id="activity"
          name="activity"
          value={activity_level}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="">Select</option>
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="lightly_active">
            Lightly active (light exercise/sports 1-3 days/week)
          </option>
          <option value="moderately_active">
            Moderately active (moderate exercise/sports 3-5 days/week)
          </option>
          <option value="very_active">
            Very active (hard exercise/sports 6-7 days a week)
          </option>
          <option value="extra_active">
            Extra active (very hard exercise/sports & physical job or 2x
            training)
          </option>
        </select>

        <label className="block mb-2 font-bold" htmlFor="goal">
          Body Goal:
        </label>
        <input
          className="w-full px-3 py-2 mb-4 border rounded"
          type="text"
          id="goal"
          name="goal"
          value={body_goal}
          onChange={(e) => setBodyGoal(e.target.value)}
        />

        <button
          className="w-full px-6 py-3 font-bold text-white bg-orange-500 rounded hover:bg-orange-700 cursor-pointer"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;
