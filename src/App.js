import React, { Component } from "react";
import styled from "styled-components";
import config from "./config";
import $ from "jquery";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 800px 800px;
  grid-gap: 20px 20px;
  min-width: 0;
  min-height: 0;
  font-family: "Roboto", sans-serif;
  color: rgb(105, 105, 105);
`;

const Image2 = styled.img`
  width: 1600px;
  grid-column: 1;
  grid-row: 2;
  text-align: center;
  min-width: 0;
  min-height: 0;
  z-index: -1;
  position: relative;
`;

const Header2 = styled.div`
  margin-top: 45px;
  margin-left: 100px;
  font-size: 70px;
  font-color: rgb(0, 0, 128);
  grid-column: 1 / span2;
  grid-row: 2;
  text-align: left;
  font-family: Impact, Charcoal, sans-serif;
`;

const Header = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 56px;
  grid-column: 1 / span2;
  grid-row: 2;
  text-align: center;
  font-family: Impact, Charcoal, sans-serif;
`;

const MenuBar = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;
  overflow: hidden;
  img {
    display: inline-block;
    margin: 10px;
  }
`;

const Panel = styled.div`
  border-radius: 20px;
  grid-column: 1 / span 2;
  grid-row: 3;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 150px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel2 = styled.div`
  border-radius: 20px;
  grid-column: 1;
  grid-row: 4;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 350px;
  overflow-y: scroll;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel3 = styled.div`
  border-radius: 20px;
  grid-column: 2;
  grid-row: 4;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 350px;
  overflow-y: scroll;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;

const Panel4 = styled.div`
  border-radius: 20px;
  grid-column: 1;
  grid-row: 5;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 350px;
  overflow-y: scroll;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel5 = styled.div`
  border-radius: 20px;
  grid-column: 2;
  grid-row: 5;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 350px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const PanelTable = styled.div`
  border-radius: 20px;
  grid-column: 1 /span 2;
  grid-row: 6;
  background: rgba(205, 192, 176, 1);
  height: 550px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Selector = styled.select`
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  font-size: 14px;
  padding: 8px;
  width: 250px;
  color: #4b4f5d;
`;

const Button = styled.button`
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 2px;
  color: #757575;
  font-size: 14px;
  background: #ffffff;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  &:hover {
    background-color: #f6f6f7;
    cursor: pointer;
  }
`;
const Panel_Dept = styled.div`
  border-radius: 20px;
  grid-column: 1 / span 2;
  grid-row: 3;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 250px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Dept1 = styled.div`
  border-radius: 20px;
  grid-column: 1;
  grid-row: 4;
  background: rgba(238, 223, 204, 1);
  overflow: hidden;
  height: 130px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Dept2 = styled.div`
  border-radius: 20px;
  grid-column: 2;
  grid-row: 4;
  background: rgba(238, 223, 204, 1);
  overflow: hidden;
  height: 130px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;

const Panel_Patient1 = styled.div`
  border-radius: 20px;
  grid-column: 1;
  grid-row: 3;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 700px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Patient2 = styled.div`
  border-radius: 20px;
  grid-column: 2;
  grid-row: 3;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 700px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;

const Panel_Appoint1 = styled.div`
  border-radius: 20px;
  grid-column: 1 / span 2;
  grid-row: 5;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 200px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Appoint2 = styled.div`
  border-radius: 20px;
  grid-column: 1;
  grid-row: 3;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 350px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Appoint3 = styled.div`
  border-radius: 20px;
  grid-column: 2;
  grid-row: 3;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  overflow-y: scroll;
  height: 350px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Appoint4 = styled.div`
  border-radius: 20px;
  grid-column: 1 / span 2;
  grid-row: 4;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 200px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Treatment1 = styled.div`
  border-radius: 20px;
  grid-column: 1;
  grid-row: 3;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  overflow-y: scroll;
  height: 250px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Treatment2 = styled.div`
  border-radius: 20px;
  grid-column: 2;
  grid-row: 3;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  overflow-y: scroll;
  height: 250px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: [],
      selectedStaffID: "1",
      address: "",
      email: "",
      birthdate: "",
      firstName: "",
      lastName: "",
      homeTel: "",
      medicalType: "",
      mobileTel: "",
      salary: "",
      sex: "",
      staffID: "",
      value: "",
      value2: "",

      post_medical_firstName: "",
      post_medical_lastName: "",
      post_medical_email: "",
      post_medical_birthDate: "",
      post_medical_medicalType: "",
      post_medical_sex: "",
      post_medical_address: "",
      post_medical_salary: 0,
      post_medical_homeTel: "",
      post_medical_mobileTel: "",

      departmentName: "",
      location: "",
      manager_ID: "",
      manager_first_name: "",
      manager_last_name: "",
      manager_sex: "",
      manager_tel: "",
      showDLocation: "",
      selectedDeptName: "",
      showDeptName: "",
      selectedManagerID: "",

      patient_Address: "",
      patient_Birthdate: "",
      parent_first_name: "",
      parent_last_name: "",
      parent_phone_number: "",
      patient_ID: "",
      patient_first_name: "",
      patient_last_name: "",
      patient_phone_number: "",
      patient_sex: "",
      allergy_name: "",
      selectedPatientID: "",

      post_Patient_Address: "",
      post_Patient_Birthdate: "",
      post_Parent_first_name: "",
      post_Parent_last_name: "",
      post_Parent_phone_number: "",
      post_Patient_first_name: "",
      post_Patient_last_name: "",
      post_Patient_phone_number: "",
      post_Patient_sex: "",
      post_Allergy_name: "",

      selectedPatientIDAppointment: "",
      selectedAppointmentQueue: "",
      appointment: [],
      get_appointment_date: "",
      get_appointment_doctorID: "",
      get_appointment_doctorEmail: "",
      get_appointment_doctorFirstName: "",
      get_appointment_doctorLastName: "",
      get_appointment_appointID: "",

      post_appointment_date: "",
      post_appointment_doctorID: "",
      post_appointment_patientID: "",

      patch_appointment_appointID: "",
      patch_appointment_date: "",
      patch_appointment_doctorID: "",
      patch_appointment_patientID: "",

      delete_appointment_patientID: "",
      delete_appointment_appointmentID: "",

      get_treatment_patientID: "",
      get_treatment_queue: "",
      get_treatment_doctorID: "",
      get_treatment_cost: "",
      get_treatment_symptom: "",

      post_prescribe_patientID: "",
      post_prescribe_doctorID: "",
      post_prescribe_medicineID: "",
      post_prescribe_quantity: 0,

      isActive: 0
    };
    this.handleSelectedStaffID = this.handleSelectedStaffID.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.getMedicalStaff();
  }
  handleChange = field => event => {
    const value = {};
    value[field] = event.target.value;
    this.setState(value);
  };

  handleSubmit(e) {
    // alert("Submit");
    this.setState({
      value2: this.state.value
    });

    e.preventDefault();
  }
  async postDoctor(value2) {
    const res = await $.post(`${config.apiPath}/api/medical_staff/doctor`, {
      firstname: this.state.post_medical_firstName,
      lastname: this.state.post_medical_lastName,
      sex: this.state.post_medical_sex,
      salary: this.state.post_medical_salary,
      mobile_tel: this.state.post_medical_mobileTel,
      home_tel: this.state.post_medical_homeTel,
      address: this.state.post_medical_address,
      email: this.state.post_medical_email,
      doctor_type: "Doctor",
      birthdate: new Date(
        this.state.post_medical_birthDate + " UTC"
      ).toISOString()
    });
  }
  async patchMedicalStaff(value2) {
    await $.ajax({
      url:
        `${config.apiPath}/api/medical_staff/` +
        this.state.patch_medical_staffID,
      type: "PATCH",
      data: {
        firstname: this.state.patch_medical_firstName,
        lastname: this.state.patch_medical_lastName,
        sex: this.state.patch_medical_sex,
        salary: this.state.patch_medical_salary,
        mobile_tel: this.state.patch_medical_mobileTel,
        home_tel: this.state.patch_medical_homeTel,
        address: this.state.patch_medical_address,
        email: this.state.patch_medical_email,
        doctor_type: "Doctor",
        birthdate: new Date(
          this.state.patch_medical_birthDate + " UTC"
        ).toISOString()
      }
    });
  }

  async updateAppointment() {
    await $.ajax({
      url:
        `${config.apiPath}/api/appoint/` +
        this.state.patch_appointment_appointID,
      type: "PATCH",
      data: {
        doctor_id: this.state.patch_appointment_doctorID,
        patient_id: this.state.patch_appointment_patientID,
        appoint_date: new Date(
          this.state.patch_appointment_date + " UTC"
        ).toISOString()
      }
    });
  }
  async deleteMedicalStaff(value2) {
    await $.ajax({
      url:
        `${config.apiPath}/api/medical_staff/` +
        this.state.delete_medical_staffID,
      type: "DELETE"
    });
  }

  async deleteAppointment() {
    await $.ajax({
      url:
        `${config.apiPath}/api/appoint/` +
        this.state.delete_appointment_appointmentID,
      type: "DELETE"
    });
  }

  handleSelectedStaffID(e) {
    this.setState({
      selectedStaffID: e.target.value
    });
  }
  async getMedicalStaff() {
    const data = await $.get(`${config.apiPath}/api/medical_staff`);
    this.setState({ staff: data });
    console.log(data);
  }
  async getMedicalStaffbyID(selectedStaffID) {
    // var data = (await axios.get(`${config.apiPath}/api/medical_staff/` + selectedStaffID)).data;
    const data = await $.get(
      `${config.apiPath}/api/medical_staff/` + selectedStaffID
    );
    try {
      this.setState({
        address: data.Address,
        birthdate: data.Birthdate,
        email: data.Email,
        firstName: data.First_name,
        lastName: data.Last_name,
        homeTel: data.Home_tel,
        medicalType: data.Medical_type,
        mobileTel: data.Mobile_tel,
        salary: data.Salary,
        sex: data.Sex,
        staffID: data.Staff_ID
      });
    } catch (error) {}
  }
  async getAppointmentbyID(selectedID) {
    // var data = (await axios.get(`${config.apiPath}/api/medical_staff/` + selectedStaffID)).data;
    const data = await $.get(`${config.apiPath}/api/appoint`, {
      patient_id: selectedID
    });
    try {
      console.log("getappoint");
      console.log(data);
      this.setState({appointment: data});
    } catch (error) {}
  }
  async postAppointment(value2) {
    console.log("WTF");
    const res = await $.post(`${config.apiPath}/api/appoint`, {
      doctor_id: this.state.post_appointment_doctorID,
      patient_id: this.state.post_appointment_patientID,
      // appoint_date: new Date("05 October 2011 14:48 UTC").toISOString(),
      appoint_date: new Date(
        this.state.post_appointment_date + " UTC"
      ).toISOString()
    });
  }

  async getLocationbyDeptName(Dept_Name) {
    const data = await $.get(`${config.apiPath}/api/department`);
    console.log("555");
    for (let i = 0; i < data.length; i++) {
      if (data[i].DepartmentName == Dept_Name) {
        this.setState({
          showDLocation: data[i].Location
        });
        break;
      }
    }
  }

  async getDeptNamebyMID(Maneger_ID2) {
    const data = await $.get(`${config.apiPath}/api/department`);
    for (let i = 0; i < data.length; i++) {
      if (data[i].Manager_ID == Maneger_ID2) {
        this.setState({
          showDeptName: data[i].DepartmentName
        });
        break;
      }
    }
  }

  async getInformbyPatientID(selectedPatientID) {
    const data = await $.get(
      `${config.apiPath}/api/patient/` + selectedPatientID
    );
    // console.log("55555");
    this.setState({
      patient_Address: data.Address,
      patient_Birthdate: data.Birthdate,
      patient_first_name: data.Patient_first_name,
      patient_last_name: data.Patient_last_name,
      parent_first_name: data.Parent_first_name,
      parent_last_name: data.Parent_last_name,
      parent_phone_number: data.Parent_phone_number,
      patient_phone_number: data.Phone_number,
      patient_sex: data.Sex,
      allergy_name: data.Allergy_name
    });
  }

  async postPatient(value2) {
    const res = await $.post(`${config.apiPath}/api/patient`, {
      address: this.state.post_Patient_Address,
      birthdate: this.state.post_Patient_Birthdate,
      firstname: this.state.post_Patient_first_name,
      lastname: this.state.post_Patient_last_name,
      parent_firstname: this.state.post_Parent_first_name,
      parent_lastname: this.state.post_Parent_last_name,
      parent_phone: this.state.post_Parent_phone_number,
      phone: this.state.post_Patient_phone_number,
      sex: this.state.post_Patient_sex,
      allergy: this.state.post_Allergy_name
    });
  }

  async getTreatmentbyID(selectedID, i) {
    // var data = (await axios.get(`${config.apiPath}/api/medical_staff/` + selectedStaffID)).data;
    const data = await $.get(`${config.apiPath}/api/treatment`, {
      patient_id: this.state.get_treatment_patientID
    });
    console.log(data);
    try {
      i = parseInt(i) - 1;
      this.setState({
        get_treatment_doctorID: data[i].Doctor_ID,
        get_treatment_cost: data[i].Treatment_cost,
        get_treatment_symptom: data[i].Symptom
      });
    } catch (error) {}
  }

  async postPrescribe(value2) {
    const res = await $.post(`${config.apiPath}/api/medicine/perscribe`, {
      doctor_id: this.state.post_prescribe_doctorID,
      patient_id: this.state.post_prescribe_patientID,
      medicine_id: this.state.post_prescribe_medicineID,
      quantity: this.state.post_prescribe_quantity
    });
  }

  XinputList() {
    var returnVal = [];
    var gList = ["1", "2", "3", "4", "5", "6", "7"];
    for (var i = 0; i < gList.length; i++) {
      returnVal.push(<option value={gList[i]}>{gList[i]}</option>);
    }
    return returnVal;
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        {this.state.isActive != 0 && (
          <Header>Hospital Management System</Header>
        )}
        {this.state.isActive == 0 && (
          <Header2>
            <div>Hospital</div>
            <div>Management</div>
            <div>System</div>
            <br />
          </Header2>
        )}
        <MenuBar>
          <ul>
            <li>
              <a
                href="#home"
                className={this.state.isActive == 0 ? "active" : ""}
                onClick={() => {
                  this.setState({ isActive: 0 });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#MedicalStaff"
                className={this.state.isActive == 1 ? "active" : ""}
                onClick={() => {
                  this.setState({ isActive: 1 });
                }}
              >
                MedicalStaff
              </a>
            </li>
            <li>
              <a
                href="#department"
                className={this.state.isActive == 2 ? "active" : ""}
                onClick={() => {
                  this.setState({ isActive: 2 });
                }}
              >
                Department
              </a>
            </li>
            <li>
              <a
                href="#patient"
                className={this.state.isActive == 3 ? "active" : ""}
                onClick={() => {
                  this.setState({ isActive: 3 });
                }}
              >
                Patient
              </a>
            </li>
            <li>
              <a
                href="#appointment"
                className={this.state.isActive == 4 ? "active" : ""}
                onClick={() => {
                  this.setState({ isActive: 4 });
                }}
              >
                Appointment
              </a>
            </li>
            {/* <li>
              <a
                href="#treatment"
                className={this.state.isActive == 5 ? "active" : ""}
                onClick={() => {
                  this.setState({ isActive: 5 });
                }}
              >
                Treatment
              </a>
            </li> */}
          </ul>
        </MenuBar>
        {this.state.isActive == 0 && (
          <Image2
            src="http://expatincroatia.com/wp-content/uploads/2013/09/how-to-find-a-doctor-in-croatia.jpg"
            class="center"
          />
        )}
        {this.state.isActive == 1 && (
          <Panel>
            <h2>What do you want to know?</h2>
            {/* <div class="input1">
            selectedStaffID : &nbsp;
            <Selector
              value={this.state.selectedStaffID}
              onChange={this.handleSelectedStaffID}
            >
              {this.XinputList()}
            </Selector>
          </div> */}
            <label>
              selectedStaffID :
              <input
                type="text"
                value={this.state.selectedStaffID}
                onChange={this.handleChange("selectedStaffID")}
              />
            </label>
            <Button
              onClick={() =>
                this.getMedicalStaffbyID(this.state.selectedStaffID)
              }
            >
              {/* <Button
            onClick={() => this.getAppointmentbyID(this.state.selectedStaffID)}
          > */}{" "}
              Show Pls
            </Button>
          </Panel>
        )}
        {this.state.isActive == 1 && (
          <Panel2>
            <h1> Show Medical Staff Data as you requested</h1>
            <div>
              <div>{"Show " + "Address: " + this.state.address}</div>
              <br />
              <div>{"Show " + "Birthdate: " + this.state.birthdate}</div>
              <br />
              <div>{"Show " + "Email: " + this.state.email}</div>
              <br />
              <div>{"Show " + "First_name: " + this.state.firstName}</div>
              <br />
              <div>{"Show " + "Home_tel: " + this.state.homeTel}</div>
              <br />
              <div>{"Show " + "Last_name: " + this.state.lastName}</div>
              <br />
              <div>{"Show " + "Medical_type:  " + this.state.medicalType}</div>
              <br />
              <div>{"Show " + "Mobile_tel:  " + this.state.mobileTel}</div>
              <br />
              <div>{"Show " + "Salary:  " + this.state.salary}</div>
              <br />
              <div>{"Show " + "Sex:  " + this.state.sex}</div>
              <br />
              <div>{"Show " + "Staff_ID:  " + this.state.staffID}</div>
            </div>
          </Panel2>
        )}
        {this.state.isActive == 1 && (
          <Panel3>
            <h1>Submit Medical Staff Data to Server</h1>
            <form onSubmit={this.handleSubmit}>
              {/* <div>
              <label>
                Staff_ID:
                <input
                  type="text"
                  value={this.state.post_medical_}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br /> */}
              <div>
                <label>
                  First_name:
                  <input
                    type="text"
                    value={this.state.post_medical_firstName}
                    onChange={this.handleChange("post_medical_firstName")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Last_name:
                  <input
                    type="text"
                    value={this.state.post_medical_lastName}
                    onChange={this.handleChange("post_medical_lastName")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Email:
                  <input
                    type="text"
                    value={this.state.post_medical_email}
                    onChange={this.handleChange("post_medical_email")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Birthdate:
                  <input
                    type="text"
                    value={this.state.post_medical_birthDate}
                    onChange={this.handleChange("post_medical_birthDate")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Address:
                  <input
                    type="text"
                    value={this.state.post_medical_address}
                    onChange={this.handleChange("post_medical_address")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Medical_type:
                  <input
                    type="text"
                    value={this.state.post_medical_medicalType}
                    onChange={this.handleChange("post_medical_medicalType")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Home_tel:
                  <input
                    type="text"
                    value={this.state.post_medical_homeTel}
                    onChange={this.handleChange("post_medical_homeTel")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Mobile_tel:
                  <input
                    type="text"
                    value={this.state.post_medical_mobileTel}
                    onChange={this.handleChange("post_medical_mobileTel")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Sex:
                  <input
                    type="text"
                    value={this.state.post_medical_sex}
                    onChange={this.handleChange("post_medical_sex")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Salary:
                  <input
                    type="number"
                    value={this.state.post_medical_salary}
                    onChange={this.handleChange("post_medical_salary")}
                  />
                </label>
              </div>
              <br />
              <div>
                <input
                  type="submit"
                  value="Submit"
                  onClick={() => this.postDoctor(this.state.value)}
                />
              </div>
            </form>
          </Panel3>
        )}
        {this.state.isActive == 1 && (
          <Panel4>
            <h1>Edit Medical Staff Data as you want</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>
                  Staff_ID:
                  <input
                    type="text"
                    value={this.state.patch_medical_staffID}
                    onChange={this.handleChange("patch_medical_staffID")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  First_name:
                  <input
                    type="text"
                    value={this.state.patch_medical_firstName}
                    onChange={this.handleChange("patch_medical_firstName")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Last_name:
                  <input
                    type="text"
                    value={this.state.patch_medical_lastName}
                    onChange={this.handleChange("patch_medical_lastName")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Email:
                  <input
                    type="text"
                    value={this.state.patch_medical_email}
                    onChange={this.handleChange("patch_medical_email")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Birthdate:
                  <input
                    type="text"
                    value={this.state.patch_medical_birthDate}
                    onChange={this.handleChange("patch_medical_birthDate")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Address:
                  <input
                    type="text"
                    value={this.state.patch_medical_address}
                    onChange={this.handleChange("patch_medical_address")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Medical_type:
                  <input
                    type="text"
                    value={this.state.patch_medical_medicalType}
                    onChange={this.handleChange("patch_medical_medicalType")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Home_tel:
                  <input
                    type="text"
                    value={this.state.patch_medical_homeTel}
                    onChange={this.handleChange("patch_medical_homeTel")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Mobile_tel:
                  <input
                    type="text"
                    value={this.state.patch_medical_mobileTel}
                    onChange={this.handleChange("patch_medical_mobileTel")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Sex:
                  <input
                    type="text"
                    value={this.state.patch_medical_sex}
                    onChange={this.handleChange("patch_medical_sex")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Salary:
                  <input
                    type="number"
                    value={this.state.patch_medical_salary}
                    onChange={this.handleChange("patch_medical_salary")}
                  />
                </label>
              </div>
              <br />
              <div>
                <input
                  type="submit"
                  value="Submit"
                  onClick={() => this.patchMedicalStaff(this.state.value)}
                />
              </div>
            </form>
          </Panel4>
        )}
        {this.state.isActive == 1 && (
          <Panel5>
            <h1> Show Medical Staff Data that you Deleted</h1>
            <div>
              <div>
                <label>
                  Staff_ID:
                  <input
                    type="text"
                    value={this.state.delete_medical_staffID}
                    onChange={this.handleChange("delete_medical_staffID")}
                  />
                </label>
                <input
                  type="submit"
                  value="Submit"
                  onClick={() => this.deleteMedicalStaff(this.state.value)}
                />
              </div>
              {/* <div> */}
              {/* </div> */}
            </div>
          </Panel5>
        )}
        {this.state.isActive == 1 && (
          <PanelTable>
            <div style={{ display: "block" , overflowY: 'scroll' , overflowX: 'auto' , height: '100%' }}>
              <h1>All Staff</h1>
              <table className={"table table-striped table-hover"}>
                <thead>
                  <tr>
                    <th>Staff_ID</th>
                    <th>First_name</th>
                    <th>Last_name</th>
                    <th>Medical_type</th>
                    <th>Address</th>
                    <th>Birthdate</th>
                    <th>Email</th>
                    <th>Mobile_tel</th>
                    <th>Home_tel</th>
                    <th>Salary</th>
                    <th>Sex</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.staff.map(
                    (
                      {
                        Address,
                        Birthdate,
                        Email,
                        First_name,
                        Home_tel,
                        Last_name,
                        Medical_type,
                        Mobile_tel,
                        Salary,
                        Sex,
                        Staff_ID
                      },
                      index
                    ) => {
                      return (
                        <tr key={Staff_ID}>
                          <td>{Staff_ID}</td>
                          <td>{First_name}</td>
                          <td>{Last_name}</td>
                          <td>{Medical_type}</td>
                          <td>{Address}</td>
                          <td>{Birthdate}</td>
                          <td>{Email}</td>
                          <td>{Mobile_tel}</td>
                          <td>{Home_tel}</td>
                          <td>{Salary}</td>
                          <td>{Sex}</td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </PanelTable>
        )}
        {this.state.isActive == 2 && (
          <Panel_Dept>
            <div>
              <h2>Department Session</h2>
              <Panel_Dept1>
                <div class="input1">
                  Put the depratment's name : &nbsp;
                  <label>
                    <input
                      type="text"
                      value={this.state.selectedDeptName}
                      onChange={this.handleChange("selectedDeptName")}
                    />
                  </label>
                </div>
                <Button
                  onClick={() =>
                    this.getLocationbyDeptName(this.state.selectedDeptName)
                  }
                >
                  {" "}
                  Search
                </Button>
                <br />
                <div>{"Location: " + this.state.showDLocation}</div>
              </Panel_Dept1>
              <Panel_Dept2>
                <div class="input1">
                  Put the maneger's ID : &nbsp;
                  <label>
                    <input
                      type="text"
                      value={this.state.selectedManagerID}
                      onChange={this.handleChange("selectedManagerID")}
                    />
                  </label>
                </div>
                <Button
                  onClick={() =>
                    this.getDeptNamebyMID(this.state.selectedManagerID)
                  }
                >
                  {" "}
                  Search
                </Button>
                <br />
                <div>{"Department: " + this.state.showDeptName}</div>
              </Panel_Dept2>
            </div>
          </Panel_Dept>
        )}
        {this.state.isActive == 3 && (
          <Panel_Patient1>
            <div class="input1">
              Please key patient ID : &nbsp;
              <label>
                <input
                  type="text"
                  value={this.state.selectedPatientID}
                  onChange={this.handleChange("selectedPatientID")}
                />
              </label>
            </div>
            <Button
              onClick={() =>
                this.getInformbyPatientID(this.state.selectedPatientID)
              }
            >
              {" "}
              Search
            </Button>
            <br />
            <h3>Information</h3>
            <div>
              <div>{"First Name: " + this.state.patient_first_name}</div>
              <br />
              <div>{"Last Name: " + this.state.patient_last_name}</div>
              <br />
              <div>{"Sex:  " + this.state.patient_sex}</div>
              <br />
              <div>{"Address: " + this.state.patient_Address}</div>
              <br />
              <div>{"Birth Date: " + this.state.patient_Birthdate}</div>
              <br />
              <div>{"Phone Number: " + this.state.patient_phone_number}</div>
              <br />
              <div>
                {"Parent Name: " +
                  this.state.parent_first_name +
                  " " +
                  this.state.parent_last_name}
              </div>
              <br />
              <div>
                {"Parent Phone Number:  " + this.state.parent_phone_number}
              </div>
              <br />
              <div>{"Allergy Name:  " + this.state.allergy_name}</div>
            </div>
          </Panel_Patient1>
        )}
        {this.state.isActive == 3 && (
          <Panel_Patient2>
            <h2>Add New Patient</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>
                  First_name:
                  <input
                    type="text"
                    value={this.state.post_Patient_first_name}
                    onChange={this.handleChange("post_Patient_first_name")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Last_name:
                  <input
                    type="text"
                    value={this.state.post_Patient_last_name}
                    onChange={this.handleChange("post_Patient_last_name")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Sex:
                  <input
                    type="text"
                    value={this.state.post_Patient_sex}
                    onChange={this.handleChange("post_Patient_sex")}
                  />
                  <div>(eg. Male,Female )</div>
                </label>
              </div>
              <br />
              <div>
                <label>
                  Birthdate:
                  <input
                    type="text"
                    value={this.state.post_Patient_Birthdate}
                    onChange={this.handleChange("post_Patient_Birthdate")}
                  />
                  <div>(eg. yyyy-mm-dd)</div>
                </label>
              </div>
              <br />
              <div>
                <label>
                  Phone Number:
                  <input
                    type="text"
                    value={this.state.post_Patient_phone_number}
                    onChange={this.handleChange("post_Patient_phone_number")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Parent First Name:
                  <input
                    type="text"
                    value={this.state.post_Parent_first_name}
                    onChange={this.handleChange("post_Parent_first_name")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Parent Last Name:
                  <input
                    type="text"
                    value={this.state.post_Parent_last_name}
                    onChange={this.handleChange("post_Parent_last_name")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Parent Phone Number:
                  <input
                    type="text"
                    value={this.state.post_Parent_phone_number}
                    onChange={this.handleChange("post_Parent_phone_number")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Allergy Name:
                  <input
                    type="text"
                    value={this.state.post_Allergy_name}
                    onChange={this.handleChange("post_Allergy_name")}
                  />
                </label>
              </div>
              <be />
              <div> (eg. 'Peanut allergy,Shrimp') </div>
              <br />
              <div>
                <input
                  type="submit"
                  value="Add"
                  onClick={() => this.postPatient(this.state.value)}
                />
              </div>
            </form>
          </Panel_Patient2>
        )}
        {this.state.isActive == 4 && (
          <Panel_Appoint1>
            <h1> Show Appointment</h1>
            <div>
              <div>
                <label>
                  Patient_ID:
                  <input
                    type="text"
                    value={this.state.selectedPatientIDAppointment}
                    onChange={this.handleChange("selectedPatientIDAppointment")}
                  />
                </label>
                <input
                  type="submit"
                  value="Submit"
                  onClick={() =>
                    this.getAppointmentbyID(
                      this.state.selectedPatientIDAppointment
                    )
                  }
                />
              </div>
            </div>
          </Panel_Appoint1>
        )}
        {this.state.isActive == 4 &&(
          <PanelTable>
            <div style={{ display: "block" , overflowY: 'scroll' , overflowX: 'auto' , height: '100%' }}>
              <table className={"table table-striped table-hover"}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Doctor_ID</th>
                    <th>Doctor Email</th>
                    <th>Doctor First Name</th>
                    <th>Doctor Last Name</th>
                    <th>Appointment ID</th>
                  </tr>
                </thead>
                  <tbody>
                  {this.state.appointment.map(
                    (
                      {
                        Appoint_ID,
                        Appointment_date,
                        Doctor_ID,
                        Doctor_email,
                        Doctor__first_name,
                        Doctor_last_name,
                        Doctor_sex,
                        Patient_ID,
                        Patient_first_name,
                        Patient_last_name,
                        Patient_sex
                      },
                      index
                    ) => {
                      return (
                        <tr key={Appoint_ID}>
                          <td>{Appointment_date}</td>
                          <td>{Doctor_ID}</td>
                          <td>{Doctor_email}</td>
                          <td>{Doctor__first_name}</td>
                          <td>{Doctor_last_name}</td>
                          <td>{Appoint_ID}</td>
                        </tr>
                      );
                    }
                  )}
                  </tbody>
                </table>
            </div>
          </PanelTable>
          )}
        {this.state.isActive == 4 && (
          <Panel_Appoint2>
            <h1> Add Appointment for that Patient</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>
                  Patient ID:
                  <input
                    type="text"
                    value={this.state.post_appointment_patientID}
                    onChange={this.handleChange("post_appointment_patientID")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Doctor ID:
                  <input
                    type="text"
                    value={this.state.post_appointment_doctorID}
                    onChange={this.handleChange("post_appointment_doctorID")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Date And Time:
                  <input
                    type="number"
                    value={this.state.post_appointment_date}
                    onChange={this.handleChange("post_appointment_date")}
                  />
                </label>
              </div>
              <br />
              <div>
                <input
                  type="submit"
                  value="Submit"
                  onClick={() => this.postAppointment(this.state.value)}
                />
              </div>
            </form>
          </Panel_Appoint2>
        )}
        {this.state.isActive == 4 && (
          <Panel_Appoint3>
            <h1> Update Appointment for that Patient</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>
                  Appoint ID:
                  <input
                    type="text"
                    value={this.state.patch_appointment_appointID}
                    onChange={this.handleChange("patch_appointment_appointID")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Patient ID:
                  <input
                    type="text"
                    value={this.state.patch_appointment_patientID}
                    onChange={this.handleChange("patch_appointment_patientID")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Doctor ID:
                  <input
                    type="text"
                    value={this.state.patch_appointment_doctorID}
                    onChange={this.handleChange("patch_appointment_doctorID")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Date And Time:
                  <input
                    type="text"
                    value={this.state.patch_appointment_date}
                    onChange={this.handleChange("patch_appointment_date")}
                  />
                </label>
              </div>
              <br />
              <div>
                <input
                  type="submit"
                  value="Submit"
                  onClick={() => this.updateAppointment()}
                />
              </div>
            </form>
          </Panel_Appoint3>
        )}
        {this.state.isActive == 4 && (
          <Panel_Appoint4>
            <h1> Delete Appointment</h1>
            <div>
              <div>
                <label>
                  Patient_ID:
                  <input
                    type="text"
                    value={this.state.delete_appointment_patientID}
                    onChange={this.handleChange("delete_appointment_patientID")}
                  />
                </label>
                <label>
                  Appoint_ID:
                  <input
                    type="text"
                    value={this.state.delete_appointment_appointmentID}
                    onChange={this.handleChange(
                      "delete_appointment_appointmentID"
                    )}
                  />
                </label>
                <input
                  type="submit"
                  value="Submit"
                  onClick={() => this.deleteAppointment()}
                />
              </div>
            </div>
          </Panel_Appoint4>
        )}
        {this.state.isActive == 5 && (
          <Panel_Treatment1>
            <h1> Show Treatment</h1>
            <div>
              <div>
                <label>
                  Patient_ID:
                  <input
                    type="text"
                    value={this.state.get_treatment_patientID}
                    onChange={this.handleChange("get_treatment_patientID")}
                  />
                </label>
                <label>
                  Queue:
                  <input
                    type="text"
                    value={this.state.get_treatment_queue}
                    onChange={this.handleChange("get_treatment_queue")}
                  />
                </label>
                <input
                  type="submit"
                  value="Submit"
                  onClick={() =>
                    this.getTreatmentbyID(
                      this.state.get_treatment_patientID,
                      this.state.get_treatment_queue
                    )
                  }
                />
              </div>
              {/* <div> */}
              <br />
              <div>
                {"Show " + "Doctor ID: " + this.state.get_treatment_doctorID}
              </div>
              <br />
              <div>{"Show " + "Cost: " + this.state.get_treatment_cost}</div>
              <br />
              <div>
                {"Show " + "Symptom: " + this.state.get_treatment_symptom}
              </div>
              {/* </div> */}
            </div>
          </Panel_Treatment1>
        )}
        {this.state.isActive == 5 && (
          <Panel_Treatment2>
            <h1> Prescribe Medicine</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>
                  Patient ID:
                  <input
                    type="text"
                    value={this.state.post_prescribe_patientID}
                    onChange={this.handleChange("post_prescribe_patientID")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Doctor ID:
                  <input
                    type="text"
                    value={this.state.post_prescribe_doctorID}
                    onChange={this.handleChange("post_prescribe_doctorID")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Medicine ID:
                  <input
                    type="text"
                    value={this.state.post_prescribe_medicineID}
                    onChange={this.handleChange("post_prescribe_medicineID")}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Quantity:
                  <input
                    type="number"
                    value={this.state.post_prescribe_quantity}
                    onChange={this.handleChange("post_prescribe_quantity")}
                  />
                </label>
              </div>
              <br />
              <div>
                <input
                  type="submit"
                  value="Submit"
                  onClick={() => this.postPrescribe(this.state.value)}
                />
              </div>
            </form>
          </Panel_Treatment2>
        )}
      </Container>
    );
  }
}

export default App;
