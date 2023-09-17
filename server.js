import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

const engineerJson = `[
  {
    "id": "0001",
    "type": "fullStack Developer",
    "name": "Feisal",
    "Salary": "$100k",
    "experience": {
      "frontend": {
        "work": "fivver",
        "position": "Senior Designer"
      },
      "backend": {
        "work": "Google",
        "position": "Senior Consultant"
      },
      "agencies": [
        {
          "jobs": "Designing",
          "projects": "400 websites",
          "names": ["website", "designing"]
        },
        {
          "jobs": "System Development",
          "projects": "100 system",
          "names": ["cargo", "school management", "hospital management"]
        }
      ]
    }
  },
  {
    "id": "0002",
    "type": "fullStack Developer",
    "name": "Osama",
    "Salary": "$200k",
    "experience": {
      "frontend": {
        "work": "upwork",
        "position": "Senior Designer"
      },
      "backend": {
        "work": "Google",
        "position": "Senior Consultant"
      },
      "agencies": [
        {
          "jobs": "Designing",
          "projects": "500 websites",
          "names": ["website", "designing"]
        },
        {
          "jobs": "System Development",
          "projects": "100 system",
          "names": ["cargo", "school management", "hospital management"]
        }
      ]
    }
  },
  {
    "id": "0003",
    "type": "fullStack Developer",
    "name": "Aar",
    "Salary": "$300k",
    "experience": {
      "frontend": {
        "work": "fivver",
        "position": "Senior Designer"
      },
      "backend": {
        "work": "Google",
        "position": "Senior Consultant"
      },
      "agencies": [
        {
          "jobs": "Designing",
          "projects": "400 websites",
          "names": ["website", "designing"]
        },
        {
          "jobs": "System Development",
          "projects": "100 system",
          "names": ["cargo", "school management", "hospital management"]
        }
      ]
    }
  }
]`;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
  res.render("index.ejs", { engineer: data });
});

app.post("/engineer", (req, res) => {
  switch (req.body.choice) {
    case "Feisal":
      data = JSON.parse(engineerJson)[0];
      break;
    case "Osama":
      data = JSON.parse(engineerJson)[1];
      break;
    case "Aar":
      data = JSON.parse(engineerJson)[2];
      break;
    default:
      break;
  }
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
