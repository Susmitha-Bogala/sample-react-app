import DataTable from "react-data-table-component";

function TableData({ promoCodeList }) {
  const styles = {
    borderStyle: {
      borderWidth: "1px",
      borderColor: "#aaaaaa",
      borderStyle: "solid",
    },

    redColor: {
      color: "red",
    },
    greenColor: {
      color: "green",
    },
  };

  const columns = [
    {
      name: "Name",
      selector: "code",
    },
    {
      name: "Description",
      selector: "description",
    },
    {
      name: "Delivery",
      selector: "delivery",
      cell: (row) => (
        <div>
          {row.delivery ? (
            <i
              class="fa fa-check"
              style={styles.greenColor}
              aria-hidden="true"
            ></i>
          ) : (
            <i
              class="fa fa-times"
              style={styles.redColor}
              aria-hidden="true"
            ></i>
          )}
        </div>
      ),
    },
    {
      name: "Discount",
      selector: "discount",
    },
  ];

  return (
    <div>
      {promoCodeList.length ? (
        <DataTable
          style={styles.borderStyle}
          title="Promo Code List"
          columns={columns}
          data={promoCodeList}
        />
      ) : null}
    </div>
  );
}

export default TableData;
