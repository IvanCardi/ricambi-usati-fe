import { getAccessToken } from "../getAccessToken";
import { OrderDraft } from "../models/orderDraft";

export async function getOrderDraft(id: string): Promise<OrderDraft> {
  const token = await getAccessToken();

  const orderDraft = await fetch(
    `${process.env.BE_BASE_URL}/orderDrafts/${id}`,
    {
      next: { revalidate: 0, tags: ["order-draft"] },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await orderDraft.json();
}
