import React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Badge from "@cloudscape-design/components/badge";
import Home from "../../assets/img/icons/home.png";
import HomeActive from "../../assets/img/icons/home-active.png";
import Quotations from "../../assets/img/icons/quotations.png";
import QuotationsActive from "../../assets/img/icons/quotations-active.png";
import Specification from "../../assets/img/icons/specification.png";
import SpecificationActive from "../../assets/img/icons/specification-active.png";
import Customers from "../../assets/img/icons/customers.png";
import CustomersActive from "../../assets/img/icons/customers-active.png";
import Inventory from "../../assets/img/icons/inventory.png";
import InventoryActive from "../../assets/img/icons/inventory-active.png";
import Products from "../../assets/img/icons/products.png";
import ProductsActive from "../../assets/img/icons/products-active.png";
import RawMaterials from "../../assets/img/icons/raw-materials.png";
import RawMaterialsActive from "../../assets/img/icons/raw-materials-active.png";
import VendorProfile from "../../assets/img/icons/vendor-profile.png";
import VendorProfileActive from "../../assets/img/icons/vendor-profile-active.png";
import PurchaseOrder from "../../assets/img/icons/purchase-orders.png";
import PurchaseOrderActive from "../../assets/img/icons/purchase-orders-active.png";
import LogOut from "../../assets/img/icons/log-out.png";
import { useLocation, useNavigate } from "react-router-dom";

const pages = [
  {
    path: "/app/dashboard",
    label: "DashBoard",
    icon: Home,
    iconActive: HomeActive,
  },
  {
    path: "/app/quotations",
    label: "Warehouse shipments",
    icon: Quotations,
    iconActive: QuotationsActive,
  },
  {
    path: "/app/finish-product-specification",
    label: "Store shipments",
    icon: Specification,
    iconActive: SpecificationActive,
  },
  {
    path: "/app/customerDeliveries",
    label: "Customer Deliveries",
    icon: Customers,
    iconActive: CustomersActive,
  },
  {
    path: "/app/",
    label: "Returned Deliveries",
    icon: Customers,
    iconActive: CustomersActive,
  },
  {
    path: "/app/customers",
    label: "Purchasers",
    icon: Customers,
    iconActive: CustomersActive,
  },
  {
    path: "/app/delivery-agents",
    label: "Drivers/Delivery Agents",
    icon: Customers,
    iconActive: CustomersActive,
  },
  {
    path: "/app/customers",
    label: "Tickets",
    icon: Customers,
    iconActive: CustomersActive,
  },
  {
    path: "/app/customers",
    label: "Settings",
    icon: Customers,
    iconActive: CustomersActive,
  },
  // {
  //   path: "/app/inventory",
  //   label: "Add more",
  //   icon: Inventory,
  //   iconActive: InventoryActive,
  //   children: [
  //     {
  //       path: "/app/inventory/raw-materials",
  //       label: "Add User",
  //       icon: RawMaterials,
  //       iconActive: RawMaterialsActive,
  //     },
  //     {
  //       path: "/app/inventory/vendor-profile",
  //       label: "Add Suppliers",
  //       icon: VendorProfile,
  //       iconActive: VendorProfileActive,
  //     },
  //     {
  //       path: "/app/inventory/purchase-orders",
  //       label: "Add Category",
  //       icon: PurchaseOrder,
  //       iconActive: PurchaseOrderActive,
  //     },
  //     {
  //       path: "/app/inventory/purchase-orders",
  //       label: "Add Product",
  //       icon: PurchaseOrder,
  //       iconActive: PurchaseOrderActive,
  //     },
  //   ],
  // },
  // {
  //   path: "/app/products",
  //   label: "Payments",
  //   icon: Products,
  //   iconActive: ProductsActive,
  // },
];

const bottomPages = [
  {
    type: "link",
    text: "Notifications",
    href: "#/notifications",
    info: <Badge color="red">23</Badge>,
  },
  {
    type: "link",
    text: "Documentation",
    href: "/app/documentation",
    icon: LogOut,
    iconActive: LogOut,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeHref, setActiveHref] = React.useState(location.pathname);

  const handleFollow = (event) => {
    const { href } = event.detail;
    if (!event.detail.external) {
      event.preventDefault();
      setActiveHref(href);
      navigate(href);
    }
  };

  return (
    <div className="sidebar">
      <SideNavigation
        activeHref={activeHref}
        header={{ href: "/app/dashboard", text: "PTR Technologies" }}
        onFollow={handleFollow}
        items={[
          ...pages.map((page) => ({
            type: page.children ? "expandable-link-group" : "link",
            text: page.label,
            href: page.path,
            items: page.children
              ? page.children.map((child) => ({
                type: "link",
                text: child.label,
                href: child.path,
              }))
              : [],
            style: page.label === "Add more" ? { backgroundColor: "black", color: "black", width: "full" } : {}, // Apply inline style for "Add more" section
          })),
          { type: "divider" },
          ...bottomPages.map((page) => ({
            type: "link",
            text: page.text,
            href: page.href,
            info: page.info,
          })),
        ]}
      />
    </div>
  );
};

export default Sidebar;