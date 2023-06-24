import React from "react";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import Profile from "./Profile";
import { profiles } from "../../profile-data";
import styles from "./ProfileList.module.css";

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1 className="--color-light">Team Members</h1>
        <div className={styles["profile-container"]}>
          {/* <Profile
        img={profile1}
        name="Adara Nwodo"
        job="Cloud Engineer"
        company="Microsoft"
        link="#"
      />
      <Profile
        img={profile2}
        name="Almejid Ali"
        job="Software Engineer"
        company="Google"
        link="#"
      />
      <Profile
        img={profile3}
        name="Oyinlade Ojesanmi"
        job="Software Engineer"
        company="Google"
        link="#"
      /> */}

          {profiles.map((profile) => {
            const { img, name, job, company, link, id } = profile;
            return (
              <Profile
                key={id}
                img={img}
                name={name}
                job={job}
                company={company}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
