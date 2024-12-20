import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobJunction Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Signing up is quick and easy. As a job seeker, you will create a profile with your skills, experience, and preferences.
              <p>&</p>
              As an employer, you will create a company profile to post jobs and manage applications.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Search & Explore Opportunities</p>
              <p>
              Browse thousands of job listings based on your preferences (location, job type, salary range, etc.) and discover exciting career opportunities.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Once you find a job that interests you, apply directly through the platform with your customized resume and cover letter.
             <p>&</p>           
              Finding the right talent is crucial to the success of your business, and JobJunction is here to make your recruitment process faster, easier, and more efficient

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HowItWorks;