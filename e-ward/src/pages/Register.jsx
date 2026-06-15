import React, { useEffect, useState } from "react";

function Register() {
  const [registerData, setRegisterData] = useState({
    user_name: "",
    user_phone_number: "",
    user_citizenship_number: "",
    user_provience: "",
    user_district: "",
    user_municipality: "",
    user_ward_number: "",
  });

  useEffect(() => {
    console.log(registerData);
  }, [registerData]);

  return (
    <div className="min-h-screen w-full flex  flex-col gap-6 justify-center items-center bg-gray-100 ">
      <div className="flex  flex-col gap-6 justify-center items-center bg-gray-100 ">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-2xl font-bold">Register</h1>
        </div>
        <div className="w-full  ">
          <label htmlFor="" className="text-md font-bold ">
            User Name:
          </label>
          <input
            type="text"
            name="user_name"
            value={registerData.user_name}
            onChange={(e) => {
              setRegisterData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            className="border border-gray-400 p-2 rounded-lg w-full mt-1"
          />
        </div>
        <div className="w-full  ">
          <label htmlFor="" className="text-md font-bold ">
            Phone Number:
          </label>
          <input
            type="text"
            name="user_phone_number"
            value={registerData.user_phone_number}
            onChange={(e) => {
              if (e.target.value === undefined || isNaN(Number(e.target.value)))
                return;
              setRegisterData((prev) => ({
                ...prev,
                [e.target.name]: Number(e.target.value).toString(),
              }));
            }}
            placeholder="98XXXXXXXX"
            className="border border-gray-400 p-2 rounded-lg w-full mt-1"
          />
        </div>
        <div className="w-full  ">
          <label htmlFor="" className="text-md font-bold ">
            Citizenship Number:
          </label>
          <input
            type="text"
            name="user_citizenship_number"
            value={registerData.user_citizenship_number}
            onChange={(e) => {
              if (e.target.value === undefined || isNaN(Number(e.target.value)))
                return;
              setRegisterData((prev) => ({
                ...prev,
                [e.target.name]: Number(e.target.value).toString(),
              }));
            }}
            placeholder="12X-XXX-XXX"
            className="border border-gray-400 p-2 rounded-lg w-full mt-1"
          />
        </div>
        <div className="w-full  ">
          <label htmlFor="" className="text-md font-bold ">
            Provience Name:
          </label>
          <select
            name=" user_provience"
            id=""
            value={registerData.user_provience}
            onChange={(e) => {
              setRegisterData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            className="border border-gray-400 p-2 rounded-lg w-full mt-1"
          >
            {[
              "Koshi",
              "Madhesh",
              "Bagmati",
              "Gandaki",
              "Lumbini",
              "Karnali",
              "Sudurpashchim",
            ].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full  ">
          <label htmlFor="" className="text-md font-bold ">
            District Name
          </label>
          <input
            type="text"
            name="user_district"
            value={registerData.user_district}
            onChange={(e) => {
              setRegisterData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            className="border border-gray-400 p-2 rounded-lg w-full mt-1"
          />
        </div>
        <div className="w-full  ">
          <label htmlFor="" className="text-md font-bold ">
            Municipality
          </label>
          <input
            type="text"
            name="user_municipality"
            value={registerData.user_municipality}
            onChange={(e) => {
              setRegisterData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            className="border border-gray-400 p-2 rounded-lg w-full mt-1"
          />
        </div>
        <div className="w-full  ">
          <label htmlFor="" className="text-md font-bold ">
            Citizenship Number:
          </label>
          <input
            type="text"
            name="user_ward_number"
            value={registerData.user_ward_number}
            onChange={(e) => {
              if (e.target.value === undefined || isNaN(Number(e.target.value)))
                return;
              setRegisterData((prev) => ({
                ...prev,
                [e.target.name]: Number(e.target.value).toString(),
              }));
            }}
            placeholder="1"
            className="border border-gray-400 p-2 rounded-lg w-full mt-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
