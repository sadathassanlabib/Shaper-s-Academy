// data/routine.js

export const routineMeta = {
  morning: "8:00 AM - 1:00 PM",
  evening: "4:00 PM - 9:00 PM",
};

// ✅ Friday first, then Saturday → Thursday
export const routineDays = [
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];

export const routineData = {
  Saturday: [
    {
      time: "9:00 AM",
      subject: "Physics",
      group: "Science",
      teacher: "F/C",
    },
    {
      time: "10:00 AM",
      subject: "Math",
      group: "Science",
      teacher: "Formk",
    },
    {
      time: "11:00 AM",
      subject: "ICT",
      group: "Common",
      teacher: "Romm",
    },
    {
      time: "12:00 PM",
      subject: "Economics",
      group: "Humanities",
    },
  ],

  Sunday: [
    {
      time: "5:00 PM - 6:30 PM",
      subject: "Biology",
      group: "Science",
    },
    {
      time: "6:30 PM - 8:00 PM",
      subject: "Chemistry",
      group: "Science",
    },
  ],

  Monday: [
    {
      time: "5:00 PM - 6:00 PM",
      subject: "Math",
      group: "Science",
    },
    {
      time: "6:00 PM - 7:00 PM",
      subject: "Physics",
      group: "Science",
    },
    {
      time: "7:00 PM - 8:00 PM",
      subject: "Economics",
      group: "Humanities",
    },
  ],

  Tuesday: [
    {
      time: "5:00 PM - 6:30 PM",
      subject: "Biology",
      group: "Science",
    },
    {
      time: "6:30 PM - 8:00 PM",
      subject: "Chemistry",
      group: "Science",
    },
  ],

  Wednesday: [
    {
      time: "5:00 PM - 6:00 PM",
      subject: "Math",
      group: "Science",
    },
    {
      time: "6:00 PM - 7:00 PM",
      subject: "Physics",
      group: "Science",
    },
    {
      time: "7:00 PM - 8:00 PM",
      subject: "English",
      group: "Common",
    },
  ],

  Thursday: [],

  Friday: [
    {
      time: "9:00 AM",
      subject: "ICT",
      group: "Common",
    },
    {
      time: "10:00 AM",
      subject: "English",
      group: "Common",
    },
  ],
};

export const subjectGroups = {
  Common: ["ICT", "English"],
  Humanities: ["Economics"],
  Science: ["Biology", "Physics", "Chemistry", "Math"],
};