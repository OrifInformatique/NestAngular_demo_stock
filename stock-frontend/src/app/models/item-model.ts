import { ItemCommonModel } from "./item-common-model";
import { ItemConditionModel } from "./item-condition-model";
import { LoanModel } from "./loan-model";
import { StockingPlaceModel } from "./stocking-place-model";
import { SupplierModel } from "./supplier-model";

export interface ItemModel {
    item_id: number;
    item_common: ItemCommonModel;
    inventory_prefix: string | null;
    serial_number: string | null;
    buying_price: number | null;
    buying_date: Date | null;
    warranty_duration: number | null;
    remarks: string | null;
    supplier: SupplierModel;
    supplier_ref: string | null;
    created_by_user_id: number | null;
    created_date: Date | null;
    modified_by_user_id: number | null;
    modified_date: Date | null;
    checked_by_user_id: number | null;
    checked_date: Date | null;
    stocking_place: StockingPlaceModel;
    item_condition: ItemConditionModel;
    current_loan: LoanModel | null;
}
