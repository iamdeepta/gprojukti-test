import { IStoreData } from "../interfaces/store";
import styles from "../scss/table.module.scss";
import Button from "./Button";

const Table = ({
  store,
  setSingleStoreData,
}: {
  store: IStoreData[];
  setSingleStoreData: (value: IStoreData) => void;
}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>District Id</th>
          <th>District Name</th>
          <th>Name</th>
          <th>Type</th>
          <th>Slug</th>
          <th>Address</th>
          <th>Primary Phone</th>
          <th>Secondary Phone</th>
          <th>Location</th>
          <th>Map Link</th>
          <th>Opening Time</th>
          <th>Closing Time</th>
          <th>Shown In Website</th>
          <th>Off Days</th>
          <th>Area</th>
          <th>Region</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {store.map((item: IStoreData) => {
          return (
            <tr key={item.name}>
              <td>{item.district.id}</td>
              <td>{item.district.name}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.slug}</td>
              <td>{item.address}</td>
              <td>{item.primary_phone}</td>
              <td>{item.secondary_phone}</td>
              <td>{item.location}</td>
              <td>{item.map_link}</td>
              <td>{item.opening_time}</td>
              <td>{item.closing_time}</td>
              <td>{item.shown_in_website === true ? "true" : "false"}</td>
              <td>
                {item.off_days.map((offDay: string, index: number) => (
                  <div key={offDay + index}>{offDay}</div>
                ))}
              </td>
              <td>{item.area}</td>
              <td>{item.region}</td>
              <td>
                <Button
                  color="#28aad4"
                  text="Show Details"
                  textColor="white"
                  handleClick={() => setSingleStoreData(item)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
