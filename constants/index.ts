import { spec } from "node:test/reporters";

export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
    specialty: "Cardiology",
    experience: "15 years",
    qualification: "MD, DM (Cardiology)",
    rating: 4.9,
    about:
      "Dr. John Green is a senior interventional cardiologist specializing in heart disease prevention and stent procedures. He’s known for his calm approach and accurate diagnosis.",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
    specialty: "Pediatrics",
    experience: "10 years",
    qualification: "MBBS, MD (Pediatrics)",
    rating: 4.8,
    about:
      "Dr. Leila Cameron focuses on child wellness and immunization. She’s passionate about educating parents on nutrition and growth monitoring.",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
    specialty: "Dermatology",
    experience: "12 years",
    qualification: "MD (Dermatology)",
    rating: 4.7,
    about:
      "Dr. David Livingston specializes in skin allergies and aesthetic dermatology with expertise in laser and acne treatments.",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
    specialty: "Neurology",
    experience: "9 years",
    qualification: "DM (Neurology)",
    rating: 4.9,
    about:
      "Dr. Evan Peter has extensive experience in treating migraine, stroke, and epilepsy, with a focus on early diagnosis of neurological disorders.",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
    specialty: "Orthopedics",
    experience: "14 years",
    qualification: "MS (Orthopedics)",
    rating: 4.8,
    about:
      "Dr. Jane Powell specializes in joint replacement surgeries and sports injuries, emphasizing long-term mobility and rehabilitation.",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
    specialty: "General Medicine",
    experience: "8 years",
    qualification: "MBBS, MD (Internal Medicine)",
    rating: 4.6,
    about:
      "Dr. Alex Ramirez provides comprehensive care for chronic illnesses and preventive health programs for adults.",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
    specialty: "Gynecology",
    experience: "11 years",
    qualification: "MD (Obstetrics & Gynecology)",
    rating: 4.8,
    about:
      "Dr. Jasmine Lee is an experienced OB-GYN focusing on women’s reproductive health, prenatal care, and infertility management.",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
    specialty: "Psychiatry",
    experience: "13 years",
    qualification: "MD (Psychiatry)",
    rating: 4.7,
    about:
      "Dr. Alyana Cruz helps patients manage stress, depression, and anxiety through therapy and lifestyle-based interventions.",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
    specialty: "Endocrinology",
    experience: "10 years",
    qualification: "DM (Endocrinology)",
    rating: 4.9,
    about:
      "Dr. Hardik Sharma specializes in diabetes and thyroid management with a focus on patient education and preventive endocrinology.",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};