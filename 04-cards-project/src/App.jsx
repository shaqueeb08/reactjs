import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      id: 1,
      company: "Amazon",
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      post: "Senior UI/UX Designer",
      posted: "5 days ago",
      price: "$120/hr",
      location: "Mumbai, India",
      type: "Part-Time",
      level: "Senior Level",
    },
    {
      id: 2,
      company: "Google",
      logo: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
      post: "Software Developer",
      posted: "1 day ago",
      price: "$150/hr",
      location: "Bangalore, India",
      type: "Full-Time",
      level: "Mid Level",
    },
    {
      id: 3,
      company: "Microsoft",
      logo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/493/small/microsoft-logo-microsoft-icon-transparent-free-png.png",
      post: "Frontend Engineer",
      posted: "3 days ago",
      price: "$100/hr",
      location: "Hyderabad, India",
      type: "Full-Time",
      level: "Junior Level",
    },
    {
      id: 4,
      company: "Meta",
      logo: "https://cdn-ilbfgjf.nitrocdn.com/nzIgKXIgteHtWUHyirsKlqGuYxUDSdsu/assets/images/optimized/rev-5c51e54/www.etrainindia.com/wp-content/uploads/2024/07/Meta-Logo.png",
      post: "Product Designer",
      posted: "7 days ago",
      price: "$130/hr",
      location: "Remote",
      type: "Part-Time",
      level: "Senior Level",
    },
    {
      id: 5,
      company: "Netflix",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png",
      post: "Backend Developer",
      posted: "2 days ago",
      price: "$140/hr",
      location: "Remote",
      type: "Full-Time",
      level: "Senior Level",
    },
    {
      id: 6,
      company: "Apple",
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
      post: "iOS Developer",
      posted: "6 days ago",
      price: "$160/hr",
      location: "Pune, India",
      type: "Full-Time",
      level: "Mid Level",
    },
    {
      id: 7,
      company: "Spotify",
      logo: "https://toppng.com/uploads/preview/spotify-logo-black-png-2418x812-11735762505iwslmqopcv.webp",
      post: "Product Designer",
      posted: "1 day ago",
      price: "$110/hr",
      location: "Remote",
      type: "Part-Time",
      level: "Mid Level",
    },
    {
      id: 8,
      company: "Adobe",
      logo: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
      post: "UI Designer",
      posted: "4 days ago",
      price: "$95/hr",
      location: "Noida, India",
      type: "Part-Time",
      level: "Junior Level",
    },
  ];
  return (
    <div className="parent">
      {jobs.map(function (elem, index) {
        return (
          <div key={index}>
            <Card
              companyName={elem.company}
              logo={elem.logo}
              post={elem.post}
              posted={elem.posted}
              price={elem.price}
              location={elem.location}
              type={elem.type}
              level={elem.level}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
