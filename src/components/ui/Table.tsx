import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { cn } from "../../libs/utils";

interface Props {
  data: any;
  columns: any;
  maxHeight?: string;
}

export function Table({ data, columns, maxHeight = "400px" }: Props) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full mb-4 text-left">
        <thead className="bg-shadow">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index: number) => (
                <th
                  key={header.id}
                  scope="col"
                  className={cn(
                    "px-3 py-3.5  font-bold",
                    index === 0 ? "rounded-l-3xl" : "",
                    index === headerGroup.headers.length - 1
                      ? "rounded-r-3xl"
                      : ""
                  )}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      </table>
      <div
        // className="overflow-y-auto"
        style={{ maxHeight }}
      >
        <table className="min-w-full text-left">
          <tbody
            className="divide-y divide-shadow bg-white"
            style={{ maxHeight }}
          >
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className="whitespace-nowrap px-3 py-4" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
