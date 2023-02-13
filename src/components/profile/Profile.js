import React from "react";
import Card from "../UI/card/Card";
import styles from "./Profile.module.css";
import { BiTrash } from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGooglePlus,
} from "react-icons/ai";

const Profile = ({ id, img, name, job, company, link }) => {
  const removePerson = (id) => {};
  return (
    <Card>
      <div className={styles.profile}>
        <img src={img} alt="{name}" />
        <div className={styles["profile-content"]}>
          <h3>My profile</h3>
          <div className={styles.text}>
            <p>Name:</p>
            <p>{name}</p>
          </div>
          <div className={styles.text}>
            <p>Job:</p>
            <p> {job}</p>
          </div>
          <div className={styles.text}>
            <p>Company:</p>
            <p> {company}</p>
          </div>

          <a href={link}>Link</a>
          <BiTrash color="red" size={22} onClick={() => removePerson(id)} />

          <div className={styles.icons}>
            <AiOutlineTwitter />
            <AiOutlineGithub />
            <AiOutlineGooglePlus />
          </div>
          <div className={styles.btn}>
            <a href="#">View member</a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
