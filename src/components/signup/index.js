import React, { useState, useEffect } from "react";
import { Button, ButtonBasicInv } from "../ButtonElements";
import { MultiStepForm, Step } from "react-multi-form";
import { SigninContainer, SigninWrapper } from "./SignupElements";
import Input from "./input";
import Confirmation from "./Confirmation";
import Declaration from "./Declaration";
import DatePicker from "react-datepicker";
import { Country, State, City } from "country-state-city";
import { getCountries, getStates, getCities } from "country-state-city";
import "react-datepicker/dist/react-datepicker.css";
const Signup = () => {
  const [country, setCountry] = useState("");
  const [countryiso, setcountryiso] = useState();
  const [nationality, setNationality] = useState("");
  const [states, setstates] = useState([]);
  const [state, setstate] = useState();
  const [city, setcity] = useState("");
  const [gender, setgender] = useState("");
  const [active, setActive] = React.useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const countries = Country.getAllCountries();

  const cities = City.getCitiesOfState(countryiso, state);
  // const countries = Country.getAllCountries();

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    const countryisofind = countries.find(
      (country) => country.name === event.target.value
    );
    console.log("countryisofound", countryisofind.isoCode);
    setcountryiso(countryisofind.isoCode);
    setstates(State.getStatesOfCountry(countryisofind.isoCode));
    setcity("");
  };

  const handlenationalityChange = (event) => {
    setNationality(event.target.value);
  };
  const handleStateChange = (event) => {
    setstate(event.target.value);
    setcity("");
  };

  const handleCityChange = (event) => {
    setcity(event.target.value);
  };
  const handleGenderChange = (event) => {
    setgender(event.target.value);
  };
  return (
    <SigninContainer>
      <SigninWrapper>
        <MultiStepForm activeStep={active}>
          <Step label="Personal Information">
            <div>
              <h3 style={{ textAlign: "center" }}>Personal Information</h3>
              <Input
                type="text"
                placeholder="Enter your full name"
                label="Full Name"
              />
              <h8>Enter Date of Birth</h8>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <div style={{ marginTop: "2%" }}>
                <label style={{ marginRight: "2%" }}>Gender: </label>
                <select value={gender} onChange={handleGenderChange}>
                  <option value="">Select your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer Not to Say">Prefer Not to Say</option>
                </select>
              </div>
              <div style={{ marginTop: "3%", marginBottom: "3%" }}>
                <label style={{ marginRight: "2%" }}>Nationality:</label>
                <select value={nationality} onChange={handlenationalityChange}>
                  <option value="">Select your Nationality</option>
                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                type="text"
                placeholder="Enter your address"
                label="Address"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                }}
              >
                <div style={{ marginRight: "2%" }}>
                  <label>Country:</label>
                  <select value={country} onChange={handleCountryChange}>
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country.isoCode} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>State/Province:</label>
                  <select value={state} onChange={handleStateChange}>
                    <option value="">Select a state</option>
                    {states.map((state) => (
                      <option key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                }}
              >
                <div style={{ marginTop: "2%" }}>
                  <label style={{ marginRight: "2%" }}>City: </label>
                  <select value={city} onChange={handleCityChange}>
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <Input
                  type="text"
                  placeholder="Enter your Postal Code"
                  label="Postal Code"
                />
              </div>
              <Input
                type="email"
                placeholder="Enter your e-mail"
                label="Email Address"
              />

              <Input
                type="number"
                placeholder="Enter your phone Number"
                label="Phone Number"
              />
            </div>
          </Step>
          <Step label="Two">
            {console.log("COUNTRY", country)}
            {console.log("city", city)}
            {console.log("nationality", nationality)}
            {console.log("state", state)}
            <p>Two</p>
          </Step>
          <Step label="Declaration">
            <Declaration />
          </Step>
          <Step label="Success">
            <Confirmation role="student" />
          </Step>
        </MultiStepForm>
        {active === 4 && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ButtonBasicInv
              onClick={() => setActive(active - 1)}
              style={{ marginRight: "auto" }}
            >
              Previous
            </ButtonBasicInv>
            <ButtonBasicInv
              onClick={() => setActive(active + 1)}
              style={{ marginLeft: "auto" }}
            >
              Submit
            </ButtonBasicInv>
          </div>
        )}
        {active === 3 && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ButtonBasicInv
              onClick={() => setActive(active - 1)}
              style={{ marginRight: "auto" }}
            >
              Previous
            </ButtonBasicInv>
            <ButtonBasicInv
              onClick={() => setActive(active + 1)}
              style={{ marginLeft: "auto" }}
            >
              Accept
            </ButtonBasicInv>
          </div>
        )}
        {active === 1 && (
          <ButtonBasicInv
            onClick={() => setActive(active + 1)}
            style={{ marginLeft: "auto" }}
          >
            Next
          </ButtonBasicInv>
        )}
        {active === 2 && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ButtonBasicInv
              onClick={() => setActive(active - 1)}
              style={{ marginRight: "auto" }}
            >
              Previous
            </ButtonBasicInv>
            <ButtonBasicInv
              onClick={() => setActive(active + 1)}
              style={{ marginLeft: "auto" }}
            >
              Next
            </ButtonBasicInv>
          </div>
        )}
      </SigninWrapper>
    </SigninContainer>
  );
};
export default Signup;
