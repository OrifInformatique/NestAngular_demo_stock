export interface SupplierModel {
    supplier_id: number;
    name: string;
    address_line1: string | null;
    address_line2: string | null;
    zip: string | null;
    city: string | null;
    country: string | null;
    tel: string | null;
    email: string | null;
    archive: Date | null;
}
