import { FormControl, MenuItem, Select } from "@mui/material";
import {
  GenderBox,
  MyBox,
  MyButton,
  MyTextField,
  MyTypography,
  NameBox,
  NumberBox,
} from "./FormStyle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useState } from "react";

const Form = () => {
  //=========
  //Form Degiskenleri Tutuldugu
  const [gender, setGender] = useState("Gender");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //============
  //Isim degistirme fonksiyonu
  const nameChange = (name) => {
    setName(name);
  };

  //Phone Number degistirme fonksiyonu
  const phoneNumberChange = (number) => {
    setPhoneNumber(number);
  };

  //Cinsiyet secildiginde degistirme fonksiyonu
  const handleChange = (e) => {
    setGender(e);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", name, "Number : ", phoneNumber, "Gender : ", gender);
  };
  return (
    <MyBox>
      <MyTypography variant="h5" component="h2">
        ADD CONTACT
      </MyTypography>

      <form onSubmit={formSubmit}>
        <FormControl variant="standard">
          <NameBox>
            <AccountBoxIcon
              sx={{
                position: "absolute",
                top: "30px",
                right: "10px",
                fontSize: "2rem",
              }}
            />
            <MyTextField
              type="text"
              id="name"
              label="Name"
              variant="outlined"
              onChange={(e) => nameChange(e.target.value)}
            />
          </NameBox>
          <NumberBox>
            <PhoneAndroidIcon
              sx={{
                position: "absolute",
                top: "30px",
                right: "10px",
                fontSize: "2rem",
              }}
            />
            <MyTextField
              type="number"
              label="Phone Number"
              id="number"
              variant="outlined"
              onChange={(e) => phoneNumberChange(e.target.value)}
            />
          </NumberBox>
          <GenderBox>
            <Select
              id="gender"
              label="Gender"
              sx={{ width: "300px" }}
              value={gender}
              onChange={(e) => handleChange(e.target.value)}
            >
              <MenuItem value="Gender">Gender</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </GenderBox>
          <MyButton type="submit" variant="contained">
            ADD
          </MyButton>
        </FormControl>
      </form>
    </MyBox>
  );
};
export default Form;
