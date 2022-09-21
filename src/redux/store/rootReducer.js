import { combineReducers } from "redux";
import { cartReducer } from "../modules/cart/cartReducer";
import { getCategoriesReducer } from "../modules/getCategories";
import { getCertificateReducer } from "../modules/getCertificates";
import { getClientReducer } from "../modules/getClients";
import { getProductReducer } from "../modules/getProducts";
import { getProductsByIdsReducer } from "../modules/getProductsByIds";
import { getSupplierReducer } from "../modules/getSuppliers";
import { langReducer } from "../modules/lang/langReducer";

export const rootReducer = combineReducers({
  lang: langReducer,
  products: getProductReducer,
  categories: getCategoriesReducer,
  productsByIds: getProductsByIdsReducer,
  cart: cartReducer,
  certificates: getCertificateReducer,
  clients: getClientReducer,
  suppliers: getSupplierReducer,
});
