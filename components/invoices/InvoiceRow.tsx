export default function InvoiceRow({
  invoice,
}: {
  invoice: any;
}) {
  return (
    <tr className="border-t">

      <td className="px-6 py-4">
        {invoice.invoice_number}
      </td>

      <td className="px-6 py-4">
        {invoice.clients?.name}
      </td>

      <td className="px-6 py-4">
        ₹{invoice.amount}
      </td>

      <td className="px-6 py-4">
        {invoice.status}
      </td>

      <td className="px-6 py-4">
        {invoice.due_date}
      </td>

    </tr>
  );
}