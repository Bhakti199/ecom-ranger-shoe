import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Address are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's address.
 * send GET Request at /api/user/address
 * */

export const getOrdersItemsHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userOrders = schema.users.findBy({ _id: userId }).orders;
  return new Response(200, {}, { orders: userOrders });
};

/**
 * This handler handles adding items to user's address list.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addItemToOrdersHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userOrders = schema.users.findBy({ _id: userId }).orders;
    const { order } = JSON.parse(request.requestBody);
    userOrders.push({
      ...order,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { orders: userOrders, cart: [] });
    const userCart = schema.users.findBy({ _id: userId }).cart;
    return new Response(201, {}, { orders: userOrders, cart: userCart });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's Address.
 * send DELETE Request at /api/user/address
 * body contains {address}
 * */

export const removeItemFromOrdersHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userOrders = schema.users.findBy({ _id: userId }).orders;
    const orderId = request.params.orderId;
    userOrders = userOrders.filter((item) => item._id !== orderId);
    this.db.users.update({ _id: userId }, { orders: userOrders });
    return new Response(200, {}, { orders: userOrders });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
