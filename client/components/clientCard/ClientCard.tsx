import React, { FC } from 'react'
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { IClientResponse } from "~/typings";
import { BASE_URL } from "~/http-common";
const ClientCard: FC<IClientResponse> = ({ fullName ,amount,imageUrl}) => {
  return (
    <>
      <div className={styles.clientCard}>
        <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}>
          <p>Amount : €{amount}</p>
          <p style={{width:"25%"}}>Name: {fullName}</p>
          <p>
            <Image src={BASE_URL+imageUrl} width="120" height="80" />
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default ClientCard