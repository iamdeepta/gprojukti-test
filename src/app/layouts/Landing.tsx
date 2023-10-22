"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CSVLink } from "react-csv";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Table from "../components/Table";
import { IStoreData } from "../interfaces/store";
import styles from "../scss/landing.module.scss";

const Landing = ({
  store,
  searchParams,
}: {
  store: any;
  searchParams: any;
}) => {
  const router = useRouter();

  const [singleStoreData, setSingleStoreData] = useState<IStoreData>();

  const headers = [
    { label: "District Id", key: "district.id" },
    { label: "District Name", key: "district.name" },
    { label: "Name", key: "name" },
    { label: "Type", key: "type" },
    { label: "Slug", key: "slug" },
    { label: "Address", key: "address" },
    { label: "Primary Phone", key: "primary_phone" },
    { label: "Secondary Phone", key: "secondary_phone" },
    { label: "Location", key: "location" },
    { label: "Opening Time", key: "opening_time" },
    { label: "Closing Time", key: "closing_time" },
    { label: "Shown In Website", key: "shown_in_website" },
    { label: "Off Days", key: "off_days" },
    { label: "Area", key: "area" },
    { label: "Region", key: "region" },
  ];

  const csvReport = {
    data: store.data,
    headers: headers,
    filename: "csv_report.csv",
  };

  const goToPrevPage = async () => {
    if (store.meta_data.previous !== null) {
      router.push(
        `/?page_size=${store.meta_data.page_size}&page=${store.meta_data.previous}`
      );
    }
  };

  const goToNextPage = async () => {
    if (store.meta_data.next !== null) {
      router.push(
        `/?page_size=${store.meta_data.page_size}&page=${store.meta_data.next}`
      );
    }
  };

  return (
    <>
      <div
        className={
          singleStoreData
            ? `${styles.backdrop} ${styles.backdropActive}`
            : styles.backdrop
        }
        onClick={() => setSingleStoreData(undefined)}
      ></div>
      <div className={styles.landingLayout}>
        <div className={styles.exportButton}>
          <CSVLink {...csvReport} className={styles.csvButton}>
            Export as CSV
          </CSVLink>
        </div>

        <div className={styles.tableLayout}>
          <Table store={store.data} setSingleStoreData={setSingleStoreData} />
        </div>

        <Modal data={singleStoreData} />

        <div className={styles.paginationLayout}>
          <p>
            Total:{" "}
            {searchParams.page > 1
              ? store.meta_data.next === null
                ? store.meta_data.total
                : store.data.length * searchParams.page
              : store.data.length}
            /{store.meta_data.total}
          </p>
          <Button
            color={store.meta_data.previous === null ? "lightgray" : "#28aad4"}
            text="Prev"
            textColor="white"
            isDisabled={store.meta_data.previous === null ? true : false}
            handleClick={() => goToPrevPage()}
          />
          <Button
            color={store.meta_data.next === null ? "lightgray" : "#28aad4"}
            text="Next"
            textColor="white"
            isDisabled={store.meta_data.next === null ? true : false}
            handleClick={() => goToNextPage()}
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
