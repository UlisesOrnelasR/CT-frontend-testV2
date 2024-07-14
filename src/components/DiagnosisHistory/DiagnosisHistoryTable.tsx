import { Table } from "../ui";

// interface Props {
//   products: Product[];
// }

export const DiagnosisHistoryTable = ({ diagnostic_list }: any) => {
  const columns = [
    {
      header: "Problem/Diagnosis",
      accessorKey: "name",
    },
    {
      header: "Description",
      accessorKey: "description",
    },

    {
      header: "Status",
      accessorKey: "status",
    },
  ];

  return (
    <>
      <Table data={diagnostic_list} columns={columns} maxHeight="179px" />
    </>
  );
};
